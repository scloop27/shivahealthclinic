# Blessings Medical Clinic

## Overview

Blessings Medical Clinic is a patient-facing healthcare website built with React and TypeScript. The application serves as a digital presence for a family medicine practice, featuring information about services, doctor profiles, insurance acceptance, patient testimonials, and an AI-powered virtual assistant chatbot. The site emphasizes a "Compassionate Clinical" tone with a modern, clean design using a teal/sage/cream color palette.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Routing**: React Router DOM v7 for client-side navigation between home page and doctor profile page
- **Styling**: Tailwind CSS loaded via CDN with custom theme configuration (teal, sage, cream, coral color palette)
- **Icons**: Lucide React for consistent iconography throughout the application

### Component Structure
The application follows a single-page application pattern with section-based components:
- `Navbar` - Sticky navigation with mobile hamburger menu
- `Hero` - Main landing section with call-to-action
- `About` - Clinic statistics and overview
- `MeetDoctor` - Doctor introduction card
- `DoctorProfile` - Dedicated full-page doctor biography (separate route)
- `Services` - Medical services grid
- `Insurance` - Accepted insurance plans display
- `Testimonials` - Patient reviews carousel
- `FAQ` - Expandable accordion for common questions
- `Contact` - Footer with contact information and CTA
- `Assistant` - Floating call-to-action button with soft nudge popup

### Call-to-Action Widget
- **Purpose**: Encourage patients to call the clinic for appointments
- **Features**: 
  - Radiating ripple animation to draw attention
  - Soft nudge card appears after 4 seconds with "Accepting New Patients" message
  - Direct phone call link (tel:6172515065)
  - Hover label showing "Call Now"
  - Badge with pinging animation for urgency

### Configuration
- TypeScript configured with ESNext modules, React JSX, and path aliases (`@/*`)
- Vite handles environment variable injection for API keys (`GEMINI_API_KEY`)
- Development server runs on port 5000 with open host access

## External Dependencies

### APIs and Services
- **Google Gemini API**: Powers the AI virtual assistant chatbot. Requires `GEMINI_API_KEY` environment variable set in `.env.local`

### Key NPM Packages
- `@google/genai`: Official Google Generative AI SDK for Gemini integration
- `react-router-dom`: Client-side routing
- `lucide-react`: Icon library

### External Resources
- **Tailwind CSS**: Loaded via CDN (`cdn.tailwindcss.com`)
- **Google Fonts**: Inter (sans-serif) and Merriweather (serif) font families
- **Pravatar**: Placeholder avatar images for testimonials

### Static Assets
- Doctor profile image expected at `/dr.webp` with `/dr.png` fallback