import { Shop, Product } from './data';
import { PlaceHolderImages } from './placeholder-images';

const shopNames = [
  "Merkato Market", "Bole Savanna", "Piassa Corner", "Saris Souk", "Ayat Emporium", 
  "Lideta Bazaar", "Kazanchis Central", "Gerji Galleria", "CMC Mart", "Summit Souk",
  "Addis Souk", "Sheger Market", "Lancha Hub", "Gotera Goods", "Kera Corner", "Mexico Plaza",
  "Arat Kilo Central", "Sidist Kilo Bazaar", "Amist Kilo Mart", "Urael Emporium", "Hayahulet Hub",
  "Megenagna Mart", "Imperial Intersection", "Riche Retail", "Goro Gateway", "Welo Sefer Square",
  "Lafto Lane", "Jemo Junction", "Lebu Local", "Hanamariam Hub", "Kolfe Karnival", "Asko Arcade",
  "Burayu Bazaar", "Sebeta Souk", "Holeta Hub", "Dukem Depot", "Bishoftu Bazaar", "Adama Arcade",
  "Nazret Nook", "Modjo Market", "Ziway Zone", "Shashemene Square", "Hawassa Hub", "Arba Minch Mart",
  "Jimma Junction", "Nekemte Nook", "Gondar Gateway", "Bahir Dar Bazaar", "Axum Arcade", "Mekelle Market",
  "Dire Dawa Depot", "Harar Hub", "Jijiga Junction", "Awash Arcade", "Asella Emporium", "Debre Berhan Bazaar",
  "Debre Markos Mart", "Dessie Depot", "Kombolcha Corner", "Woldia Way", "Lalibela Lane", "Sekota Square",
  "Alamata Arcade", "Adigrat Gateway", "Shire Souk", "Humera Hub", "Metema Market", "Gambela Galleria",
  "Asosa Arcade", "Sodo Souk", "Wolaita Way", "Hosaena Hub", "Dilla Depot", "Yirgalem Yard",
  "Bonga Bazaar", "Mizan Teferi Mart", "Tepi Town", "Bedele Bazaar", "Gore Gateway", "Dembidolo Depot",

  "Finfinne Fair", "Oromia Oasis", "Amhara Arcade", "Tigray Treasures", "Somali Souk", 
  "Afar Agora", "Benishangul Bazaar", "Gambela Gems", "Harari Hub", "Sidama Square",
  "Shewa Spices", "Wollo Wares", "Gojjam Goods", "Arsi Agriculture", "Bale Bounty", 
  "Illubabor Imports", "Kaffa Kingdom", "Gamo Highlands", "Gofa Gallery", "Konso Crafts"
];

const productNames = [
  { name: "Coffee", category: "Groceries", imageId: "prod-coffee" },
  { name: "Bread", category: "Bakery", imageId: "prod-bread" },
  { name: "Honey", category: "Groceries", imageId: "prod-honey" },
  { name: "Teff", category: "Grains", imageId: "prod-teff" },
  { name: "Berbere Spice Mix", category: "Spices", imageId: "prod-spices" },
  { name: "Cooking Oil", category: "Groceries", imageId: "prod-oil" },
  { name: "Red Lentils (Misir)", category: "Grains", imageId: "prod-lentils" },
  { name: "Onions", category: "Vegetables", imageId: "prod-onions" },
  { name: "Tomatoes", category: "Vegetables", imageId: "prod-onions" },
  { name: "Potatoes", category: "Vegetables", imageId: "prod-onions" },
  { name: "Garlic", category: "Vegetables", imageId: "prod-onions" },
  { name: "Ginger", category: "Vegetables", imageId: "prod-spices" },
  { name: "Mitmita Spice", category: "Spices", imageId: "prod-spices" },
  { name: "Korerima (Black Cardamom)", category: "Spices", imageId: "prod-spices" },
  { name: "Injera", category: "Bakery", imageId: "prod-bread" },
  { name: "Shiro Powder", category: "Grains", imageId: "prod-lentils" },
  { name: "Flour", category: "Grains", imageId: "prod-teff" },
  { name: "Sugar", category: "Groceries", imageId: "prod-honey" },
  { name: "Salt", category: "Groceries", imageId: "prod-spices" },
  { name: "Pasta", category: "Grains", imageId: "prod-teff" },
  { name: "Rice", category: "Grains", imageId: "prod-teff" },
  { name: "Niter Kibbeh (Spiced Butter)", category: "Dairy", imageId: "prod-oil" },
  { name: "Ayib (Cheese)", category: "Dairy", imageId: "prod-honey" },
  { name: "Yogurt", category: "Dairy", imageId: "prod-honey" },
  { name: "Milk", category: "Dairy", imageId: "prod-honey" },
  { name: "Eggs", category: "Dairy", imageId: "prod-honey" },
  { name: "Bananas", category: "Fruits", imageId: "prod-onions" },
  { name: "Oranges", category: "Fruits", imageId: "prod-onions" },
  { name: "Mangoes", category: "Fruits", imageId: "prod-onions" },
  { name: "Avocado", category: "Fruits", imageId: "prod-onions" },
  { name: "Papaya", category: "Fruits", imageId: "prod-onions" },
  { name: "Ground Beef", category: "Meat", imageId: "prod-lentils" },
  { name: "Chicken", category: "Meat", imageId: "prod-lentils" },
  { name: "Goat Meat", category: "Meat", imageId: "prod-lentils" },
  { name: "Lamb", category: "Meat", imageId: "prod-lentils" },
  { name: "Fish (Tilapia)", category: "Meat", imageId: "prod-lentils" },
  { name: "Shampoo", category: "Toiletries", imageId: "prod-oil" },
  { name: "Soap", category: "Toiletries", imageId: "prod-oil" },
  { name: "Toothpaste", category: "Toiletries", imageId: "prod-oil" },
  { name: "Laundry Detergent", category: "Household", imageId: "prod-oil" },
  { name: "Dish Soap", category: "Household", imageId: "prod-oil" },
  { name: "Bleach", category: "Household", imageId: "prod-oil" },
  { name: "Bottled Water", category: "Beverages", imageId: "prod-oil" },
  { name: "Soft Drinks", category: "Beverages", imageId: "prod-oil" },
  { name: "Juice", category: "Beverages", imageId: "prod-oil" },
  { name: "Tea Bags", category: "Beverages", imageId: "prod-coffee" },
  { name: "Biscuits", category: "Snacks", imageId: "prod-bread" },
  { name: "Chips", category: "Snacks", imageId: "prod-onions" },
  { name: "Kolo (Roasted Grains)", category: "Snacks", imageId: "prod-teff" }
];

