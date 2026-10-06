# Woodkies Woods and Furnitures

A premium, modern, elegant, fully responsive furniture showroom website built for **“Woodkies Woods and Furnitures”**.

---

## 🎨 Brand & Visual Identity

The design language reflects an editorial, luxury furniture atelier with warm organic tones, generous whitespace, refined typography, and smooth micro-interactions.

- **Primary Dark**: `#42362e` (Deep espresso timber)
- **Secondary Brown**: `#a8917f` (Warm mid-tone wood)
- **Soft Beige**: `#d2ccc4` (Organic linen & sand)
- **Background**: `#f7f9f6` (Calm warm white canvas)
- **Accent Rose Brown**: `#b69788` (Refined rosewood accent)

### Typography
- **Headings**: `Cormorant Garamond` & `Playfair Display` (Sophisticated serif)
- **Body / Navigation / UI**: `Plus Jakarta Sans` (Clean modern geometric sans-serif)

---

## ✨ Features & Sections Included

1. **Floating Glass Navbar & Theme Switcher**
   - Translucent pill-shaped glassmorphism container (`backdrop-filter: blur(18px)`).
   - Interlocking "W" vector brand mark in circular badge.
   - Navigation links: Home, Furniture, Collections, About Us, Custom Furniture, Contact.
   - **Theme Switcher**: Instant toggle between **Natural Light** mode and **Atelier Dark** mode (rich espresso & walnut evening ambiance) with smooth animated sun/moon icon transitions, persistence in `localStorage`, and OS dark mode detection.
   - Interactive Wishlist & Cart drawer triggers with real-time badge counters.
   - Dark rounded pill CTA: **Shop Now**.
   - Sticky scroll background transition and responsive mobile drawer with theme switch controls.

2. **Full-Screen Cinematic Hero**
   - High-performance, hardware-accelerated scroll interaction engine (`js/hero-scroll.js`).
   - Background starts at scale `1.1` and `0px` blur, smoothly interpolating to scale `1.0` and `8–10px` blur as you scroll.
   - Subtle brightness dimming and warm overlay darkening while foreground text and navbar remain pin-sharp.
   - Eyebrow: *“CRAFTED FOR YOUR SPACE”*.
   - Main heading: *“Timeless Furniture, Crafted for Living.”*
   - Buttons: **Explore Furniture** & **Discover Our Collection**.

3. **Furniture Categories (“Find Your Perfect Piece”)**
   - Sophisticated asymmetrical masonry grid for 8 foundational categories:
     - Sofas, Beds, Dining Tables, Chairs, Wardrobes, TV Units, Office Furniture, Outdoor Furniture.
   - Hover zoom animation, counts, and category filter shortcuts.

4. **Featured Furniture (“Featured Collection”)**
   - Filter pills: All Pieces, Living Room, Dining, Bedroom, Workspace.
   - Complete product cards with dual-image hover preview, price, original price, ratings, wishlist button, Quick View trigger, and Add to Cart.
   - Products: Artisan Lounge Sofa, Oakwood Dining Table, Heritage Queen Bed, Minimalist Lounge Chair, Classic Wooden Wardrobe, Modern TV Console, Sculptural Travertine & Oak Table, Nordic Spindle Bookshelf.

5. **Shop by Room (“Furniture for Every Space”)**
   - Editorial photography for Living Room, Bedroom, Dining Room, Home Office, and Outdoor.
   - Hover zoom with darkening overlay and smooth animated arrows.

6. **New Arrivals**
   - Horizontal scroll-snap carousel with circular previous/next navigation buttons.
   - “NEW” badge in rosewood accent, ratings, wishlist, and Add to Cart.
   - Products: Oslo Bouclé Armchair, Linear Walnut Credenza, Celeste Cane Daybed, Kyoto Low Table.

7. **Premium Offer Banner (“Designed to Last. Made to Belong.”)**
   - Editorial hero banner with dark overlay, white-glove perks, and **Explore Collection** CTA.

8. **Custom Furniture Section (“Made For Your Space”)**
   - Split-screen presentation: Workshop craftsmanship photography & floating atelier badge on the left; customization features (Custom Size, Wood Selection, Finish & Color, Fabric Selection, Custom Design) on the right.
   - **Request Custom Furniture** CTA opening the bespoke commission request modal.

9. **Why Choose Woodkies (“Why Woodkies?”)**
   - 5 feature cards with minimal vector line icons:
     - Premium Craftsmanship, Quality Materials, Custom Designs, Built to Last, Trusted Service.

10. **About Woodkies (“Crafted With Wood. Designed For Life.”)**
    - Brand story, artisan philosophy, and 4 animated statistics counters:
      - 24+ Years of Craftsmanship
      - 85+ Furniture Collections
      - 14,000+ Happy Customers
      - 3,200+ Custom Projects

11. **Customer Reviews (“Loved by Our Customers”)**
    - High-res customer profile avatars, 5-star ratings, testimonials, and verified purchase product tags.
    - Mobile swipe carousel and desktop multi-column grid.

12. **Furniture Gallery / Inspiration (“Inspired Spaces”)**
    - Instagram-style asymmetric grid with hover product tags and clickable lightbox/quick view triggers.

13. **Contact / Visit Our Store (“Visit Woodkies”)**
    - Two-column layout: Store Address, Phone Support, Direct WhatsApp Concierge link, Email, Opening Hours.
    - **Get Directions** & **Contact Us** action buttons.
    - Live Showroom status card with valet parking notes.

14. **Footer**
    - Dark `#42362e` background.
    - Newsletter subscription box with real-time feedback.
    - Navigation columns: Woodkies, Shop, Company, Customer Support, Connect (Instagram, Facebook, WhatsApp, YouTube).
    - Copyright: **© 2026 Woodkies Woods and Furnitures. All Rights Reserved.**

15. **Interactive Systems**
    - **Cart Drawer**: Slide-out panel with item list, quantity adjustment, subtotal calculation, and checkout simulation.
    - **Wishlist Drawer**: Saved items with 1-click "Move to Cart" button.
    - **Quick View Modal**: Hardwood finish swatches (Quarter-Sawn White Oak, American Walnut, Smoked Ash), specifications, dimensions, and add-to-bag.
    - **Custom Furniture Modal**: Full bespoke commission inquiry form.
    - **Toast Notifications**: Floating feedback pills for all user actions.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
# or
npx vite
```
Then open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
