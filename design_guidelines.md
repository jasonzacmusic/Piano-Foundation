# Design Guidelines: Nathaniel School of Music - Foundation Piano Course Landing Page

## Design Approach
**Vintage Piano Conservatory Aesthetic with Modern Landing Page Excellence**
A warm, rustic design inspired by classic music conservatories and vintage piano studios. Combines nostalgic sepia-toned browns and creams with strategic gold accents. The aesthetic evokes timeless musical tradition while maintaining modern conversion-focused functionality for a premium educational experience.

## Core Design Principles
1. **Lead-Focused Architecture**: Every visual element guides toward enrollment
2. **Professional Credibility**: Design reflects serious musical education with historic gravitas
3. **Aspirational Yet Accessible**: Vintage warmth makes classical education feel approachable
4. **Trust Through Transparency**: Clear structure, pricing, and outcomes build confidence

---

## Color Palette

### Vintage/Rustic Theme (Default)
**Philosophy**: Warm browns, creams, and sepia tones reminiscent of aged pianos, vintage music halls, and classical conservatories

### Base Colors
- **Background**: 30 15% 12% (deep warm brown, like aged walnut piano finish)
- **Card Surface**: 32 18% 16% (slightly lighter warm brown, aged paper feel)
- **Text Primary**: 40 25% 92% (warm cream, vintage sheet music color)
- **Text Secondary**: 38 15% 65% (muted sepia for supporting text)

### Accent Colors
- **Primary Gold**: 42 75% 55% (rich antique gold for CTAs and key highlights)
- **Muted Gold/Brass**: 38 20% 22% (aged brass patina for subtle accents)
- **Border Colors**: 30 12-14% 20-22% (warm brown borders maintaining subtle contrast)

### Semantic Colors
- **Success/Check**: 42 75% 55% (use primary gold for consistency)
- **Focus/Ring**: 42 75% 55% (antique gold for interactive states)
- **Destructive**: 0 72% 45% (standard red for errors)

### Color Psychology
This palette creates:
- **Warmth & Approachability**: Brown tones feel inviting vs. cold blacks
- **Heritage & Trust**: Vintage aesthetic suggests established tradition
- **Premium Quality**: Rich wood tones evoke high-end piano craftsmanship
- **Nostalgic Comfort**: Sepia tones create familiar, comforting atmosphere

---

## Typography

### Font Families
**Display/Headings**: 'Playfair Display' (Google Fonts) - Elegant serif conveying musical sophistication and classical education
**Body/UI**: 'Inter' (Google Fonts) - Clean, highly legible sans-serif for modern readability

### Type Scale
- **H1 (Hero)**: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- **H2 (Section Headers)**: text-3xl md:text-4xl lg:text-5xl, font-bold
- **H3 (Subsections)**: text-2xl md:text-3xl, font-semibold
- **H4 (Card Titles)**: text-xl md:text-2xl, font-semibold
- **Body Large**: text-lg md:text-xl, leading-relaxed
- **Body**: text-base md:text-lg, leading-relaxed
- **Small/Caption**: text-sm, text-muted-foreground

---

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-6 to gap-8
- Micro-spacing: space-y-4 for stacked elements

### Container Strategy
- **Page container**: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- **Content containers**: max-w-4xl (for readable text sections)
- **Grid layouts**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 (for USP cards)

### Section Heights
- **Hero**: min-h-screen with content centered vertically
- **Content sections**: Natural height with consistent py-16 to py-32
- **No arbitrary viewport constraints**: Let content breathe naturally

---

## Component Library

### Hero Section
- Full-width background image (jason-piano-5.jpg or similar teaching/performance photo)
- Dark warm overlay: linear gradient with brown/black tones (40-60% opacity) for text legibility over images
- Content: Centered, max-w-4xl
- Trust badges: Horizontal row with icons, evenly spaced
- Dual CTA buttons: Primary (gold filled) + Secondary (gold outline with subtle backdrop-blur)
- Text color: Warm cream (--foreground) to contrast against dark overlay

### Video Section (Course Preview)
- Embedded inline at top of page (not modal popup)
- Uses actual YouTube thumbnail image
- Click opens video in new tab (external link to YouTube)
- Title + subtitle introducing the demo lesson
- Card-based layout with warm brown background

### USP Cards (7 cards in responsive grid)
- Card style: Warm brown card background (bg-card), subtle border in card-border color
- Icon: lucide-react icons in primary gold, w-12 h-12 in rounded background
- Title: H4 styling in warm cream foreground
- Description: Body text in muted-foreground (sepia tone)
- Hover: hover-elevate utility for subtle interaction
- Grid: 1 column mobile, 2 columns tablet, 3 columns desktop

### Syllabus/What You'll Learn (4 sections, 2x2 grid)
- Section headers with gold accent icons
- Bullet lists with CheckCircle icons in primary gold
- Cards with left border accent (border-l-4 border-l-primary) - **NOTE**: This violates rounded corners rule if cards are rounded. Consider removing or using full border.
- Grid: 1 column mobile, 2 columns desktop

### Course Structure
- Clean text-based layout with key stats (32+ hours, 20 classes, etc.)
- May include timeline or icon-based milestone layout
- Uses cards or simple text blocks with warm brown backgrounds

### Who It's For (5 learner types)
- Card-based grid layout
- Centered text with warm brown card backgrounds
- Title + description format
- Grid: 1-2-3 column responsive layout

### Testimonial Carousel (6 testimonials)
- Embla Carousel implementation for interactive sliding
- Student photos using actual Jason/course images as placeholders
- Quote in italic text with warm cream color
- Name and role below in smaller muted text
- Card backgrounds in warm brown tones

