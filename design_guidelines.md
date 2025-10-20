# Design Guidelines: Nathaniel School of Music - Foundation Piano Course Landing Page

## Design Approach
**Reference-Based with Educational Landing Page Excellence**
Drawing inspiration from premium course platforms (MasterClass, Coursera, Skillshare) combined with music industry sophistication. The design prioritizes conversion optimization while maintaining artistic credibility appropriate for a music school.

## Core Design Principles
1. **Lead-Focused Architecture**: Every visual element guides toward enrollment
2. **Professional Credibility**: Design reflects serious musical education, not hobby lessons
3. **Aspirational Yet Accessible**: Inspire confidence that anyone can learn
4. **Trust Through Transparency**: Clear structure, pricing, and outcomes build confidence

---

## Color Palette

### Primary Colors (Dark Mode Default)
- **Background**: 0 0% 7% (rich black, not pure black for sophistication)
- **Surface**: 0 0% 12% (slightly elevated sections)
- **Text Primary**: 0 0% 98% (off-white for reduced eye strain)
- **Text Secondary**: 0 0% 70% (muted for supporting text)

### Accent Colors
- **Gold Primary**: 45 85% 60% (warm, prestigious gold for CTAs and highlights)
- **Gold Hover**: 45 85% 50% (deeper gold for interactive states)
- **Gold Muted**: 45 30% 35% (subtle gold tints for borders/decorative elements)

### Semantic Colors
- **Success**: 142 71% 45% (for trust badges, checkmarks)
- **Focus/Link**: 45 85% 60% (use gold for consistency)

---

## Typography

### Font Families
**Display/Headings**: 'Playfair Display' (Google Fonts) - Elegant serif conveying musical sophistication
**Body/UI**: 'Inter' (Google Fonts) - Clean, highly legible sans-serif

### Type Scale
- **H1 (Hero)**: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- **H2 (Section Headers)**: text-3xl md:text-4xl lg:text-5xl, font-bold
- **H3 (Subsections)**: text-2xl md:text-3xl, font-semibold
- **H4 (Card Titles)**: text-xl md:text-2xl, font-semibold
- **Body Large**: text-lg md:text-xl, leading-relaxed
- **Body**: text-base md:text-lg, leading-relaxed
- **Small/Caption**: text-sm, text-secondary

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
- **Hero**: 90vh min-height with content centered, not forced
- **Content sections**: Natural height with consistent py-24
- **No arbitrary viewport constraints**: Let content breathe naturally

---

## Component Library

### Hero Section
- Full-width background with overlay (linear gradient from black 70% opacity to transparent)
- Hero image: Jason at piano (high-quality, professional lighting)
- Content: Centered, max-w-4xl
- Trust badges: Horizontal row with icons, evenly spaced
- Dual CTA buttons: Primary (gold, filled) + Secondary (gold outline with backdrop-blur)

### USP Cards (7 cards in responsive grid)
- Card style: Subtle border (gold-muted), dark surface background, p-6 to p-8
- Icon: lucide-react icons in gold, size-10 md:size-12
- Title: H4 styling in white
- Description: Body text in text-secondary
- Hover: Subtle scale transform (1.02) and gold border brightening
- Grid: 1 column mobile, 2 columns tablet, 3 columns desktop

### Syllabus/What You'll Learn (4-column grid)
- Section headers with gold accent underline
- Bullet lists with custom gold checkmark icons
- Cards with subtle left border in gold
- Grid: 1 column mobile, 2 columns desktop

### Course Structure Timeline
- Vertical timeline design with gold connecting line
- Icon bullets for each milestone
- Mixed text + numeric highlights (32+ hours, 20 classes, etc.)

### Testimonial Cards
- 2-card horizontal layout (stacked on mobile)
- Student photo: Circular, border with gold ring
- Quote in large italic text
- Name and role below in smaller text
- Background: Slightly elevated surface color

### Fee Display Section
- Large, prominent pricing with currency dynamically shown
- Two-column layout: Pricing left, CTA buttons right (stacked on mobile)
- GST note in smaller text below price
- Gold accent border around pricing box

