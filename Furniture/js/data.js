/**
 * Woodkies Woods and Furnitures - Catalog & Content Data
 */

export const siteData = {
  brand: {
    name: "Woodkies Woods and Furnitures",
    shortName: "Woodkies",
    tagline: "Timeless Furniture, Crafted for Living.",
    phone: "+1 (800) 482-9663",
    whatsapp: "+1 (800) 482-9664",
    email: "concierge@woodkiesfurniture.com",
    address: "42 Timberline Boulevard, Artisan Design District, NY 10012",
    hours: "Mon - Sat: 10:00 AM – 7:30 PM | Sun: 11:00 AM – 6:00 PM"
  },

  categories: [
    {
      id: "sofas",
      name: "Sofas",
      tagline: "Generous deep seating & tactile Belgian linens",
      itemCount: 28,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      gridSpan: "span-2-col"
    },
    {
      id: "beds",
      name: "Beds",
      tagline: "Solid platform frames & upholstered headboards",
      itemCount: 22,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      featured: false,
      gridSpan: "span-1-col"
    },
    {
      id: "dining-tables",
      name: "Dining Tables",
      tagline: "Hand-planed American hardwoods for gathering",
      itemCount: 19,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      gridSpan: "span-2-row"
    },
    {
      id: "chairs",
      name: "Chairs",
      tagline: "Ergonomic curvature and sculptural comfort",
      itemCount: 34,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
      featured: false,
      gridSpan: "span-1-col"
    },
    {
      id: "wardrobes",
      name: "Wardrobes",
      tagline: "Seamless architectural storage & soft-close joinery",
      itemCount: 15,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      featured: false,
      gridSpan: "span-1-col"
    },
    {
      id: "tv-units",
      name: "TV Units",
      tagline: "Cable-managed slatted consoles & low sideboards",
      itemCount: 18,
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80",
      featured: false,
      gridSpan: "span-1-col"
    },
    {
      id: "office-furniture",
      name: "Office Furniture",
      tagline: "Focused workspace desks, credenzas & leather chairs",
      itemCount: 16,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
      featured: false,
      gridSpan: "span-1-col"
    },
    {
      id: "outdoor-furniture",
      name: "Outdoor Furniture",
      tagline: "Weather-hardened Grade-A teak and sunfast fabrics",
      itemCount: 20,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      featured: false,
      gridSpan: "span-1-col"
    }
  ],

  featuredProducts: [
    {
      id: "artisan-lounge-sofa",
      name: "Artisan Lounge Sofa",
      category: "Sofas",
      room: "living-room",
      price: 1850,
      originalPrice: 2150,
      rating: 4.9,
      reviewCount: 128,
      badge: "Bestseller",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      description: "Low-slung, architectural silhouette dressed in tactile Belgian linen with pocketed goose-down cushions and kiln-dried solid white oak base.",
      materials: "Solid White Oak, Belgian Linen, High-Resilience Down Fill",
      dimensions: "96\"W × 38\"D × 31\"H",
      woodOptions: ["Natural White Oak", "Smoked Walnut", "Charcoal Oak"],
      inStock: true
    },
    {
      id: "oakwood-dining-table",
      name: "Oakwood Dining Table",
      category: "Dining Tables",
      room: "dining-room",
      price: 1420,
      originalPrice: null,
      rating: 4.9,
      reviewCount: 94,
      badge: "Signature",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
      description: "Seamless plank top highlighting live timber grain with sculptured pill-shaped legs and whisper-smooth matte organic wax finish.",
      materials: "FSC® Certified Solid White Oak, Organic Matte Hardwax",
      dimensions: "84\"W × 38\"D × 30\"H (Seats 8)",
      woodOptions: ["Natural White Oak", "American Walnut", "Smoked Ash"],
      inStock: true
    },
    {
      id: "heritage-queen-bed",
      name: "Heritage Queen Bed",
      category: "Beds",
      room: "bedroom",
      price: 2190,
      originalPrice: 2450,
      rating: 5.0,
      reviewCount: 112,
      badge: "Heirloom",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1000&q=80",
      description: "Floating platform silhouette with an integrated cantilevered headboard and warm ambient perimeter glow. Built with mortise-and-tenon joints.",
      materials: "Quarter-sawn American Walnut, Wool Crepe Headboard",
      dimensions: "66\"W × 88\"L × 44\"H (Queen)",
      woodOptions: ["American Walnut", "White Oak", "Ebonized Ash"],
      inStock: true
    },
    {
      id: "minimalist-lounge-chair",
      name: "Minimalist Lounge Chair",
      category: "Chairs",
      room: "living-room",
      price: 680,
      originalPrice: 750,
      rating: 4.8,
      reviewCount: 86,
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=1000&q=80",
      description: "Sculptural wooden frame with ergonomic recline and full-grain caramel saddle leather sling that molds gracefully to your body over time.",
      materials: "Bent European Beech, Full-Grain Tuscan Leather",
      dimensions: "30\"W × 32\"D × 29\"H",
      woodOptions: ["Caramel Leather / Oak", "Olive Suede / Walnut", "Ivory Bouclé / Ash"],
      inStock: true
    },
    {
      id: "classic-wooden-wardrobe",
      name: "Classic Wooden Wardrobe",
      category: "Wardrobes",
      room: "bedroom",
      price: 2650,
      originalPrice: 2980,
      rating: 4.9,
      reviewCount: 63,
      badge: "Artisan Craft",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      description: "Substantial 3-door wardrobe with fluted door panels, integrated solid brass recessed pulls, cedar-lined interior drawers, and quiet Blum soft-close hinges.",
      materials: "Solid Appalachian Ash, Aromatic Cedar, Satin Brass",
      dimensions: "72\"W × 24\"D × 82\"H",
      woodOptions: ["Smoked Ash", "Natural White Oak", "Deep Walnut"],
      inStock: true
    },
    {
      id: "modern-tv-console",
      name: "Modern TV Console",
      category: "TV Units",
      room: "living-room",
      price: 940,
      originalPrice: null,
      rating: 4.8,
      reviewCount: 77,
      badge: "Modern Classic",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
      description: "Slatted acoustic wood door fronts allow remote signals and speaker sound to pass through while keeping equipment and cables cleanly hidden.",
      materials: "FSC® Teak & Walnut Veneer, Matte Powder-Coated Steel Legs",
      dimensions: "74\"W × 18\"D × 21\"H",
      woodOptions: ["Natural Teak", "American Walnut", "Smoked Oak"],
      inStock: true
    },
    {
      id: "sculptural-coffee-table",
      name: "Sculptural Travertine & Oak Table",
      category: "Living Room",
      room: "living-room",
      price: 540,
      originalPrice: 620,
      rating: 4.9,
      reviewCount: 52,
      badge: "Editor's Pick",
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      description: "Geometric harmony featuring an unfilled Roman travertine disc balancing atop a curved solid white oak cylinder base.",
      materials: "Solid White Oak, Honed Roman Travertine",
      dimensions: "40\"Dia × 16\"H",
      woodOptions: ["Travertine / White Oak", "Travertine / Smoked Walnut"],
      inStock: true
    },
    {
      id: "nordic-spindle-bookshelf",
      name: "Nordic Spindle Bookshelf",
      category: "Office Furniture",
      room: "home-office",
      price: 1150,
      originalPrice: null,
      rating: 4.9,
      reviewCount: 45,
      badge: "Refined",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
      description: "Turned spindle uprights and floating tiered shelves. Designed to act as either an open room divider or wall showcase.",
      materials: "Solid American Oak, Concealed Steel Rod Core",
      dimensions: "48\"W × 16\"D × 76\"H",
      woodOptions: ["Natural Oak", "American Walnut"],
      inStock: true
    },
    {
      id: "nordic-executive-desk",
      name: "Nordic Executive Desk",
      category: "Office Furniture",
      room: "home-office",
      price: 1380,
      originalPrice: 1550,
      rating: 4.9,
      reviewCount: 39,
      badge: "Workspace",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
      description: "Beveled edge solid walnut work surface with integrated cable trough, hidden power channel, and smooth-gliding pencil drawer.",
      materials: "Solid American Walnut, Anodized Aluminum Fittings",
      dimensions: "64\"W × 30\"D × 30\"H",
      woodOptions: ["American Walnut", "White Oak", "Smoked Ash"],
      inStock: true
    },
    {
      id: "curved-boucle-sectional",
      name: "Curved Bouclé Sectional",
      category: "Sofas",
      room: "living-room",
      price: 2450,
      originalPrice: 2800,
      rating: 5.0,
      reviewCount: 71,
      badge: "Lounge",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      description: "Sculptural organic curve wrapped in heavy textured ivory bouclé. Engineered with multi-density foam and solid beech interior frame.",
      materials: "Textured Bouclé, Kiln-Dried European Beech",
      dimensions: "112\"W × 48\"D × 31\"H",
      woodOptions: ["Ivory Bouclé", "Caramel Chenille", "Muted Olive Velvet"],
      inStock: true
    },
    {
      id: "round-teak-dining-table",
      name: "Round Teak Dining Table",
      category: "Dining Tables",
      room: "dining-room",
      price: 1290,
      originalPrice: 1450,
      rating: 4.8,
      reviewCount: 54,
      badge: "Heirloom",
      image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
      description: "Center pedestal pedestal table carved from Grade-A sustainably harvested teak. Seats 6 comfortably with plenty of leg room.",
      materials: "Burmese Golden Teak, Matte Protective Wax",
      dimensions: "54\"Dia × 30\"H",
      woodOptions: ["Golden Teak", "Bleached Teak", "Weathered Charcoal"],
      inStock: true
    },
    {
      id: "celeste-bedroom-daybed",
      name: "Celeste Platform Daybed",
      category: "Beds",
      room: "bedroom",
      price: 1350,
      originalPrice: 1520,
      rating: 4.9,
      reviewCount: 42,
      badge: "New",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1000&q=80",
      description: "Slatted hardwood platform with an organic cane backrest and high-density pocketed spring mattress wrapped in raw unbleached linen.",
      materials: "Solid White Oak, Natural Rattan Weave, Belgian Linen",
      dimensions: "80\"W × 38\"D × 28\"H",
      woodOptions: ["White Oak / Cane", "Smoked Walnut / Cane"],
      inStock: true
    },
    {
      id: "teak-patio-lounge-chair",
      name: "Tuscan Teak Outdoor Lounge Chair",
      category: "Outdoor Furniture",
      room: "outdoor",
      price: 780,
      originalPrice: 890,
      rating: 4.9,
      reviewCount: 37,
      badge: "Outdoor",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1000&q=80",
      description: "Sustainably harvested Grade-A teak frame with quick-dry reticulated foam cushions and Sunbrella® weather-resistant fabric.",
      materials: "Grade-A Solid Teak, Marine-Grade Brass, Sunbrella® Fabric",
      dimensions: "32\"W × 36\"D × 28\"H",
      woodOptions: ["Natural Golden Teak", "Weathered Silver Teak"],
      inStock: true
    },
    {
      id: "monaco-outdoor-dining-table",
      name: "Monaco Teak Outdoor Dining Table",
      category: "Outdoor Furniture",
      room: "outdoor",
      price: 1650,
      originalPrice: null,
      rating: 5.0,
      reviewCount: 28,
      badge: "Heirloom",
      image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1000&q=80",
      hoverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      description: "Slatted teak dining surface with umbrella port and substantial trestle base engineered to withstand seasons of open-air dinner parties.",
      materials: "FSC® Certified Solid Teak, Stainless Steel Joinery",
      dimensions: "86\"W × 38\"D × 30\"H",
      woodOptions: ["Natural Golden Teak", "Smoked Teak"],
      inStock: true
    }
  ],

  rooms: [
    {
      id: "living-room",
      name: "Living Room",
      subtitle: "Comfortable sanctuaries built for serene gathering",
      itemCount: 42,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      highlight: "Sofas, Lounge Chairs, Consoles & Coffee Tables"
    },
    {
      id: "bedroom",
      name: "Bedroom",
      subtitle: "Quiet restfulness formed by organic natural wood",
      itemCount: 29,
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      highlight: "Platform Beds, Nightstands & Wardrobes"
    },
    {
      id: "dining-room",
      name: "Dining Room",
      subtitle: "Heartcrafted tables that turn meals into memorable occasions",
      itemCount: 31,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      highlight: "Extendable Dining Tables, Benches & Sculptural Chairs"
    },
    {
      id: "home-office",
      name: "Home Office",
      subtitle: "Clutter-free ergonomics for clarity and productive flow",
      itemCount: 24,
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
      highlight: "Solid Hardwood Desks, Credenzas & Bookcases"
    },
    {
      id: "outdoor",
      name: "Outdoor",
      subtitle: "Resilient open-air lounging inspired by nature",
      itemCount: 18,
      image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80",
      highlight: "Sustainably Harvested Teak Daybeds & Sun Loungers"
    }
  ],

  newArrivals: [
    {
      id: "oslo-boucle-armchair",
      name: "Oslo Bouclé Armchair",
      category: "Chairs",
      price: 720,
      originalPrice: 850,
      rating: 5.0,
      reviewCount: 38,
      isNew: true,
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["Natural Oak Frame", "Smoked Walnut Frame"],
      dimensions: "34\"W × 34\"D × 30\"H"
    },
    {
      id: "linear-walnut-credenza",
      name: "Linear Walnut Credenza",
      category: "Storage",
      price: 1580,
      originalPrice: 1750,
      rating: 4.9,
      reviewCount: 24,
      isNew: true,
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["American Walnut", "Smoked Oak"],
      dimensions: "68\"W × 19\"D × 32\"H"
    },
    {
      id: "celeste-cane-daybed",
      name: "Celeste Cane Daybed",
      category: "Beds",
      price: 1290,
      originalPrice: null,
      rating: 4.8,
      reviewCount: 19,
      isNew: true,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["Natural Rattan / Teak", "Bleached Ash"],
      dimensions: "78\"W × 32\"D × 26\"H"
    },
    {
      id: "kyoto-low-table",
      name: "Kyoto Low Table",
      category: "Tables",
      price: 490,
      originalPrice: 560,
      rating: 4.9,
      reviewCount: 41,
      isNew: true,
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["Solid White Oak", "Black Ebonized Oak"],
      dimensions: "44\"W × 22\"D × 14\"H"
    },
    {
      id: "sora-accent-chair",
      name: "Sora Hand-Hewn Lounge Chair",
      category: "Chairs",
      price: 640,
      originalPrice: 720,
      rating: 4.9,
      reviewCount: 16,
      isNew: true,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["Smoked Oak", "Natural Ash"],
      dimensions: "28\"W × 30\"D × 32\"H"
    },
    {
      id: "solstice-fluted-nightstand",
      name: "Solstice Fluted Nightstand",
      category: "Storage",
      price: 420,
      originalPrice: null,
      rating: 5.0,
      reviewCount: 29,
      isNew: true,
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["American Walnut", "Smoked Ash"],
      dimensions: "22\"W × 18\"D × 24\"H"
    },
    {
      id: "solapa-linen-sofa",
      name: "Solapa Sloped-Arm Linen Sofa",
      category: "Sofas",
      price: 1890,
      originalPrice: 2150,
      rating: 4.9,
      reviewCount: 22,
      isNew: true,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["Natural White Oak", "Smoked Ash"],
      dimensions: "88\"W × 37\"D × 32\"H"
    },
    {
      id: "bali-teak-sun-lounger",
      name: "Bali Teak Sun Lounger",
      category: "Outdoor",
      price: 840,
      originalPrice: 950,
      rating: 5.0,
      reviewCount: 14,
      isNew: true,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=800&q=80",
      woodOptions: ["Natural Teak", "Bleached Teak"],
      dimensions: "79\"L × 28\"W × 14\"H"
    }
  ],

  customizationOptions: {
    woods: [
      { name: "Solid American Walnut", tone: "#4b3621", description: "Rich chocolate grain with fine natural lustre." },
      { name: "White Oak", tone: "#c8b293", description: "Durable, clean Scandinavian warm neutral hue." },
      { name: "Burmese Golden Teak", tone: "#a06f35", description: "Naturally oil-rich, water-resistant heirloom hardwood." },
      { name: "Smoked Ash", tone: "#6d5e53", description: "Pronounced grain with dramatic smoky undertones." }
    ],
    finishes: [
      { name: "Organic Matte Hardwax", desc: "Velvety natural touch, breathable and water-repellent." },
      { name: "Silky Satin Lacquer", desc: "Ultra-thin protective shield with low soft sheen." },
      { name: "Charcoal Ebonized", desc: "Japanese Shou Sugi Ban inspired deep charred aesthetic." }
    ],
    fabrics: [
      { name: "Belgian Organic Linen", desc: "Breathable textured weave in Oatmeal & Flax." },
      { name: "Nubuck Leather", desc: "Tuscan top-grain buttery leather with natural patina." },
      { name: "Textured Bouclé", desc: "Plush looped wool blend with architectural dimension." }
    ]
  },

  features: [
    {
      icon: "carpentry",
      title: "Premium Craftsmanship",
      description: "Carefully crafted with attention to every detail, employing time-honored mortise & tenon joinery."
    },
    {
      icon: "wood-shield",
      title: "Quality Materials",
      description: "Selected sustainably-forested hardwoods and non-toxic plant wax finishes built for generations."
    },
    {
      icon: "custom-measure",
      title: "Custom Designs",
      description: "Furniture tailored to your space, exact millimeters, wood preference, and upholstery choice."
    },
    {
      icon: "hourglass-clock",
      title: "Built to Last",
      description: "Timeless designs with dependable construction, backed by our 10-year structural warranty."
    },
    {
      icon: "concierge-star",
      title: "Trusted Service",
      description: "Professional support from personalized design consultation to white-glove inside delivery."
    }
  ],

  stats: [
    { value: 24, suffix: "+", label: "Years of Craftsmanship" },
    { value: 85, suffix: "+", label: "Furniture Collections" },
    { value: 14, suffix: "k+", label: "Happy Customers" },
    { value: 3200, suffix: "+", label: "Custom Projects" }
  ],

  reviews: [
    {
      name: "Eleanor Vance",
      location: "Upper West Side, NY",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      review: "The Artisan Lounge Sofa exceeded every expectation. The Belgian linen feels divine, and the joinery underneath is absolute museum grade. Our living room feels serene and grounded.",
      product: "Artisan Lounge Sofa in Belgian Oatmeal Linen"
    },
    {
      name: "Julian Croft",
      location: "SoHo Loft, NY",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      review: "We commissioned an 8-seater Oakwood Dining Table for our loft. The wood selection process was personal and seamless. Everyone who visits immediately touches the timber surface.",
      product: "Custom Oakwood Dining Table (96\")"
    },
    {
      name: "Sophia Sterling",
      location: "Greenwich, CT",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      review: "Woodkies understands true luxury — no loud logos, just pure organic materials, flawless symmetry, and unparalleled comfort. The Heritage Queen Bed is our sanctuary.",
      product: "Heritage Queen Bed in American Walnut"
    },
    {
      name: "Marcus Davenport",
      location: "Tribeca, NY",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      review: "From white-glove assembly to the feel of the hand-turned Minimalist Lounge Chair, Woodkies is the benchmark for modern American furniture.",
      product: "Minimalist Lounge Chair in Tuscan Saddle Leather"
    }
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Morning Light at the Tribeca Loft",
      productName: "Artisan Lounge Sofa & Travertine Table",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      productId: "artisan-lounge-sofa"
    },
    {
      id: "gal-2",
      title: "Quiet Reading Nook in White Oak",
      productName: "Minimalist Lounge Chair",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      productId: "minimalist-lounge-chair"
    },
    {
      id: "gal-3",
      title: "Sunday Family Dinner Setting",
      productName: "Oakwood Dining Table",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      productId: "oakwood-dining-table"
    },
    {
      id: "gal-4",
      title: "Calm Minimalist Sleeping Sanctuary",
      productName: "Heritage Queen Bed",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      productId: "heritage-queen-bed"
    },
    {
      id: "gal-5",
      title: "Focused Workspace with Natural Light",
      productName: "Nordic Spindle Bookshelf",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
      productId: "nordic-spindle-bookshelf"
    },
    {
      id: "gal-6",
      title: "Warm Teak Architectural Patio",
      productName: "Celeste Cane Daybed & Low Table",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      productId: "celeste-cane-daybed"
    }
  ]
};
