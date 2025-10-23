# Nathaniel School of Music - Foundation Piano Course Landing Page

## Overview

This is a single-page marketing website for the Nathaniel School of Music's Foundation Piano Course. The application is designed as a lead-generation landing page with a primary focus on converting visitors into course enrollments through strategic CTAs, geo-targeted pricing, and seamless contact integration.

The site showcases a 6-month structured piano training program that combines playing, theory, ear training, and rhythm, available in online, offline (Bangalore), and hybrid modes. The page emphasizes the unique "bottom-up" teaching approach and comprehensive musical education.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**October 23, 2025 - Social Media Sharing & Favicon**
- Updated social preview to use NSM logo (white version on dark background)
- Generalized social media content (removed instructor-specific mentions)
- Improved titles and descriptions for better click-through rates
- Set NSM logo as favicon (square logo)
- Comprehensive Open Graph meta tags for Facebook, Instagram, LinkedIn, WhatsApp
- Twitter Card meta tags for X platform
- Proper image format (PNG) with dimensions for reliable social media display

**October 23, 2025 - WhatsApp/Mobile Field Enhancement**
- Changed "WhatsApp Number" label to "WhatsApp / Mobile"
- Expanded country code selector to 15 prominent codes (India, USA, UK, UAE, Singapore, Australia, Malaysia, China, Germany, France, Italy, Japan, South Korea, Spain, Mexico)
- Added "🌍 Other" option allowing custom country code entry for any country worldwide
- Reset button to return to dropdown from custom entry

