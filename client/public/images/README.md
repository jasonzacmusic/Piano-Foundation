# Image Management Guide

## Current Images in This Folder

### Active Images (DO NOT DELETE)
- **060A0073.jpg** - Hero background image (classroom/teaching scene)
- **jason-riffs.jpg** - Instructor photo (Jason Zac portrait)
- **nsm-logo-main.png** - Primary NSM logo (white version)
- **nsm-logo-black.png** - NSM logo black version
- **nsm-logo-white.png** - NSM logo white version

### Missing - Ready for Upload
- **student-1.jpg** - Placeholder visible on site with "A" initial
- **student-2.jpg** - Placeholder visible on site with "G" initial
- **student-3.jpg** - Placeholder visible on site with "P" initial
- **student-4.jpg** - Placeholder visible on site with "R" initial
- **student-5.jpg** - Placeholder visible on site with "M" initial
- **student-6.jpg** - Placeholder visible on site with "A" initial

## Adding Student Photos for Testimonials

The testimonials section needs **6 student photos** to display alongside reviews. Upload your student photos with these exact filenames:

### Required Student Photos
1. **student-1.jpg** - For testimonial: "Aarushi" (Student)
2. **student-2.jpg** - For testimonial: "Geeth" (Producer)
3. **student-3.jpg** - For testimonial: "Priya Sharma" (Accompanist)
4. **student-4.jpg** - For testimonial: "Ramesh Kumar" (Hobbyist)
5. **student-5.jpg** - For testimonial: "Meera Iyer" (Classical Pianist)
6. **student-6.jpg** - For testimonial: "Arjun Desai" (Songwriter)

### How to Add Student Photos

1. **Prepare your photos:**
   - Take high-quality photos of students playing piano
   - Recommended: Close-up or medium shots showing students engaged with the instrument
   - Image format: JPG (preferred) or PNG
   - Aspect ratio: Square (1:1) or portrait (4:5) works best

2. **Name your files exactly as shown above:**
   - student-1.jpg
   - student-2.jpg
   - student-3.jpg
   - student-4.jpg
   - student-5.jpg
   - student-6.jpg

3. **Upload to this directory:**
   - Drag and drop your renamed images into `client/public/images/`
   - Or use the Replit file manager to upload

4. **The website will automatically display them** - no code changes needed!

### Notes
- You can upload fewer than 6 photos - the site will gracefully handle missing images
- The testimonial text can be updated in `content/landing.json` (under the "testimonials" section)
- For best results, use consistent photo styles (same lighting, similar framing)
- Photos will be displayed in circular frames in the testimonial carousel

## Changing Other Images

### To change the hero background:
1. Upload your new image to this directory
2. Update `content/landing.json` → `hero.heroImage` to `/images/your-new-image.jpg`

### To change the instructor photo:
1. Upload your new image to this directory
2. Update `content/landing.json` → `instructor.photo` to `/images/your-new-image.jpg`

---

**Need help?** All content updates (text, links, pricing) can be made in `content/landing.json` without touching any code files.
