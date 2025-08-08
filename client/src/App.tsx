import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Expertise from "@/pages/Expertise";
//import Pipeline from "@/pages/Pipeline";
import Sponsors from "@/pages/Sponsors";
//import News from "@/pages/News";
//import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import OurTeam from "@/pages/team";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/expertise" component={Expertise} />          
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/contact" component={Contact} />
          {/*<Route path="/patient" component={Patient} />*/}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
