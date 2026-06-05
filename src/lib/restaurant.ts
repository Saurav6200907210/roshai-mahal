import v1 from "@/assets/videos/v1.mp4.asset.json";
import v2 from "@/assets/videos/v2.mp4.asset.json";
import v3 from "@/assets/videos/v3.mp4.asset.json";
import v4 from "@/assets/videos/v4.mp4.asset.json";
import v5 from "@/assets/videos/v5.mp4.asset.json";
import menuCard from "@/assets/brochure/menu-actual.png.asset.json";
import eventBrochure from "@/assets/brochure/event-brochure.png.asset.json";
import g3 from "@/assets/gallery/g3.png.asset.json";
import g4 from "@/assets/gallery/g4.png.asset.json";
import g5 from "@/assets/gallery/g5.png.asset.json";
import g6 from "@/assets/gallery/g6.png.asset.json";
import g7 from "@/assets/gallery/g7.png.asset.json";
import g8 from "@/assets/gallery/g8.png.asset.json";
import g9 from "@/assets/gallery/g9.png.asset.json";
import g10 from "@/assets/gallery/g10.png.asset.json";

export const RESTAURANT = {
  name: "Rosahai Mahal Teghra",
  tagline: "Where Royalty Meets Flavor",
  address: "Station Road, Near St. Paul Public School, Teghra, Begusarai, Bihar 851133",
  shortAddress: "Teghra, Begusarai, Bihar",
  phone: "+91 97985 07612",
  phoneRaw: "+919798507612",
  phoneAlt: ["+91 96933 14686", "+91 76339 89833", "+91 62053 48886", "+91 77356 54659"],
  whatsapp: "916200907210",
  whatsappDisplay: "+91 62009 07210",
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

export function waLink(text: string) {
  return `https://web.whatsapp.com/send?phone=${RESTAURANT.whatsapp}&text=${encodeURIComponent(text)}`;
}

export const VIDEOS = [
  { src: v1.url, title: "Royal Ambience" },
  { src: v2.url, title: "Signature Dishes" },
  { src: v3.url, title: "Family Dining" },
  { src: v4.url, title: "Banquet & Events" },
  { src: v5.url, title: "Chef's Special" },
];

export const MENU_CARDS = [
  { url: menuCard.url, title: "Menu Card" },
  { url: eventBrochure.url, title: "Banquet, Rooms & Events" },
];

export type Category =
  | "All"
  | "Paneer Items"
  | "Hot Rice"
  | "Roti / Naan"
  | "Pulao / Biryani"
  | "Dal"
  | "Chicken Items"
  | "Chinese Items"
  | "Egg Items"
  | "Veg Items"
  | "Chinese Veg Items";

export interface MenuItem {
  name: string;
  price: string; // can be "125/240" etc.
  category: Exclude<Category, "All">;
  desc?: string;
  image: string;
  veg: boolean;
  popular?: boolean;
}

// Curated high-resolution food photography (Unsplash, 1200px). Each dish gets the closest real-photo match.
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`;

const IMG = {
  // Paneer family
  paneerMasala:        u("1631452180519-c014fe946bc7"),
  paneerButter:        u("1565557623262-b51c2513a641"),
  paneerTikka:         u("1599487488170-d11ec9c172f0"),
  paneerKadhai:        u("1546833999-b9f581a1996d"),
  paneerHandi:         u("1567188040759-fb8a883dc6d8"),
  paneerChilli:        u("1626777553635-2d0825e2a3a3"),
  paneerDoPyaza:       u("1604908554027-9d59c5b1ff80"),
  paneerKassa:         u("1604908176997-125f25cc6f3d"),
  paneerKofta:         u("1666884521357-7ad59e3a47ad"),
  paneerBhurji:        u("1606491956689-2ea866880c84"),
  shahiPaneer:         u("1567188040759-fb8a883dc6d8"),
  palakPaneer:         u("1626500155433-3a2b1cae8b5f"),
  malaiKofta:          u("1666884521357-7ad59e3a47ad"),
  paneerParatha:       u("1565557623262-b51c2513a641"),
  paneerKulcha:        u("1633945274309-2c16c9694ec0"),
  paneerPakoda:        u("1599487488170-d11ec9c172f0"),
  matarPaneer:         u("1631452180519-c014fe946bc7"),
  paneerChatpata:      u("1626777553635-2d0825e2a3a3"),
  paneerMaharashtra:   u("1631452180519-c014fe946bc7"),

  // Rice
  plainRice:           u("1536304993881-ff6e9eefa2a6"),
  jeeraRice:           u("1596797038530-2c107229654b"),
  vegFriedRice:        u("1603133872878-684f208fb84b"),
  chickenFriedRice:    u("1645177628172-a94c1f96e6db"),
  chickenSpecialRice:  u("1603894584373-5ac82b2ae398"),
  mixFriedRice:        u("1585032226651-759b368d7246"),

  // Roti / Naan
  tandooriRoti:        u("1626776876729-bab4369a5a5a"),
  naanPlain:           u("1633945274309-2c16c9694ec0"),
  naanButter:          u("1633945274309-2c16c9694ec0"),
  garlicNaan:          u("1626776876729-bab4369a5a5a"),
  missiRoti:           u("1626776876729-bab4369a5a5a"),
  lachhaParatha:       u("1626776876729-bab4369a5a5a"),
  kulcha:              u("1633945274309-2c16c9694ec0"),
  mughlaiParatha:      u("1626776876729-bab4369a5a5a"),
  stuffNaan:           u("1633945274309-2c16c9694ec0"),
  aloosParatha:        u("1565557623262-b51c2513a641"),
  specialNaan:         u("1633945274309-2c16c9694ec0"),
  tawaRoti:            u("1626776876729-bab4369a5a5a"),

  // Pulao / Biryani
  plainPulao:          u("1596797038530-2c107229654b"),
  vegPulao:            u("1567337710282-00832b415979"),
  paneerPulao:         u("1567337710282-00832b415979"),
  kashmiriPulao:       u("1567337710282-00832b415979"),
  navratanPulao:       u("1567337710282-00832b415979"),
  shahiPulao:          u("1596797038530-2c107229654b"),
  chickenBiryani:      u("1633945274405-b6c8069047b0"),
  muttonBiryani:       u("1589302168068-964664d93dc0"),
  dumBiryani:          u("1633945274405-b6c8069047b0"),

  // Dal
  dalTadka:            u("1626500155433-3a2b1cae8b5f"),
  dalFry:              u("1626500155433-3a2b1cae8b5f"),
  dalMakhani:          u("1626500155433-3a2b1cae8b5f"),
  dalMughlai:          u("1626500155433-3a2b1cae8b5f"),
  dalPunjabi:          u("1626500155433-3a2b1cae8b5f"),
  dalBati:             u("1567337710282-00832b415979"),

  // Chicken
  chickenMasala:       u("1604908176997-125f25cc6f3d"),
  chickenDoPyaza:      u("1604908554027-9d59c5b1ff80"),
  chickenCurry:        u("1604908176997-125f25cc6f3d"),
  chickenKadhai:       u("1546833999-b9f581a1996d"),
  chickenButter:       u("1603894584373-5ac82b2ae398"),
  chickenKassa:        u("1604908176997-125f25cc6f3d"),
  chickenKorma:        u("1603894584373-5ac82b2ae398"),
  chickenTikka:        u("1599487488170-d11ec9c172f0"),
  chickenBhuna:        u("1604908554027-9d59c5b1ff80"),
  chickenRoaster:      u("1599487488170-d11ec9c172f0"),
  murghMusallam:       u("1603894584373-5ac82b2ae398"),
  chickenNawabi:       u("1603894584373-5ac82b2ae398"),
  chickenNoorani:      u("1603894584373-5ac82b2ae398"),
  chickenKashmiri:     u("1604908176997-125f25cc6f3d"),
  chickenChilli:       u("1585032226651-759b368d7246"),
  chickenHandi:        u("1604908554027-9d59c5b1ff80"),
  chickenRoast:        u("1599487488170-d11ec9c172f0"),

  // Chinese chicken
  chickenGarlic:       u("1585032226651-759b368d7246"),
  chickenGinger:       u("1552611052-33e04de081de"),
  chicken65:           u("1626777553635-2d0825e2a3a3"),
  chickenLollipop:     u("1626082927389-6cd097cdc6ec"),
  chickenPakoda:       u("1626777553635-2d0825e2a3a3"),
  chickenChinga:       u("1626777553635-2d0825e2a3a3"),
  chickenRoll:         u("1601050690597-df0568f70950"),
  chickenRoastRoll:    u("1601050690597-df0568f70950"),
  chickenTandoori:     u("1599487488170-d11ec9c172f0"),
  reshmiKebab:         u("1599487488170-d11ec9c172f0"),

  // Egg
  eggCurry:            u("1604908554027-9d59c5b1ff80"),
  eggMasala:           u("1604908554027-9d59c5b1ff80"),
  eggDoPyaza:          u("1604908554027-9d59c5b1ff80"),
  eggKadhai:           u("1546833999-b9f581a1996d"),
  omeletteCurry:       u("1565299585323-38d6b0865b47"),
  eggButter:           u("1604908554027-9d59c5b1ff80"),
  eggHandi:            u("1604908554027-9d59c5b1ff80"),
  omelette:            u("1565299585323-38d6b0865b47"),
  eggBhurji:           u("1606491956689-2ea866880c84"),
  eggRoll:             u("1601050690597-df0568f70950"),
  eggPakoda:           u("1606491956689-2ea866880c84"),
  babyCorn:            u("1606491956689-2ea866880c84"),
  mushroomKurkure:     u("1504754524776-8f4f37790ca0"),

  // Veg
  vegBiryani:          u("1596797038530-2c107229654b"),
  vegMaharashtra:      u("1606491956689-2ea866880c84"),
  gobhi:               u("1606491956689-2ea866880c84"),
  cashewKorma:         u("1567188040759-fb8a883dc6d8"),
  mixVeg:              u("1606491956689-2ea866880c84"),
  vegPakoda:           u("1599487488170-d11ec9c172f0"),
  onionPakoda:         u("1599487488170-d11ec9c172f0"),

  // Chinese Veg
  mixChowmein:         u("1585032226651-759b368d7246"),
  hakkaChowmein:       u("1585032226651-759b368d7246"),
  hakkaChowmeinNonVeg: u("1585032226651-759b368d7246"),
  americanChopSuey:    u("1552611052-33e04de081de"),
  maharajaChilli:      u("1606491956689-2ea866880c84"),
  babycornChilli:      u("1626777553635-2d0825e2a3a3"),
  vegetableChilli:     u("1606491956689-2ea866880c84"),
};

export const MENU: MenuItem[] = [
  // Paneer Items
  { name: "Paneer Masala", price: "125/240", category: "Paneer Items", veg: true, popular: true, image: IMG.paneerMasala, desc: "Classic paneer masala in rich onion-tomato gravy." },
  { name: "Paneer Chilli (Dry/Gravy)", price: "130/250", category: "Paneer Items", veg: true, image: IMG.paneerChilli, desc: "Indo-Chinese paneer tossed with peppers." },
  { name: "Paneer Do Pyaza", price: "130/260", category: "Paneer Items", veg: true, image: IMG.paneerMasala, desc: "Paneer cooked with double onions and spices." },
  { name: "Paneer Kadhai", price: "150/300", category: "Paneer Items", veg: true, image: IMG.paneerKadhai, desc: "Wok-tossed paneer with bell peppers." },
  { name: "Paneer Handi", price: "160/320", category: "Paneer Items", veg: true, image: IMG.paneerKadhai, desc: "Slow-cooked paneer in clay handi." },
  { name: "Paneer Butter Masala", price: "150/280", category: "Paneer Items", veg: true, popular: true, image: IMG.paneerButter, desc: "Creamy buttery tomato gravy with paneer." },
  { name: "Paneer Tikka Masala", price: "150/300", category: "Paneer Items", veg: true, popular: true, image: IMG.paneerTikka, desc: "Smoky grilled paneer in spiced gravy." },
  { name: "Matar Paneer", price: "120/230", category: "Paneer Items", veg: true, image: IMG.paneerMasala, desc: "Paneer and green peas in spiced gravy." },
  { name: "Paneer Kassa", price: "130/250", category: "Paneer Items", veg: true, image: IMG.paneerKadhai, desc: "Bengali-style spicy paneer kassa." },
  { name: "Paneer Kofta", price: "110/220", category: "Paneer Items", veg: true, image: IMG.malaiKofta, desc: "Soft paneer dumplings in creamy gravy." },
  { name: "Paneer Bhurji", price: "100/180", category: "Paneer Items", veg: true, image: IMG.paneerBhurji, desc: "Scrambled paneer with onions and spices." },
  { name: "Shahi Paneer", price: "140/270", category: "Paneer Items", veg: true, image: IMG.shahiPaneer, desc: "Royal Mughlai paneer in creamy cashew gravy." },
  { name: "Paneer Shahi Kassa", price: "150/310", category: "Paneer Items", veg: true, image: IMG.shahiPaneer, desc: "Shahi paneer cooked kassa style." },
  { name: "Palak Paneer", price: "110/200", category: "Paneer Items", veg: true, image: IMG.palakPaneer, desc: "Paneer in smooth spinach gravy." },
  { name: "Paneer Pijjali", price: "150/280", category: "Paneer Items", veg: true, image: IMG.paneerKadhai, desc: "Spicy chef's special paneer." },
  { name: "Paneer Tikka", price: "250", category: "Paneer Items", veg: true, image: IMG.paneerTikka, desc: "Char-grilled marinated paneer skewers." },
  { name: "Malai Kofta", price: "250", category: "Paneer Items", veg: true, popular: true, image: IMG.malaiKofta, desc: "Royal kofta in creamy white gravy." },
  { name: "Paneer Chatpata", price: "240", category: "Paneer Items", veg: true, image: IMG.paneerChilli, desc: "Tangy chatpata paneer." },
  { name: "Paneer Maharashtrian", price: "120/220", category: "Paneer Items", veg: true, image: IMG.paneerMasala, desc: "Maharashtrian spiced paneer curry." },
  { name: "Paneer Kulcha", price: "60", category: "Paneer Items", veg: true, image: IMG.paneerKulcha, desc: "Soft kulcha stuffed with paneer." },
  { name: "Paneer Paratha", price: "60", category: "Paneer Items", veg: true, image: IMG.paneerParatha, desc: "Whole-wheat paratha stuffed with paneer." },
  { name: "Paneer Pakoda (8 Pieces)", price: "180", category: "Paneer Items", veg: true, image: IMG.paneerPakoda, desc: "Crispy gram-flour battered paneer fritters." },

  // Hot Rice
  { name: "Plain Rice", price: "80", category: "Hot Rice", veg: true, image: IMG.plainRice, desc: "Steamed basmati rice." },
  { name: "Jeera Rice", price: "100", category: "Hot Rice", veg: true, image: IMG.jeeraRice, desc: "Cumin-tempered basmati rice." },
  { name: "Veg Fried Rice", price: "150", category: "Hot Rice", veg: true, image: IMG.vegFriedRice, desc: "Wok-tossed rice with garden veggies." },
  { name: "Chicken Fried Rice", price: "200", category: "Hot Rice", veg: false, popular: true, image: IMG.chickenFriedRice, desc: "Stir-fried rice with chicken." },
  { name: "Chicken Special Rice", price: "220", category: "Hot Rice", veg: false, image: IMG.chickenFriedRice, desc: "Chef's special chicken rice." },
  { name: "Mix Fried Rice", price: "250", category: "Hot Rice", veg: false, image: IMG.chickenFriedRice, desc: "Mixed meat and veg fried rice." },

  // Roti / Naan
  { name: "Tandoori Roti (Plain/Butter)", price: "15/20", category: "Roti / Naan", veg: true, image: IMG.tandooriRoti, desc: "Clay-oven baked whole-wheat roti." },
  { name: "Naan (Plain/Butter)", price: "40/50", category: "Roti / Naan", veg: true, image: IMG.naanPlain, desc: "Soft tandoor-baked naan." },
  { name: "Missi Roti", price: "40", category: "Roti / Naan", veg: true, image: IMG.tandooriRoti, desc: "Spiced gram-flour roti." },
  { name: "Lachha Paratha", price: "40", category: "Roti / Naan", veg: true, image: IMG.lachhaParatha, desc: "Flaky multilayered paratha." },
  { name: "Kulcha (Plain/Masala)", price: "40/50", category: "Roti / Naan", veg: true, image: IMG.naanPlain, desc: "Soft Amritsari-style kulcha." },
  { name: "Mughlai Paratha (Veg/Non-Veg)", price: "40/60", category: "Roti / Naan", veg: true, image: IMG.lachhaParatha, desc: "Stuffed and fried Mughlai paratha." },
  { name: "Stuff Naan", price: "70", category: "Roti / Naan", veg: true, image: IMG.naanPlain, desc: "Naan stuffed with chef's filling." },
  { name: "Aloo Paratha", price: "50", category: "Roti / Naan", veg: true, image: IMG.aloosParatha, desc: "Whole-wheat paratha with spiced potato." },
  { name: "Garlic Naan", price: "70", category: "Roti / Naan", veg: true, popular: true, image: IMG.garlicNaan, desc: "Tandoor naan topped with garlic & coriander." },
  { name: "Special Naan", price: "90", category: "Roti / Naan", veg: true, image: IMG.naanPlain, desc: "Chef's premium stuffed naan." },
  { name: "Tawa Roti (Plain/Butter)", price: "10", category: "Roti / Naan", veg: true, image: IMG.tandooriRoti, desc: "Skillet-cooked whole-wheat roti." },
  { name: "Paneer Paratha", price: "60", category: "Roti / Naan", veg: true, image: IMG.paneerParatha, desc: "Paratha stuffed with spiced paneer." },
  { name: "Paneer Kulcha", price: "60", category: "Roti / Naan", veg: true, image: IMG.paneerKulcha, desc: "Kulcha stuffed with paneer." },

  // Pulao / Biryani
  { name: "Plain Pulao", price: "140", category: "Pulao / Biryani", veg: true, image: IMG.plainPulao, desc: "Fragrant basmati pulao." },
  { name: "Veg Pulao", price: "160", category: "Pulao / Biryani", veg: true, image: IMG.vegPulao, desc: "Pulao with mixed vegetables." },
  { name: "Paneer Pulao", price: "180", category: "Pulao / Biryani", veg: true, image: IMG.vegPulao, desc: "Pulao tossed with paneer cubes." },
  { name: "Veg Kashmiri Pulao", price: "190", category: "Pulao / Biryani", veg: true, image: IMG.vegPulao, desc: "Sweet & nutty Kashmiri pulao." },
  { name: "Veg Navratan Pulao", price: "220", category: "Pulao / Biryani", veg: true, image: IMG.vegPulao, desc: "Nine-treasure royal pulao." },
  { name: "Shahi Pulao", price: "190", category: "Pulao / Biryani", veg: true, image: IMG.vegPulao, desc: "Royal Mughlai shahi pulao." },
  { name: "Biryani (Veg/Mutton/Chicken)", price: "160/180/200", category: "Pulao / Biryani", veg: false, popular: true, image: IMG.chickenBiryani, desc: "Aromatic layered biryani — your choice." },
  { name: "Dum Biryani (Veg/Chicken)", price: "180/220", category: "Pulao / Biryani", veg: false, popular: true, image: IMG.muttonBiryani, desc: "Slow-dum cooked royal biryani." },

  // Dal
  { name: "Dal Tadka", price: "100", category: "Dal", veg: true, popular: true, image: IMG.dalTadka, desc: "Yellow dal with smoking ghee tadka." },
  { name: "Dal Jeera Fry", price: "80", category: "Dal", veg: true, image: IMG.dalFry, desc: "Cumin tempered dal fry." },
  { name: "Dal Masani", price: "140", category: "Dal", veg: true, image: IMG.dalFry, desc: "Rich, spiced masani dal." },
  { name: "Dal Mughlai", price: "160", category: "Dal", veg: true, image: IMG.dalTadka, desc: "Creamy Mughlai-style dal." },
  { name: "Dal Punjabi Butterwali", price: "180", category: "Dal", veg: true, image: IMG.dalTadka, desc: "Slow-cooked Punjabi butter dal." },
  { name: "Dal Bati", price: "120", category: "Dal", veg: true, image: IMG.dalBati, desc: "Rajasthani dal with baked bati." },

  // Chicken Items
  { name: "Chicken Masala (2 pcs)", price: "180", category: "Chicken Items", veg: false, image: IMG.chickenMasala, desc: "Chicken simmered in spiced masala." },
  { name: "Chicken Do Pyaza (2 pcs)", price: "160", category: "Chicken Items", veg: false, image: IMG.chickenMasala, desc: "Chicken with double onions." },
  { name: "Chicken Curry (2 pcs)", price: "140", category: "Chicken Items", veg: false, image: IMG.chickenMasala, desc: "Home-style chicken curry." },
  { name: "Chicken Kadhai (4/8 pcs)", price: "350/600", category: "Chicken Items", veg: false, popular: true, image: IMG.chickenKadhai, desc: "Wok-tossed chicken with peppers." },
  { name: "Chicken Butter Masala (4/8 pcs)", price: "350/670", category: "Chicken Items", veg: false, popular: true, image: IMG.chickenButter, desc: "Creamy buttery chicken masala." },
  { name: "Chicken Kassa (4/8 pcs)", price: "300/580", category: "Chicken Items", veg: false, image: IMG.chickenMasala, desc: "Bengali-style chicken kassa." },
  { name: "Chicken Korma (4 pcs)", price: "400", category: "Chicken Items", veg: false, image: IMG.chickenButter, desc: "Royal korma in cashew gravy." },
  { name: "Chicken Tikka Butter Masala (8 pcs)", price: "400", category: "Chicken Items", veg: false, image: IMG.chickenTikka, desc: "Smoky tikka in creamy gravy." },
  { name: "Chicken Bhuna", price: "360", category: "Chicken Items", veg: false, image: IMG.chickenMasala, desc: "Slow-bhuna chicken with deep flavors." },
  { name: "Chicken Roaster (Dry/Gravy)", price: "230/250", category: "Chicken Items", veg: false, image: IMG.chickenTandoori, desc: "Char-roasted chicken." },
  { name: "Murgh Musallam", price: "450/650", category: "Chicken Items", veg: false, image: IMG.murghMusallam, desc: "Royal whole chicken Mughlai delicacy." },
  { name: "Chicken Nawabi", price: "450/650", category: "Chicken Items", veg: false, image: IMG.murghMusallam, desc: "Nawabi rich chicken curry." },
  { name: "Chicken Noorani (4 pcs)", price: "300", category: "Chicken Items", veg: false, image: IMG.chickenButter, desc: "Mild creamy noorani chicken." },
  { name: "Chicken Kashmiri (2 pcs)", price: "220", category: "Chicken Items", veg: false, image: IMG.chickenMasala, desc: "Kashmiri-spiced chicken." },
  { name: "Chicken Chilli", price: "350/600", category: "Chicken Items", veg: false, image: IMG.chickenChilli, desc: "Indo-Chinese chicken chilli." },
  { name: "Chicken Handi", price: "350/680", category: "Chicken Items", veg: false, image: IMG.chickenKadhai, desc: "Handi-cooked rich chicken." },
  { name: "Chicken Special Roast", price: "500/700", category: "Chicken Items", veg: false, image: IMG.chickenTandoori, desc: "Chef's special chicken roast." },
  { name: "Chicken No Butter Masala", price: "350", category: "Chicken Items", veg: false, image: IMG.chickenButter, desc: "Light buttery chicken masala." },

  // Chinese Items
  { name: "Chicken Chilli (Boneless)", price: "250/260", category: "Chinese Items", veg: false, popular: true, image: IMG.chickenChilli, desc: "Boneless chilli chicken — dry/gravy." },
  { name: "Chicken Chilli (With Bone)", price: "260/280", category: "Chinese Items", veg: false, image: IMG.chickenChilli, desc: "Bone-in chilli chicken." },
  { name: "Chicken Garlic", price: "260", category: "Chinese Items", veg: false, image: IMG.chickenChilli, desc: "Garlicky stir-fried chicken." },
  { name: "Chicken Ginger", price: "260", category: "Chinese Items", veg: false, image: IMG.chickenChilli, desc: "Gingery wok-tossed chicken." },
  { name: "Chicken 65", price: "290", category: "Chinese Items", veg: false, image: IMG.chicken65, desc: "Spicy South-Indian fried chicken." },
  { name: "Chicken Lollipop", price: "210/330", category: "Chinese Items", veg: false, popular: true, image: IMG.chickenLollipop, desc: "Frenched chicken winglets, marinated & fried." },
  { name: "Chicken Pakoda", price: "200", category: "Chinese Items", veg: false, image: IMG.chickenPakoda, desc: "Crispy chicken pakoda." },
  { name: "Chicken Pakoda (8 pcs)", price: "280", category: "Chinese Items", veg: false, image: IMG.chickenPakoda, desc: "8-piece crispy chicken pakoda." },
  { name: "Chicken Chinga (8 pcs)", price: "200", category: "Chinese Items", veg: false, image: IMG.chickenPakoda, desc: "Crunchy chicken chinga bites." },
  { name: "Chicken Roast Roll", price: "180", category: "Chinese Items", veg: false, image: IMG.chickenRoll, desc: "Roasted chicken stuffed in soft roll." },
  { name: "Chicken Roll", price: "100", category: "Chinese Items", veg: false, image: IMG.chickenRoll, desc: "Classic chicken kathi roll." },
  { name: "Chicken Tandoori", price: "320/600", category: "Chinese Items", veg: false, popular: true, image: IMG.chickenTandoori, desc: "Clay-oven roasted tandoori chicken." },
  { name: "Chicken Reshmi Kebab", price: "280", category: "Chinese Items", veg: false, image: IMG.reshmiKebab, desc: "Creamy soft chicken kebab." },

  // Egg Items
  { name: "Egg Curry (2 pcs)", price: "100", category: "Egg Items", veg: false, image: IMG.eggCurry, desc: "Boiled eggs in spiced gravy." },
  { name: "Egg Masala (2 pcs)", price: "120", category: "Egg Items", veg: false, image: IMG.eggMasala, desc: "Rich masala egg curry." },
  { name: "Egg Do Pyaza (2 pcs)", price: "110", category: "Egg Items", veg: false, image: IMG.eggMasala, desc: "Eggs cooked with double onions." },
  { name: "Egg Kadhai (2 pcs)", price: "150", category: "Egg Items", veg: false, image: IMG.eggMasala, desc: "Kadhai-style egg curry." },
  { name: "Omelette Curry (2 pcs)", price: "120", category: "Egg Items", veg: false, image: IMG.eggMasala, desc: "Omelette pieces in masala gravy." },
  { name: "Egg Butter Masala (2 pcs)", price: "150", category: "Egg Items", veg: false, image: IMG.eggMasala, desc: "Buttery rich egg masala." },
  { name: "Egg Handi (2 pcs)", price: "160", category: "Egg Items", veg: false, image: IMG.eggMasala, desc: "Handi-style egg curry." },
  { name: "Egg Omelette", price: "40", category: "Egg Items", veg: false, image: IMG.omelette, desc: "Fluffy classic egg omelette." },
  { name: "Egg Bhurji", price: "50", category: "Egg Items", veg: false, image: IMG.eggBhurji, desc: "Scrambled spiced eggs." },
  { name: "Egg Roll", price: "60", category: "Egg Items", veg: false, image: IMG.eggRoll, desc: "Egg-coated paratha kathi roll." },
  { name: "Egg Pakoda", price: "120", category: "Egg Items", veg: false, image: IMG.eggBhurji, desc: "Crispy battered egg pakoda." },
  { name: "Baby Corn", price: "250", category: "Egg Items", veg: true, image: IMG.babyCorn, desc: "Crispy baby corn starter." },
  { name: "Mushroom Kurkure", price: "220", category: "Egg Items", veg: true, image: IMG.mushroomKurkure, desc: "Crunchy mushroom kurkure." },

  // Veg Items
  { name: "Veg Biryani", price: "60", category: "Veg Items", veg: true, image: IMG.vegBiryani, desc: "Veg biryani — single plate." },
  { name: "Veg Maharashtrian", price: "80/150", category: "Veg Items", veg: true, image: IMG.mixVeg, desc: "Maharashtrian-style mixed veg." },
  { name: "Gobhi Maharashtrian", price: "80/150", category: "Veg Items", veg: true, image: IMG.gobhi, desc: "Cauliflower Maharashtrian curry." },
  { name: "Cashew Korma", price: "300", category: "Veg Items", veg: true, image: IMG.cashewKorma, desc: "Rich cashew korma gravy." },
  { name: "Mix Veg", price: "80/150", category: "Veg Items", veg: true, image: IMG.mixVeg, desc: "Seasonal mixed vegetables." },
  { name: "Veg Pakoda", price: "110", category: "Veg Items", veg: true, image: IMG.vegPakoda, desc: "Crisp mixed veg pakoda." },
  { name: "Onion Pakoda", price: "120", category: "Veg Items", veg: true, image: IMG.onionPakoda, desc: "Crispy onion fritters." },

  // Chinese Veg Items
  { name: "Mix Chowmein (Non-Veg)", price: "240", category: "Chinese Veg Items", veg: false, image: IMG.hakkaChowmein, desc: "Wok-tossed mixed non-veg noodles." },
  { name: "Hakka Chowmein", price: "200", category: "Chinese Veg Items", veg: true, popular: true, image: IMG.hakkaChowmein, desc: "Classic veg hakka noodles." },
  { name: "American Chop Suey", price: "220", category: "Chinese Veg Items", veg: true, image: IMG.americanChopSuey, desc: "Crispy noodles in sweet-tangy sauce." },
  { name: "Hakka Chowmein (Non-Veg)", price: "230", category: "Chinese Veg Items", veg: false, image: IMG.hakkaChowmein, desc: "Hakka noodles with chicken & egg." },
  { name: "Maharaja Chilli", price: "250", category: "Chinese Veg Items", veg: true, image: IMG.vegetableChilli, desc: "Chef's special maharaja chilli." },
  { name: "Babycorn Chilli", price: "250", category: "Chinese Veg Items", veg: true, image: IMG.babycornChilli, desc: "Crispy babycorn in chilli sauce." },
  { name: "Vegetable Chilli", price: "150", category: "Chinese Veg Items", veg: true, image: IMG.vegetableChilli, desc: "Mixed veg tossed in chilli sauce." },
];

export const CATEGORIES: Category[] = [
  "All",
  "Paneer Items",
  "Hot Rice",
  "Roti / Naan",
  "Pulao / Biryani",
  "Dal",
  "Chicken Items",
  "Chinese Items",
  "Egg Items",
  "Veg Items",
  "Chinese Veg Items",
];

export const GALLERY = [
  g4.url,
  g3.url,
  g5.url,
  g8.url,
  g6.url,
  g7.url,
  g9.url,
  g10.url,
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=70",
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
