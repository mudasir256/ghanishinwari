export type PriceOption = {
  label: string;
  price: number;
};

export type MenuItem = {
  id: string;
  nameEn: string;
  nameUr: string;
  prices: PriceOption[];
  image?: string; // filename in /public e.g. "shinwarikarahi.jpg"
};

export type MenuCategory = {
  id: string;
  titleEn: string;
  titleUr: string;
  image?: string; // URL or path to category image
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "karahi",
    titleEn: "Karahi",
    titleUr: "کراہی",
    image: "/shinwarikarahi.jpg",
    items: [
      { id: "shinwari-karahi", nameEn: "Shinwari Karahi", nameUr: "شنواری کراہی", prices: [{ label: "Per KG", price: 3600 }, { label: "Half KG", price: 1800 }], image: "shinwarikarahi1.jpg" },
      { id: "sulemani-karahi", nameEn: "Sulemani Karahi", nameUr: "سلیمانی کراہی", prices: [{ label: "Per KG", price: 3600 }, { label: "Half KG", price: 1800 }], image: "sulemanikarahi.jpg" },
      { id: "namkeen-karahi", nameEn: "Namkeen Karahi", nameUr: "نمکین کراہی", prices: [{ label: "Per KG", price: 3600 }, { label: "Half KG", price: 1800 }] },
      { id: "dumba-machli-karahi", nameEn: "Dumba Machli Karahi", nameUr: "دنبہ مچھلی کراہی", prices: [{ label: "Per KG", price: 4200 }] },
      { id: "chicken-karahi", nameEn: "Chicken Karahi", nameUr: "چکن کراہی", prices: [{ label: "Per KG", price: 2200 }, { label: "Half KG", price: 1300 }] },
    ],
  },
  {
    id: "kabab",
    titleEn: "Kabab",
    titleUr: "کباب",
    image: "/chaplikabab.jpg",
    items: [
      { id: "beef-chapli", nameEn: "Beef Chapli Kabab", nameUr: "بیف چپلی کباب", prices: [{ label: "Per KG", price: 1600 }, { label: "Half KG", price: 800 }], image: "chaplikabab.jpg" },
      { id: "dumba-chapli", nameEn: "Dumba Chapli Kabab", nameUr: "دنبہ چپلی کباب", prices: [{ label: "Per KG", price: 2200 }, { label: "Half KG", price: 1200 }], image: "chaplikabab.jpg" },
    ],
  },
  {
    id: "barbeque",
    titleEn: "Barbeque",
    titleUr: "باربی کیو",
    image: "/namkeenchamptikka1.jpg",
    items: [
      { id: "namkeen-tikka", nameEn: "Namkeen Tikka", nameUr: "نمکین ٹکہ", prices: [{ label: "Per KG", price: 3600 }, { label: "Half KG", price: 1800 }], image: "namkeenchamptikka1.jpg" },
      { id: "patta-danna", nameEn: "Patta Danna", nameUr: "پٹہ دانہ", prices: [{ label: "Per Seekh", price: 800 }], image: "pattadana.jpg" },
      { id: "chicken-granade", nameEn: "Chicken Granade", nameUr: "چکن گرینیڈ", prices: [{ label: "Per Seekh", price: 900 }], image: "chickengrenade1.jpg" },
    ],
  },
  {
    id: "rosh",
    titleEn: "Rosh",
    titleUr: "روش",
    image: "/namkeenrosh.jpg",
    items: [
      { id: "roosh-masala", nameEn: "Roosh Masala", nameUr: "روش مصالحہ", prices: [{ label: "Per KG", price: 3600 }], image: "masallahrosh.jpg" },
      { id: "namkeen-roosh", nameEn: "Namkeen Roosh", nameUr: "نمکین روش", prices: [{ label: "Per KG", price: 3600 }], image: "namkeenrosh.jpg" },
      { id: "dumba-machli-roosh", nameEn: "Dumba Machli Roosh", nameUr: "دنبہ مچھلی روش", prices: [{ label: "Per KG", price: 3900 }] },
      { id: "raan-rosh", nameEn: "Raan Rosh", nameUr: "ران روش", prices: [{ label: "2 KG", price: 8500 }] },
      { id: "lamb-shank", nameEn: "Lamb Shank", nameUr: "لیمب شینک", prices: [{ label: "Per KG", price: 5000 }, { label: "Half KG", price: 2500 }] },
    ],
  },
  {
    id: "pulao",
    titleEn: "Pulao",
    titleUr: "پلاؤ",
    image: "/kablipulao1.jpg",
    items: [
      { id: "dumba-kabli", nameEn: "Dumba Kabli Pulao", nameUr: "دنبہ کابلی پلاؤ", prices: [{ label: "", price: 1200 }], image: "kablipulao1.jpg" },
      { id: "simple-kabli", nameEn: "Simple Kabli Pulao", nameUr: "سادہ کابلی پلاؤ", prices: [{ label: "", price: 800 }], image: "kablipulao.jpg" },
      { id: "raan-dam-phukth", nameEn: "Raan Dam Phukth", nameUr: "ران دم پخت", prices: [{ label: "", price: 3800 }], image: "musallam.jpg" },
    ],
  },
  {
    id: "qeema",
    titleEn: "Qeema",
    titleUr: "قیمہ",
    image: "/Restaurantimg.jpg",
    items: [
      { id: "shinwari-qeema", nameEn: "Shinwari Qeema", nameUr: "شنواری قیمہ", prices: [{ label: "Per KG", price: 3600 }, { label: "Half KG", price: 1800 }] },
      { id: "sulemani-qeema", nameEn: "Sulemani Qeema", nameUr: "سلیمانی قیمہ", prices: [{ label: "Per KG", price: 3600 }, { label: "Half KG", price: 1800 }] },
      { id: "desi-ghee-qeema", nameEn: "Desi Ghee Special Qeema", nameUr: "دیسی گھی اسپیشل قیمہ", prices: [{ label: "400 Gram", price: 2500 }] },
    ],
  },
  {
    id: "special",
    titleEn: "Special",
    titleUr: "اسپیشل",
    image: "/platter.jpg",
    items: [
      { id: "khada-dumba", nameEn: "Khada Dumba", nameUr: "کھڈا دنبہ", prices: [{ label: "Whole", price: 38000 }] },
    ],
  },
  {
    id: "roti",
    titleEn: "Roti",
    titleUr: "روٹی",
    image: "/readytomake.jpg",
    items: [
      { id: "khameeri-roti", nameEn: "Khameeri Roti", nameUr: "روٹی خمیری", prices: [{ label: "Per Pcs", price: 60 }] },
      { id: "sada-roti", nameEn: "Sada Roti", nameUr: "روٹی سادہ", prices: [{ label: "Per Pcs", price: 40 }] },
    ],
  },
  {
    id: "kehwa",
    titleEn: "Kehwa",
    titleUr: "قہوہ",
    image: "/Restaurant.jpg",
    items: [
      { id: "kehwa-small", nameEn: "Kehwa Small", nameUr: "قہوہ چھوٹا", prices: [{ label: "", price: 250 }] },
      { id: "kehwa-medium", nameEn: "Kehwa Medium", nameUr: "قہوہ میڈیم", prices: [{ label: "", price: 300 }] },
      { id: "kehwa-large", nameEn: "Kehwa Large", nameUr: "قہوہ بڑا", prices: [{ label: "", price: 400 }] },
    ],
  },
  {
    id: "drinks",
    titleEn: "Drinks",
    titleUr: "ڈرنکس",
    image: "/Restaurant.jpg",
    items: [
      { id: "soft-drink", nameEn: "Soft Drink", nameUr: "سوفٹ ڈرنک", prices: [{ label: "Regular", price: 80 }, { label: "1/2 Liter", price: 120 }, { label: "1.5 Liter", price: 230 }] },
      { id: "mineral-water", nameEn: "Mineral Water", nameUr: "پانی", prices: [{ label: "1/2 Liter", price: 60 }, { label: "1.5 Liter", price: 110 }] },
    ],
  },
  {
    id: "extras",
    titleEn: "Extras",
    titleUr: "اضافی",
    image: "/Restaurantimg.jpg",
    items: [
      { id: "raita", nameEn: "Raita", nameUr: "رائتہ", prices: [{ label: "", price: 100 }] },
      { id: "green-chutney", nameEn: "Green Chutney", nameUr: "سبز چٹنی", prices: [{ label: "", price: 80 }] },
      { id: "tomato-chutney", nameEn: "Tomato Chutney", nameUr: "ٹماٹر چٹنی", prices: [{ label: "", price: 80 }] },
    ],
  },
];

export const branches = [
  {
    id: "truck-adda",
    name: "Truck Adda",
    address: "General Truck Stand, 22/A Ravi Rd, Qila Lachman Singh, Lahore",
    area: "Truck Adda",
  },
  {
    id: "bedian",
    name: "Bedian Road",
    address: "Next to Askari-11, Adjacent to Shell Petrol Pump, Lahore",
    area: "Bedian Rd",
  },
  {
    id: "bahria",
    name: "Bahria Town",
    address: "167-168 Talwar Chowk, Near Jasmine Mall, Bahria Town, Lahore 55111",
    area: "Bahria Town",
  },
];