### Fee Display Section
- Large, prominent pricing with geo-targeted currency (₹ for domestic, $ international)
- Clear presentation with GST notes
- CTA buttons for enrollment
- Warm brown card background with subtle gold accent borders

### FAQ Accordion
- shadcn/ui accordion component
- Gold chevron icons for expand/collapse
- Question in semibold, answer in regular weight
- Warm brown backgrounds with subtle dividers
- Smooth height animation on expand

### Footer
- 3-column layout: Logo/tagline, Quick Links, Contact Info (stacked on mobile)
- NSM White logo for visibility on dark brown background
- Social icons with hover effects
- Copyright and location in smaller text
- Warm brown background slightly different from page background

---

## Images & Visual Treatment

### Primary Images (User-Provided)
All images stored in `client/public/images/`:
1. **Hero Background**: jason-piano-5.jpg - Full-width with warm dark overlay
2. **NSM Logo**: nsm-logo-main.png (NSM White logo) - Header and footer
3. **Instructor/Student Photos**: jason-piano-1 through 6, jason-zac.jpg, etc.
4. **Performance/Teaching**: live-performance.jpg, live-melodica.jpg for social proof

### Image Treatment
- Hero: Dark warm overlay (brown-tinted black gradient, 40-60% opacity) for text legibility
- All images: Subtle rounded corners (rounded-lg to rounded-xl)
- Aspect ratios: Maintain 16:9 for landscape, 1:1 or 4:5 for portraits
- Color tone: Photos should feel warm; may apply sepia CSS filters if needed for cohesion

### Photo Usage in Sections
- **Hero**: jason-piano-5.jpg as full-width background
- **Video Preview**: YouTube thumbnail embedded inline (top of page)
- **Testimonials**: Various jason-piano-X.jpg images as placeholder student photos
- **About/Bio**: jason-zac.jpg or portrait shots for instructor credibility

---

## Animations (Framer Motion - Minimal & Subtle)

### Scroll-Triggered Reveals
- USP cards: Fade in + slight upward motion (y: 20 → 0), staggered by 0.05s
- Sections: Fade in on scroll into viewport with `whileInView`
- Duration: 0.5-0.6s with ease-out

### Interactive States
- Button hover: Use built-in hover-elevate class (subtle background brightening)
- Card hover: hover-elevate for subtle lift effect
- Link hover: Color transition to brighter gold

**Critical**: Animations enhance, never distract. All animations < 0.6s duration. Use `viewport={{ once: true }}` to prevent re-triggering.

---

## Accessibility & Best Practices

- All images have descriptive alt text
- Form inputs have proper labels and data-testid attributes
- Color contrast ratios meet WCAG AA standards (cream on dark brown passes)
- Focus states visible with gold outline ring (--ring color)
- Keyboard navigation fully supported
- Semantic HTML5 elements (header, main, section, footer)

---

## Mobile-First Responsive Strategy

### Breakpoints (Tailwind defaults)
- Mobile: Base styles (< 768px)
- Tablet: md: (768px+)
- Desktop: lg: (1024px+)
- Wide: xl: (1280px+)

### Key Responsive Adjustments
- Hero headline: Smaller on mobile (text-4xl) → larger on desktop (text-7xl)
- Grid columns: 1 → 2 → 3 progression
- Padding: Tighter on mobile (px-4, py-12) → spacious on desktop (px-8, py-32)
- Typography: Body text 16px mobile minimum for readability
- Video: Responsive iframe sizing

---

## Conversion Optimization Elements

### Visual Hierarchy for CTAs
1. Primary CTA (Enrol Now): Gold filled button, largest size, prominent placement
2. Secondary CTAs (WhatsApp/Email): Gold outline buttons
3. Tertiary actions: Link styling with icons

### Trust Indicators
- Icon row under hero (Live Online, Certificate, Hybrid modes)
- Testimonial photos and names (6 reviews in carousel)
- Graded certificate badge/icon
- Course structure transparency (32+ hours, 20 classes detailed breakdown)
- Footer contact prominence (WhatsApp, email, location)

---

## Technical Implementation Notes

### Performance
- All images served from `client/public/images/` via Vite static asset serving
- Images referenced as `/images/filename.jpg` (absolute path from public root)
- YouTube video uses external embed (not hosted locally)
- Lazy load below-fold images where possible

### SEO Optimization
- Meta tags from landing.json seo section
- Semantic HTML with proper heading hierarchy
- Descriptive page title and meta description
- Open Graph tags for social sharing
- Google Analytics integration with event tracking

### Content Management
- All text content in `content/landing.json` for non-technical team updates
- Image paths in JSON point to `client/public/images/`
- Team can replace images by uploading to `client/public/images/` directory
- No code changes needed for content updates

---

## Design Rationale: Why Vintage/Rustic?

**Market Differentiation**: Most music course landing pages use modern dark mode with blues/purples or bright whites. The vintage brown aesthetic:
- Stands out visually in a sea of modern designs
- Evokes trust through "timeless tradition" rather than "new startup"
- Appeals to classical music heritage while remaining approachable
- Creates emotional warmth that modern minimalism lacks
- Signals "established institution" not "online course marketplace"

**Target Audience Alignment**: Piano students often value:
- Traditional craftsmanship (warm wood tones evoke quality pianos)
- Heritage and proven methods (vintage aesthetic suggests established curriculum)
- Comfort and approachability (warm browns feel inviting, not intimidating)

This design balances heritage credibility with conversion-focused layout, ensuring every element serves enrollment goals while maintaining the artistic sophistication expected of a music conservatory.