### FAQ Accordion
- Radix UI accordion or shadcn/ui accordion component
- Gold chevron icons for expand/collapse
- Question in semibold, answer in regular weight
- Subtle dividers between items
- Smooth height animation on expand

### Sticky Mobile CTA
- Fixed bottom button on mobile viewports (< md breakpoint)
- Full-width gold button with emoji + "Enrol Now"
- Subtle shadow for elevation
- z-50 to stay above content

### Footer
- 3-column layout: Logo/tagline, Quick Links, Contact Info (stacked on mobile)
- Social icons in gold with hover effects
- Copyright and location in smaller text
- Dark surface background slightly different from page background

---

## Images

### Primary Images (User-Provided)
1. **Hero**: Jason at piano (060A0073.JPG or Live with Melodica.jpg) - Full-width background with overlay
2. **About/Bio Section**: Headshot (Jason Zac portrait images) - Circular or rounded square, right-aligned with text wrap
3. **Teaching Scene**: Classroom/teaching photos for social proof section
4. **Performance**: Stage performance image for credibility/aspirational content

### Image Treatment
- Hero: Dark overlay (40-60% opacity black gradient) for text legibility
- All images: Subtle rounded corners (rounded-lg to rounded-xl)
- Aspect ratios: Maintain 16:9 for landscape, 4:5 for portraits
- Loading: Use Next.js Image component with blur placeholder

---

## Animations (Framer Motion - Minimal)

### Hero Entrance
- Fade in + slight upward motion for headline and subheadline
- Stagger children for CTA buttons (0.1s delay)
- Duration: 0.6s with ease-out

### Scroll-Triggered Reveals
- USP cards: Fade in + slight upward motion, staggered by 0.05s
- Testimonials: Slide in from sides (left/right alternating)
- Stats/numbers: Count-up animation on scroll into view

### Interactive States
- Button hover: Scale 1.05 + brightness increase
- Card hover: Subtle lift (translateY -2px) + shadow increase
- Link hover: Color transition to brighter gold

**Critical**: Animations should enhance, not distract. All animations < 0.6s duration.

---

## Accessibility & Best Practices

- All images have descriptive alt text
- Form inputs have proper labels and ARIA attributes
- Color contrast ratios meet WCAG AA standards (gold on dark passes, verified)
- Focus states visible with gold outline ring
- Keyboard navigation fully supported for accordion, forms
- Semantic HTML5 elements (header, nav, main, section, footer)
- Skip-to-content link for screen readers

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
- Padding: Tighter on mobile (px-4, py-12) → spacious on desktop (px-8, py-24)
- Sticky CTA: Only visible on mobile (hidden md:hidden)
- Typography: Body text 16px mobile minimum for readability

---

## Conversion Optimization Elements

### Visual Hierarchy for CTAs
1. Primary CTA (Enrol Now): Gold filled button, largest size, prominent placement
2. Secondary CTA (WhatsApp/Email): Gold outline buttons, slightly smaller
3. Tertiary actions (Watch Video): Link styling with icon

### Trust Indicators
- Icon row under hero (Live Online, Certificate, etc.)
- Testimonial photos and names
- Graded certificate badge/icon
- "Trusted by X students" if applicable
- Location and contact prominence in footer

### Scarcity/Urgency (Subtle)
- "Limited seats" if applicable (in JSON for easy toggle)
- "Next batch starts [date]" - updatable via JSON

---

## Technical Implementation Notes

### Performance
- Optimize images: WebP format with fallbacks, responsive srcsets
- Lazy load below-the-fold images
- Preload hero image for instant display
- Minimize JavaScript: Only Framer Motion for critical animations

### SEO Optimization
- Structured data (JSON-LD): Course schema, Organization schema
- Meta tags from landing.json seo section
- Semantic HTML with proper heading hierarchy
- Descriptive page title and meta description
- Open Graph and Twitter Card tags for social sharing

This design balances professional credibility with conversion-focused layout, ensuring every element serves the goal of generating enrollments while maintaining the artistic sophistication expected of a music school.