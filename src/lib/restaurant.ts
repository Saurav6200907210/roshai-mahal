export const RESTAURANT = {
  name: "Rosahai Mahal Teghra",
  tagline: "Where Royalty Meets Flavor",
  address: "Near St. Paul Public School, Teghra, Begusarai, Bihar 851133",
  shortAddress: "Teghra, Begusarai, Bihar",
  phone: "+91 90000 00000",
  phoneRaw: "+919000000000",
  whatsapp: "919000000000",
  email: "hello@rosahaimahal.com",
  hours: "11:00 AM – 11:00 PM (All days)",
  mapsEmbed:
    "https://www.google.com/maps?q=St.+Paul+Public+School+Teghra+Begusarai+Bihar&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=St.+Paul+Public+School+Teghra+Begusarai+Bihar",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export type Category =
  | "All"
  | "Biryani"
  | "Indian"
  | "Tandoor"
  | "Chinese"
  | "Fast Food"
  | "South Indian"
  | "Thali"
  | "Desserts"
  | "Beverages";

export interface MenuItem {
  name: string;
  price: number;
  category: Exclude<Category, "All">;
  desc: string;
  image: string;
  veg: boolean;
  popular?: boolean;
}

// Royalty-free Unsplash images
export const MENU: MenuItem[] = [
  { name: "Chicken Biryani", price: 220, category: "Biryani", veg: false, popular: true, desc: "Aromatic basmati layered with tender chicken and royal spices.", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=70" },
  { name: "Mutton Biryani", price: 320, category: "Biryani", veg: false, popular: true, desc: "Slow-dum cooked mutton biryani with saffron and rose water.", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=70" },
  { name: "Paneer Butter Masala", price: 200, category: "Indian", veg: true, popular: true, desc: "Creamy tomato gravy with soft cottage cheese cubes.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=70" },
  { name: "Chicken Curry", price: 240, category: "Indian", veg: false, desc: "Home-style chicken curry simmered in onion-tomato masala.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=70" },
  { name: "Fish Fry", price: 260, category: "Indian", veg: false, desc: "Crispy marinated fish fried golden — a Bihari favourite.", image: "https://images.unsplash.com/photo-1626777553635-2d0825e2a3a3?auto=format&fit=crop&w=800&q=70" },
  { name: "Tandoori Roti", price: 25, category: "Tandoor", veg: true, desc: "Whole-wheat roti baked in clay tandoor.", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=70" },
  { name: "Butter Naan", price: 50, category: "Tandoor", veg: true, desc: "Soft naan brushed with golden butter.", image: "https://images.unsplash.com/photo-1633945274309-2c16c9694ec0?auto=format&fit=crop&w=800&q=70" },
  { name: "Veg Thali", price: 180, category: "Thali", veg: true, popular: true, desc: "Royal platter — sabzi, dal, rice, roti, raita, sweet.", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=70" },
  { name: "Non-Veg Thali", price: 280, category: "Thali", veg: false, desc: "Chicken curry, biryani, roti, salad, gulab jamun.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=70" },
  { name: "Margherita Pizza", price: 220, category: "Fast Food", veg: true, desc: "Wood-fired crust, fresh mozzarella, basil.", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=70" },
  { name: "Cheese Burger", price: 150, category: "Fast Food", veg: true, desc: "Grilled patty, melted cheese, crisp lettuce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=70" },
  { name: "Veg Momos", price: 80, category: "Chinese", veg: true, desc: "Steamed dumplings with spicy red chutney.", image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=800&q=70" },
  { name: "Chicken Chowmein", price: 140, category: "Chinese", veg: false, popular: true, desc: "Wok-tossed noodles with chicken and vegetables.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=70" },
  { name: "Masala Dosa", price: 120, category: "South Indian", veg: true, desc: "Crispy dosa filled with spiced potato masala.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=70" },
  { name: "Idli Sambar", price: 90, category: "South Indian", veg: true, desc: "Steamed idlis with hot sambar and chutney.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=70" },
  { name: "Gulab Jamun", price: 60, category: "Desserts", veg: true, desc: "Warm syrup-soaked milk dumplings.", image: "https://images.unsplash.com/photo-1601303516534-eba3aa085ed5?auto=format&fit=crop&w=800&q=70" },
  { name: "Kulfi Falooda", price: 90, category: "Desserts", veg: true, desc: "Traditional kulfi with rose falooda.", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=70" },
  { name: "Ice Cream Sundae", price: 110, category: "Desserts", veg: true, desc: "Triple-scoop with nuts and chocolate sauce.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=70" },
  { name: "Sweet Lassi", price: 60, category: "Beverages", veg: true, desc: "Thick chilled yogurt drink with cardamom.", image: "https://images.unsplash.com/photo-1626201850129-a96e1aab1da4?auto=format&fit=crop&w=800&q=70" },
  { name: "Cold Drinks", price: 40, category: "Beverages", veg: true, desc: "Chilled soft drinks of your choice.", image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=800&q=70" },
];

export const CATEGORIES: Category[] = [
  "All", "Biryani", "Indian", "Tandoor", "Chinese", "Fast Food", "South Indian", "Thali", "Desserts", "Beverages",
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=70",
];

export const TESTIMONIALS = [
  { name: "Aditya Kumar", role: "Begusarai", text: "The mutton biryani is unforgettable. Royal ambience, warm staff — feels like a five-star in Teghra.", rating: 5 },
  { name: "Priya Singh", role: "Patna", text: "Visited with family. The thali was outstanding and the AC family hall was so comfortable.", rating: 5 },
  { name: "Rahul Sharma", role: "Khagaria", text: "Booked for my son's birthday. Decor, food, service — everything was perfect. Highly recommend.", rating: 5 },
  { name: "Neha Verma", role: "Begusarai", text: "Best paneer butter masala I've had locally. Plating itself feels premium.", rating: 5 },
  { name: "Saurabh Raj", role: "Munger", text: "Tandoori roti and chicken curry — pure Bihari soul. Will visit again for sure.", rating: 5 },
];

export const FAQS = [
  { q: "Where is Rosahai Mahal located?", a: "We are located near St. Paul Public School, Teghra, Begusarai, Bihar." },
  { q: "What are your opening hours?", a: "We are open daily from 11:00 AM to 11:00 PM." },
  { q: "Do you have a family AC hall?", a: "Yes, we have a fully AC family hall and a private room for birthday and small celebrations." },
  { q: "Can I book a table in advance?", a: "Absolutely — use the Book a Table form on this page or WhatsApp us directly." },
  { q: "Do you offer home delivery?", a: "Yes, we deliver locally. WhatsApp your order on the number listed in the contact section." },
];
