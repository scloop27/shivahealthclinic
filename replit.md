# Blessings Medical Clinic

## Overview

Blessings Medical Clinic is a modern, patient-first medical clinic website built as a single-page React application. The site showcases Dr. Nikhil Gohokar's primary care practice in Fall River, MA, providing information about services, insurance acceptance, patient testimonials, and contact details. A key feature is an AI-powered virtual assistant chatbot that helps patients with common questions about the clinic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Styling**: Tailwind CSS via CDN with custom theme configuration (teal, sage, cream, coral color palette)
- **Icons**: Lucide React for consistent iconography
- **Typography**: Google Fonts (Inter for sans-serif, Merriweather for serif)

### Component Structure
The application follows a modular component architecture with each section as a standalone component:
- `Navbar` - Sticky navigation with mobile responsive hamburger menu
- `Hero` - Landing section with CTA buttons and social proof
- `About` - Clinic statistics and overview
- `MeetDoctor` / `DoctorProfile` - Doctor bio with detailed profile view
- `Services` - Grid layout of medical services offered
- `Insurance` - Accepted insurance plans display
- `Testimonials` - Patient reviews carousel
- `FAQ` - Expandable accordion-style FAQs
- `Contact` - Footer with contact information and CTA banner
- `Assistant` - AI chatbot widget

### State Management
- Simple React useState hooks for local component state
- View switching between home and doctor profile pages managed at App level
- No external state management library needed given the application's simplicity

### AI Integration
- **Provider**: Google Gemini API (gemini-2.5-flash model)
- **Purpose**: Virtual assistant chatbot for patient inquiries
- **Implementation**: Service layer (`services/geminiService.ts`) handles API communication
- **System Prompt**: Configured with clinic-specific information, compassionate tone guidelines, and safety guardrails for medical advice

### Routing
- No router library used; simple conditional rendering based on `currentView` state
- Anchor links with smooth scrolling for single-page navigation

## External Dependencies

### Third-Party Services
- **Google Gemini API**: Powers the AI virtual assistant chatbot
  - Requires `GEMINI_API_KEY` environment variable
  - Accessed via `@google/genai` SDK

### Environment Variables
- `GEMINI_API_KEY`: Required for AI chatbot functionality (stored in `.env.local`)

### CDN Resources
- Tailwind CSS (loaded via script tag)
- Google Fonts (Inter, Merriweather)

### NPM Dependencies
- `react` / `react-dom`: Core React framework
- `@google/genai`: Google Generative AI SDK
- `lucide-react`: Icon library
- `vite` / `@vitejs/plugin-react`: Build tooling
- `typescript`: Type checking