# ClinCell.org - Medical Research Company Website

## Overview

This is a responsive website for ClinCell.org, a research company focused on advancing medical treatments and cancer research. The application is built as a full-stack TypeScript project with a React frontend and Express.js backend, designed with a clean, professional aesthetic using teal and purple color schemes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development**: tsx for TypeScript execution
- **Error Handling**: Centralized error middleware
- **Logging**: Custom request/response logging

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migration**: Drizzle Kit for schema management
- **Schema Location**: Shared between client and server in `/shared/schema.ts`
- **Connection**: Neon Database serverless connector

## Key Components

### Page Structure
The website follows a 7-page structure as outlined in the project requirements:
1. **Company** (`/`) - Mission and company overview
2. **Expertise** (`/expertise`) - Cancer studies and CRO services
3. **Pipeline** (`/pipeline`) - Research studies with interactive search
4. **Sponsors/CRO** (`/sponsors`) - Partnership and clinical research services
5. **News** (`/news`) - Latest updates and announcements
6. **Careers** (`/careers`) - Job opportunities and company culture
7. **Contact** (`/contact`) - Contact information and inquiry form

### UI Components
- **Navigation**: Responsive navigation with mobile menu support
- **Footer**: Multi-column footer with social links and site navigation
- **Cards**: Consistent card-based layout for content sections
- **Forms**: Contact forms with validation using react-hook-form
- **Interactive Elements**: Search functionality in pipeline section

### Color Scheme
- **Primary**: Teal (`hsl(173, 58%, 39%)`) for headings and primary actions
- **Secondary**: Soft purple (`hsl(262, 83%, 58%)`) for highlights and accents
- **Hint**: Blue (`hsl(217, 91%, 60%)`) for links and secondary elements
- **Background**: White with muted gray sections

## Data Flow

### Current Implementation
- **Storage**: In-memory storage implementation for user data
- **API Routes**: Placeholder structure in `/server/routes.ts`
- **Client Queries**: TanStack Query setup for future API integration
- **Forms**: Local state management with form validation

### Database Schema
- **Users Table**: Basic user entity with username and password fields
- **Extensible**: Schema designed for easy expansion with additional tables

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide Icons**: Modern icon library
- **shadcn/ui**: Pre-built component library

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Fast development server and build tool
- **ESBuild**: Fast JavaScript bundler for production
- **Drizzle Kit**: Database migration and management

### Runtime Dependencies
- **React**: Frontend framework with hooks
- **Express**: Backend web framework
- **TanStack Query**: Data fetching and caching
- **Wouter**: Lightweight routing
- **Zod**: Schema validation

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Requirements
- **Node.js**: ES Modules support required
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Production**: Serves static files and API routes from single Express server

### Development Workflow
- **Hot Reload**: Vite development server with HMR
- **Type Checking**: TypeScript compilation without emit
- **Database**: Push schema changes directly to development database

### Special Considerations
- **Replit Integration**: Configured with Replit-specific plugins and banner
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Asset Handling**: Support for attached assets directory
- **Error Boundaries**: Runtime error overlay in development mode

## Recent Changes (January 23, 2025)

### Major Card Layout Redesign
- **Pipeline Page**: Upgraded to sophisticated three-card layout with "Cancer Phase 1", "Cancer Phase 2", and "Bio Phase 1" studies featuring detailed D-Domain technology descriptions
- **Sponsors Page**: Enhanced with three partnership cards - "Research Sponsorship", "Technology Partnership", and "Innovation Grants" with comprehensive collaboration details
- **News Page**: Implemented three-card news layout - "Breakthrough in D-Domain Trials", "Partnership Announced", and "Award Recognition" with specific medical research achievements
- **Careers Page**: Transformed into refined two-card layout with "Open Positions" and "Employee Benefits" featuring detailed job opportunities and comprehensive benefits package

### Advanced Glassmorphism Implementation
- Upgraded all cards with sophisticated transparent effects using `rgba(255, 255, 255, 0.15)` backgrounds
- Enhanced backdrop blur from 10px to 15px for deeper glass effect
- Implemented refined border styling with teal-to-purple gradients
- Added subtle shadows `0 8px 16px rgba(0, 0, 0, 0.2)` for enhanced depth

### Comprehensive Footer Redesign
- Replaced all page footers with modern vertical gradient design transitioning from dark teal (#006D77) to light teal (#A3E4D7)
- Integrated comprehensive navigation structure with Company, Explore, and Support columns
- Added complete contact information: email, phone, and address details
- Implemented social media integration with Twitter, LinkedIn, and Instagram icons in coral (#FF6F61)
- Enhanced with gradient logo, backdrop blur effects, and professional typography

### Typography and Visual Enhancements
- Maintained consistent Montserrat font family across all new elements
- Applied precise text sizing: 24px for headings, 16px for descriptions, 14px for navigation
- Implemented text shadows `1px 1px 3px rgba(0, 0, 0, 0.3)` for improved readability
- Enhanced link hover effects with gradient transitions using #2ECC71 and #3498DB accent colors