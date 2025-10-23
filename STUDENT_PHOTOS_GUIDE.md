# Student Photos Setup Guide

## ✅ What's Been Completed

I've updated your website to use the 2 photos you specified:
- **Hero Background**: `060A0073.jpg` (your classroom/teaching photo)
- **Instructor Photo**: `jason-riffs.jpg` (Jason Zac portrait)

I've also:
- Removed all placeholder images from `client/public/images/`
- Kept only the NSM logos (nsm-logo-main.png, nsm-logo-white.png, nsm-logo-black.png)
- Updated the vintage/rustic brown color scheme throughout the site
- Prepared space for 6 student testimonial photos

---

## 📸 Next Steps: Adding Your Student Photos

Your testimonials section is ready for **6 student photos**. Here's how to add them:

### Step 1: Prepare Your Photos
- Take or select 6 photos of students playing piano
- Best practices:
  - High-quality images (at least 800x800 pixels)
  - Close-up or medium shots showing students engaged with the piano
  - Consistent lighting and style across all photos
  - Square (1:1) or portrait (4:5) aspect ratio works best

### Step 2: Rename Your Photos
Rename your 6 student photos to match these **exact filenames**:

1. `student-1.jpg` - Will appear with: "Aarushi" testimonial
2. `student-2.jpg` - Will appear with: "Geeth" testimonial  
3. `student-3.jpg` - Will appear with: "Priya Sharma" testimonial
4. `student-4.jpg` - Will appear with: "Ramesh Kumar" testimonial
5. `student-5.jpg` - Will appear with: "Meera Iyer" testimonial
6. `student-6.jpg` - Will appear with: "Arjun Desai" testimonial

### Step 3: Upload to the Images Folder
1. Navigate to: `client/public/images/` in the file browser
2. Drag and drop your 6 renamed student photos into this folder
3. **That's it!** The website will automatically display them - no code changes needed

---

## 📁 Current Image Files

Your `client/public/images/` folder currently contains:
- ✅ `060A0073.jpg` - Hero background (teaching scene)
- ✅ `jason-riffs.jpg` - Instructor photo
- ✅ `nsm-logo-main.png` - Primary logo
- ✅ `nsm-logo-white.png` - White logo variant
- ✅ `nsm-logo-black.png` - Black logo variant
- ⏳ `student-1.jpg` - **ADD THIS** (for Aarushi)
- ⏳ `student-2.jpg` - **ADD THIS** (for Geeth)
- ⏳ `student-3.jpg` - **ADD THIS** (for Priya Sharma)
- ⏳ `student-4.jpg` - **ADD THIS** (for Ramesh Kumar)
- ⏳ `student-5.jpg` - **ADD THIS** (for Meera Iyer)
- ⏳ `student-6.jpg` - **ADD THIS** (for Arjun Desai)

---

## 🎨 Design Notes

The site now features a **vintage piano conservatory aesthetic**:
- Warm brown backgrounds (like aged walnut piano finish)
- Cream colored text (vintage sheet music feel)
- Antique gold accents for buttons and highlights
- Classic, timeless feel that evokes musical heritage

Student photos will be displayed in:
- Circular frames in the testimonial carousel
- Warm sepia-toned borders to match the vintage aesthetic
- Interactive sliding carousel showing all 6 testimonials

---

## 📝 Updating Testimonial Text (Optional)

If you want to change the testimonial quotes or student names:

1. Open: `content/landing.json`
2. Find the `"testimonials"` section
3. Edit the `quote`, `name`, or `role` fields as needed
4. Save the file - changes will appear immediately

**Example:**
```json
{
  "quote": "Your student's testimonial here...",
  "name": "Student Name",
  "role": "Student Type (e.g., Beginner, Producer)",
  "photo": "/images/student-1.jpg"
}
```

---

## ❓ Need Help?

- **Detailed image guide**: See `client/public/images/README.md`
- **Content updates**: All text is in `content/landing.json`
- **Design guidelines**: See `design_guidelines.md`

---

**Quick Checklist:**
- [ ] Upload student-1.jpg
- [ ] Upload student-2.jpg
- [ ] Upload student-3.jpg
- [ ] Upload student-4.jpg
- [ ] Upload student-5.jpg
- [ ] Upload student-6.jpg
- [ ] Review testimonial text in landing.json (optional)
- [ ] View the site to see your changes!

Once you upload the photos, refresh the website to see them appear in the testimonials carousel! 🎹✨