const streetSuffixes = ["St", "Rd", "Ave", "Ln", "Blvd", "Plaza", "Square"];
const addisAbabaAreas = [
    "Bole", "Piassa", "Merkato", "Kazanchis", "Saris", "Ayat", "CMC", "Gerji",
    "Megenagna", "Lideta", "Gotera", "Lafto", "Jemo", "Lebu", "Urael", "Riche"
];
const paymentOptions = ['Cash', 'Telebirr', 'CBE Birr', 'Credit Card', 'Amole'];

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSubset<T>(arr: T[], count: number): T[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function formatPhoneNumber(): string {
    const part1 = Math.floor(Math.random() * 900) + 100;
    const part2 = Math.floor(Math.random() * 1000000) + 100000;
    return `+251 9${part1} ${part2}`;
}

const usedShopNames = new Set<string>();

export function generateShops(): Shop[] {
  const shops: Shop[] = [];
  let shopId = 1;
  while (shops.length < 101 && shopId < 500) {
    const name = getRandomElement(shopNames);
    if(usedShopNames.has(name)) continue;
    usedShopNames.add(name);

    const shopImage = PlaceHolderImages[shopId % PlaceHolderImages.length];

    shops.push({
      id: String(shopId++),
      name: name,
      location: {
        lat: 8.9 + Math.random() * 0.2, // Simulate locations around Addis Ababa
        lng: 38.7 + Math.random() * 0.2,
      },
      address: `${Math.floor(Math.random() * 1000)} ${getRandomElement(addisAbabaAreas)} ${getRandomElement(streetSuffixes)}, Addis Ababa`,
      operatingHours: `Every day: ${Math.floor(Math.random() * 3) + 6} AM - ${Math.floor(Math.random() * 3) + 8} PM`,
      contact: formatPhoneNumber(),
      paymentOptions: getRandomSubset(paymentOptions, Math.floor(Math.random() * 3) + 1),
      imageUrl: shopImage.imageUrl,
      imageHint: shopImage.imageHint,
    });
  }
  return shops;
}

export function generateProducts(shops: Shop[]): Product[] {
  const products: Product[] = [];
  let productId = 101;
  shops.forEach(shop => {
    const numProducts = Math.floor(Math.random() * 50) + 101; // 101 to 150 products
    for (let i = 0; i < numProducts; i++) {
      const productTemplate = getRandomElement(productNames);
      const placeholderInfo = PlaceHolderImages.find(img => img.id === productTemplate.imageId);
      
      products.push({
        id: String(productId++),
        name: productTemplate.name,
        shopId: shop.id,
        price: Math.floor(Math.random() * 1000) + 10,
        inStock: Math.random() > 0.1, // 90% chance of being in stock
        category: productTemplate.category,
        imageUrl: placeholderInfo?.imageUrl || PlaceHolderImages[0].imageUrl,
        imageHint: placeholderInfo?.imageHint || PlaceHolderImages[0].imageHint,
      });
    }
  });
  return products;
}