**October 23, 2025 - Header & SEO Updates**
- Added descriptive labels under header icons: "WhatsApp", "Call Us", "Music Tips", "Free Tutorials"
- Instagram link updated to instagram.com/jasonzac (was nathanielschool)
- Reformatted SEO section text for better readability
- Removed Instagram reels section (platform doesn't support reliable inline embedding)

**October 23, 2025 - Student Photo Highlights & Geo-Pricing Fix**
- Added 158 unique course highlights to student photos section
  - Dynamic randomization on hover (desktop) or always visible (mobile)
  - Smart pool management ensures no repeats across all photos
  - Categories: USPs, testimonials, piano skills, theory, ear training, rhythm, performance, etc.
- Fixed critical geo-pricing bug for international users
  - Implemented IP-based geolocation using ip-api.com (with ipapi.co fallback)
  - Now correctly detects USA, Canada, Australia, Europe, UAE, Middle East, etc.
  - Defaults to international pricing on API failure (safer for conversion)
  - Testing: Use `localStorage.setItem('test_region', 'domestic'/'international')` + reload

**October 23, 2025 - Vintage Design Update & Image Management**
- Updated color scheme from modern dark mode to vintage/rustic piano conservatory aesthetic
- Color palette: Warm browns (30° hue), creams, and antique gold tones (42° hue)
- Replaced all placeholder photos with 2 actual instructor photos:
  - Hero: 060A0073.jpg (teaching/classroom scene)
  - Instructor: jason-riffs.jpg (Jason Zac portrait)
- Prepared testimonials section for 6 student photos (student-1.jpg through student-6.jpg)
- Cleaned up image directory - removed all placeholder images, kept only NSM logos and active photos
- Created image management documentation (`client/public/images/README.md`) for easy student photo uploads

**October 20, 2025 - Phase 2 Enhancement Release**
- Added Google Analytics integration with comprehensive event tracking
- Implemented A/B testing system for hero headlines and CTA buttons
- Expanded testimonials from 2 to 6 reviews with interactive Embla Carousel
- Created new Course Preview section with embedded demo lesson video
- Built advanced form analytics with engagement tracking and completion monitoring
- All analytics events tied to Google Analytics for conversion optimization

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **Vite + React**: Modern build tooling with React 18 for component-based UI development
- **TypeScript**: Full type safety across the application
- **Wouter**: Lightweight client-side routing (currently single-page, extensible for future routes)

**Styling & Design System**
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: Pre-built accessible component library built on Radix UI primitives
- **Design Philosophy**: Vintage/rustic piano conservatory aesthetic with warm brown tones (30° hue, 8-18% saturation), cream text, and antique gold accents (42° hue)
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Animations**: Framer Motion for subtle fade/slide effects on scroll

**Component Architecture**
- Section-based organization (`/client/src/components/sections/`) for landing page blocks
- Reusable UI components from shadcn/ui (`/client/src/components/ui/`)
- Modular design allowing independent updates to all 11 sections:
  - Hero (with A/B testing support)
  - USPs (7 feature cards)
  - Syllabus (4 learning categories)
  - Course Structure
  - Course Preview (new - demo video section)
  - Who It's For (5 learner types)
  - Testimonials (6 reviews in interactive carousel)
  - Fees (geo-targeted pricing)
  - FAQ (accordion)
  - SEO paragraph
  - Footer

**State Management**
- React Query (@tanstack/react-query) for server state and API data fetching
- Local component state for UI interactions (modals, accordions)
- No global state management needed due to single-page nature

### Backend Architecture

**Server Framework**
- **Express.js**: Minimal Node.js server for API endpoints and static file serving
- **Development Mode**: Vite middleware integration for HMR (Hot Module Replacement)
- **Production Mode**: Serves pre-built static assets from `/dist/public`

**API Endpoints**
- `/api/geo`: Geolocation detection for regional pricing (returns "domestic" or "international" based on visitor's country)
  - First checks CDN headers: `x-vercel-ip-country`, `cf-ipcountry`, `x-replit-user-ip-country`
  - If headers unavailable (Replit), extracts client IP from `x-forwarded-for` and uses IP geolocation API
  - Uses ip-api.com (free, no key, 45 req/min) with ipapi.co as backup
  - Domestic countries: India, Nepal, Sri Lanka, Bangladesh, Pakistan, Bhutan, Maldives (₹20,000 + GST)
  - International: All other countries ($420)
  - Defaults to international pricing on API failure (safer for conversion)

**Content Management**
- JSON-based content system (`/content/landing.json`) for non-technical content updates
- All copy, pricing, links, and structured data managed through JSON without code changes
- Asset management via `/attached_assets` and `/public/images`

### Data Storage Solutions

**Current Implementation**
- In-memory storage (`MemStorage` class) for user data
- No persistent database currently connected (Drizzle ORM configured but not actively used)
- Schema defined in `/shared/schema.ts` with PostgreSQL table definitions for future use

**Database Configuration (Future-Ready)**
- **Drizzle ORM**: Type-safe SQL query builder configured for PostgreSQL
- **Neon Serverless**: PostgreSQL adapter ready for serverless deployments
- Connection string expected via `DATABASE_URL` environment variable
- Migration system in place (`drizzle-kit`) for schema version control

### External Dependencies

**Third-Party UI Libraries**
- Radix UI primitives (accordion, dialog, dropdown, popover, etc.) for accessible components
- Lucide React for icon system
- Embla Carousel for testimonial slider (active - 6 testimonials with navigation)
- cmdk for command palette functionality (if needed)

**External Services Integration**

1. **Enrollment Form**: Google Forms (`https://forms.gle/rrfqJzL5TzoT57Nd6`)
2. **WhatsApp**: Click-to-chat integration with phone number +91 77604 56847
3. **Email**: `music@nathanielschool.com` for direct contact
4. **Video Hosting**: YouTube for explainer video embeds
5. **Social Media**: YouTube (`youtube.com/channel/UCCI37YB3l21oq_sLoc92YfA`), Instagram (`instagram.com/jasonzac`), and Patreon (`patreon.com/jasonzac`)
6. **IP Geolocation**: ip-api.com (primary) and ipapi.co (backup) for country detection

**Fonts**
- Google Fonts: Playfair Display and Inter loaded via CDN

**SEO & Analytics**
- **Google Analytics**: Full integration with event tracking for conversions, video plays, and user engagement
- **Advanced Form Analytics**: Track enrollment form opens, engagement time, and potential completions
- **A/B Testing System**: Built-in experimentation framework with localStorage persistence
  - Hero headline variations (3 variants)
  - Primary CTA button text variations (4 variants)
  - Automatic variant assignment and exposure tracking
  - Conversion tracking tied to A/B test variants
- Structured data (JSON-LD schema) for Course, Organization, and Offer markup
- Open Graph and Twitter Card meta tags for social sharing
- Semantic HTML with proper heading hierarchy

**Deployment Considerations**
- Configured for Replit deployment with specific Vite plugins (`@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`)
- Environment-aware build process (development vs production)
- Static asset bundling with esbuild for server code

### Key Architectural Decisions

**Content-First Architecture**
- Separates content from code via JSON configuration files
- Enables non-developer content updates without redeployment
- Trade-off: Less dynamic than CMS, but simpler and faster for single-page sites

**Geo-Targeted Pricing**
- Server-side region detection to avoid client-side manipulation
- Simplifies pricing logic while maintaining regional relevance
- Alternative considered: Client-side IP lookup (rejected due to reliability concerns)

**Lead-Focused Design**
- Multiple CTAs throughout the page (sticky mobile button, section-specific enrollment links)
- All contact methods (form, WhatsApp, email) prominently displayed
- Conversion tracking ready through structured data markup

**Component Modularity**
- Each landing page section is self-contained and independently maintainable
- Consistent prop patterns for data injection from JSON
- Enables A/B testing and iterative improvements per section

**Accessibility & Performance**
- Radix UI ensures WCAG compliance for interactive components
- Lazy loading and code splitting via Vite
- Dark mode optimized for reduced eye strain during extended browsing