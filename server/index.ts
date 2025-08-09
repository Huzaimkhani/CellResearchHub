import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from 'http'; // Add this import

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Save reference to original json method
  const originalResJson = res.json.bind(res);
  
  // Override res.json
  res.json = function (bodyJson: any) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      
      if (capturedJsonResponse) {
        // Safely stringify with circular reference handling
        try {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        } catch (e) {
          logLine += ` :: [Unstringifiable Response]`;
        }
      }

      // Truncate long lines
      if (logLine.length > 300) {
        logLine = logLine.slice(0, 297) + "...";
      }

      log(logLine);
    }
  });

  next();
});
// Create HTTP server explicitly
const server = createServer(app);

async function startApp() {
  await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    if (process.env.NODE_ENV !== 'production') console.error(err);
  });

  // Conditionally setup Vite or static files
  if (process.env.NODE_ENV === 'development') {
    log("Starting in DEVELOPMENT mode with Vite");
    await setupVite(app, server);
  } else {
    log("Starting in PRODUCTION mode with static files");
    serveStatic(app);
  }

  // Only start server if not in Vercel environment
  if (!process.env.VERCEL) {
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen(port, "0.0.0.0", () => {
      log(`Server running on port ${port} in ${process.env.NODE_ENV} mode`);
    });
  }
}

startApp().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

// Export for Vercel serverless functions
export default app;