/**
 * FORM & FOLIO STUDIO - PRODUCT DATABASE & CONFIGURATION
 * 
 * Direct root paths matching your GitHub repository structure.
 */

const STORE_CONFIG = {
  storeName: "Form & Folio Studio",
  tagline: "Modern Customizable Stationery & Lifestyle Essentials",
  zazzleStoreUrl: "https://www.zazzle.com/store/form_folio?rf=238535639741893678",
  referralId: "238535639741893678",
  contactEmail: "hello@formandfoliostudio.com",
  instagram: "@formandfoliostudio",
  pinterest: "https://www.pinterest.com"
};

const PRODUCTS = [
  {
    id: "asset-0001",
    title: "Earthy Terracotta & Sage Botanical Appointment Card",
    category: "Salon & Wellness Stationery",
    badge: "Bestseller",
    price: "From $1.25 / card",
    description: "Minimalist terracotta and sage green watercolor arches with delicate gold botanical line art. Fully customizable template for client names, appointments, and contact info.",
    image: "exact_card_mockup_square_2000.jpg",
    hoverImage: "card_product_in_use_hand_2000.jpg",
    zazzleUrl: "https://www.zazzle.com/earthy_terracotta_sage_watercolor_botanical_arches_business_card-256064867126123192?rf=238535639741893678",
    collection: "Boutique & Salon Client Essentials",
    specs: ["Standard 3.5\" x 2.0\"", "Rounded or Square Corners", "Editable Template Fields", "Ultra-Heavyweight Cardstock"]
  },
  {
    id: "asset-0002",
    title: "Terracotta Sage Botanical Dual QR Code Pop-Up Sign",
    category: "Market & Retail Displays",
    badge: "New Release",
    price: "From $7.43",
    description: "Freestanding pedestal display sign for craft fairs, farmer's markets, and pop-up boutiques. Features dual placeholder frames for your Scan to Pay and Social Media QR codes.",
    image: "popup_vendor_qr_pedestal_sign_6x8.jpg",
    hoverImage: "popup_vendor_qr_pedestal_sign_4x6.jpg",
    zazzleUrl: "https://www.zazzle.com/terracotta_sage_botanical_dual_qr_code_pop_up_pedestal_sign-256108631629691910?rf=238535639741893678",
    collection: "Artisan Market & Pop-Up Vendor Suite",
    specs: ["Durable Acrylic Pedestal", "Available in 4x6, 6x8, 8x10", "Dual QR Code Placeholders", "Built-in Freestanding Base"]
  }
];

const COLLECTIONS = [
  {
    title: "Boutique & Salon Client Essentials",
    description: "Chic appointment cards, loyalty punch cards, and aftercare packaging for wellness practitioners and beauty specialists.",
    tag: "Wellness & Beauty",
    count: "Active Collection"
  },
  {
    title: "Artisan Market & Pop-Up Vendor Suite",
    description: "Contactless QR payment stands, table tent displays, and price signage built for local makers and weekend market booths.",
    tag: "Retail Displays",
    count: "Active Collection"
  },
  {
    title: "Artisan Kitchen & Pantry Labels",
    description: "Customizable jar stickers, sourdough feeding logs, and packaging seals for cottage bakeries and home canning.",
    tag: "Cottage Food",
    count: "Coming Soon"
  },
  {
    title: "Trade & Vocational Celebrations",
    description: "Industrial congratulatory banners, certificate frames, and commemorative keepsakes honoring blue-collar trade milestones.",
    tag: "Milestones",
    count: "Coming Soon"
  }
];
