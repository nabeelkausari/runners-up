// Define product types
export type ProductType = 'single' | 'couple' | 'family' | 'frame' | 'mug';

export interface ProductImage {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
  baseColor: string;
  type: ProductType;
  prices: {
    size: string;
    price: number;
  }[];
  rating: number;
  stock: number;
  materials: string[];
  currentPrice?: number;
  originalPrice?: number;
  isNew?: boolean;
  ratings?: number; // Alias for rating to match component expectations
}

// Helper function to get a random rating between 3.5 and 5
const getRandomRating = () => Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;

// Helper function to get a random stock value
const getRandomStock = () => Math.floor(Math.random() * 50) + 5;

// Helper function to get a random price around a base value
const getRandomPrice = (base: number) => Math.floor(base * (0.8 + Math.random() * 0.4));

// Get image URL based on type and index
const getImageUrl = (type: ProductType, index: number): string => {
  // Map of folder names to their corresponding types and max images
  const typeConfig = {
    single: { 
      folder: 'single', 
      max: 10, 
      getFileName: (num: number) => {
        if (num === 1) return 'single.webp';
        if (num === 3) return 'single3.jpg';
        if (num === 4) return 'single4.jpg';
        return `single${num}.webp`;
      }
    },
    couple: { 
      folder: 'couples', 
      max: 9, 
      getFileName: (num: number) => {
        if (num === 1) return 'coupleduo.webp';
        if (num === 3) return 'coupleduo03.jpg';
        if (num === 4) return 'coupleduo4.jpg';
        if (num === 5) return 'coupleduo5.jpg';
        if (num === 10) return 'coupleduo10.jpg';
        if (num === 9) return 'coupleduo9.jpeg';
        return `coupleduo${num}.webp`;
      }
    },
    family: { 
      folder: 'family', 
      max: 5, 
      getFileName: (num: number) => {
        if (num === 1) return 'family.webp';
        return `family${num}.webp`;
      }
    },
    frame: { 
      folder: 'frames', 
      max: 5,
      getFileName: (num: number) => {
        if (num === 2) return 'photoframes2.jpg';
        if (num === 3) return 'photoframes3.jpg';
        if (num === 4) return 'photoframes4.webp';
        if (num === 5) return 'photoframes5.webp';
        if (num === 6) return 'photoframes6.jpg';
        return 'photoframes2.jpg'; // Default fallback
      }
    },
    mug: { 
      folder: 'mugs', 
      max: 6, 
      getFileName: (num: number) => {
        if (num === 1) return 'mugs.webp';
        return `mug${num}.webp`;
      }
    }
  } as const;
  
  const config = typeConfig[type];
  let imageNumber = (index % config.max) + 1;
  
  // Special handling for specific cases
  if (type === 'couple' && imageNumber === 1) imageNumber = 2;
  if (type === 'frame' && imageNumber === 1) imageNumber = 2;
  
  // Generate the image path
  const fileName = config.getFileName(imageNumber);
  const imagePath = `/photos/${config.folder}/${fileName}`;
  
  console.log(`Generated image path for ${type} #${imageNumber}:`, imagePath);
  
  return imagePath;
};

// Base product data for all categories
interface BaseProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  baseColor: string;
  type: ProductType;
  stock: number;
  rating: number;
  materials: string[];
  prices: {
    size: string;
    price: number;
  }[];
}

// Base product data for all categories
const baseProducts: BaseProduct[] = [
  // ===== SINGLE MINIATURES =====
  {
    id: 1,
    title: 'Personalized 3D Figurine',
    image: '../data/Photos/single/single.webp',
    description: 'A stunning 3D-printed figurine capturing your likeness in exquisite detail. Perfect for display on any desk or shelf.',
    category: 'Single Figurine',
    baseColor: 'Black',
    type: 'single' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Premium Resin', 'Marble Base'],
    prices: [
      { size: '6-inch', price: getRandomPrice(1999) },
    ]
  },
  {
    id: 2,
    title: 'Personalized 3D Miniature – Half Bust Figurine',
    image: '../data/Photos/single/single2.webp',
    description: 'Highlight your personality with this 3D half-bust miniature. Created using high-resolution 3D printing and sustainable plastic, it offers fine craftsmanship and a refined finish. The round base adds a touch of elegance, making it ideal for desks, shelves, or as a thoughtful gift.',
    category: 'Bust',
    baseColor: 'Black',
    type: 'single' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Eco-friendly Resin', 'Wooden Base'],
    prices: [
      { size: 'Small', price: getRandomPrice(1799) },
      { size: 'Medium', price: getRandomPrice(2299) },
      { size: 'Large', price: getRandomPrice(2799) }
    ]
  },
  {
    id: 3,
    title: 'Personalized 3D Half Bust with Portrait – Legacy Edition',
    image: '../data/Photos/single/single3.webp',
    description: 'Celebrate a legacy with this exclusive half-bust miniature paired with a matching portrait. Made from eco-conscious materials and printed with cutting-edge 3D technology, each piece is detailed to perfection. A meaningful way to honor memories with timeless elegance.',
    category: 'Legacy Collection',
    baseColor: 'Black',
    type: 'single' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Premium Resin', 'Wooden Base', 'Glass Frame'],
    prices: [
      { size: 'Small', price: getRandomPrice(2999) },
      { size: 'Medium', price: getRandomPrice(3499) },
      { size: 'Large', price: getRandomPrice(3999) }
    ]
  },
  {
    id: 4,
    title: 'Personalized 3D Miniature – Half Bust Figurine',
    description: 'Capture a treasured moment with this meticulously designed 3D half-bust. Crafted from long-lasting, eco-friendly plastic and finished with lifelike details, it stands proudly on a smooth black base. A perfect memento for celebrating individuality or special occasions.',
    category: 'Bust',
    image: '../data/Photos/single/single4.webp',
    baseColor: 'Black',
    type: 'single' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Eco-friendly Plastic', 'Wooden Base'],
    prices: [
      { size: 'Small', price: getRandomPrice(1699) },
      { size: 'Medium', price: getRandomPrice(2199) },
      { size: 'Large', price: getRandomPrice(2699) }
    ]
  },
  {
    id: 5,
    title: 'Personalized 3D Half Bust with Portrait – Memory Set',
    description: 'Designed for remembrance, this 3D half-bust and portrait set is a heartfelt tribute to a loved one. Each piece is produced using sustainable materials and advanced 3D printing, ensuring a durable and detailed keepsake you\'ll cherish for years.',
    category: 'Memory Collection',
    image: '../data/Photos/single/single5.webp',
    baseColor: 'Black',
    type: 'single' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Premium Resin', 'Wooden Base', 'Glass Portrait'],
    prices: [
      { size: 'Small', price: getRandomPrice(3299) },
      { size: 'Medium', price: getRandomPrice(3799) },
      { size: 'Large', price: getRandomPrice(4299) }
    ]
  },
  {
    id: 6,
    title: 'Personalized 3D Miniature – Full Body Figurine',
    description: 'Bring your vision to life with this full-body 3D miniature. Crafted from eco-friendly plastic and printed with high-precision technology, it captures your full form in stunning detail. A bold black base completes this custom piece, ideal for personal or gifting purposes.',
    category: 'Figurine',
    image: '../data/Photos/single/single6.webp',
    baseColor: 'Black',
    type: 'single' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Eco-friendly Plastic', 'Wooden Base'],
    prices: [
      { size: 'Small', price: getRandomPrice(2099) },
      { size: 'Medium', price: getRandomPrice(2599) },
      { size: 'Large', price: getRandomPrice(3099) }
    ]
  },
  {
    id: 7,
    title: 'Personalized 3D Miniature – Full Body with Blue Base',
    description: 'Express your essence through this customized full-body 3D miniature, set on a vibrant blue base. Crafted from sustainable plastic and modeled with remarkable accuracy, it\'s a charming display piece that blends personality with high-quality design.',
    category: 'Figurine',
    image: '../data/Photos/single/single7.webp',
    baseColor: 'Blue',
    type: 'single' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Eco-friendly Plastic', 'Acrylic Base'],
    prices: [
      { size: 'Small', price: getRandomPrice(2299) },
      { size: 'Medium', price: getRandomPrice(2799) },
      { size: 'Large', price: getRandomPrice(3299) }
    ]
  },
  // ===== COUPLES MINIATURES =====
  {
    id: 8,
    title: 'Romantic Couple Miniature Set',
    description: 'Celebrate your love with this beautiful couple miniature set. Each piece is carefully crafted to capture the special bond between two people.',
    category: 'Couple Figurine',
    baseColor: 'Gold',
    image: '../data/Photos/couples/coupleduo.webp',
    type: 'couple' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Eco-friendly Resin', 'Wooden Base'],
    prices: [
      { size: '6-inch', price: getRandomPrice(3499) },
      { size: '8-inch', price: getRandomPrice(3999) },
      { size: '10-inch', price: getRandomPrice(4499) }
    ]
  },
  {
    id: 9,
    title: 'Wedding Couple Statue',
    description: 'Commemorate your special day with this elegant wedding couple statue. Perfect for anniversaries or as a wedding gift.',
    category: 'Couple Figurine',
    image: './photos/coupleduo2.webp',
    baseColor: 'Silver',
    type: 'couple' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Premium Resin', 'Glass Base'],
    prices: [
      { size: '6-inch', price: getRandomPrice(3799) },
      { size: '8-inch', price: getRandomPrice(4299) },
      { size: '10-inch', price: getRandomPrice(4799) }
    ]
  },
  // ===== FAMILY MINIATURES =====
  {
    id: 10,
    title: 'Family Portrait Miniature',
    description: 'Cherish your family memories with this beautiful family portrait miniature. Customized to include all your loved ones in one special piece.',
    category: 'Family Figurine',
    image: '../data/Photos/family/coupleduo.webp',
    baseColor: 'Brown',
    type: 'family' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Eco-friendly Plastic', 'Wooden Base'],
    prices: [
      { size: '6-inch', price: getRandomPrice(4999) },
      { size: '8-inch', price: getRandomPrice(5499) },
      { size: '10-inch', price: getRandomPrice(5999) }
    ]
  },
  {
    id: 11,
    title: 'Generations Family Set',
    description: 'A beautiful representation of your family across generations. Perfect for grandparents, parents, and children.',
    category: 'Family Figurine',
    image: '../data/Photos/family/coupleduo2.webp',
    baseColor: 'Black',
    type: 'family' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Premium Resin', 'Marble Base'],
    prices: [
      { size: '6-inch', price: getRandomPrice(5999) },
      { size: '8-inch', price: getRandomPrice(6499) },
      { size: '10-inch', price: getRandomPrice(6999) }
    ]
  },
  // ===== FRAME MINIATURES =====
  {
    id: 12,
    title: 'Elegant Photo Frame Miniature',
    description: 'Display your favorite memories in this elegant miniature photo frame. Perfect for desks, shelves, or as a thoughtful gift.',
    category: 'Frame',
    image: '../data/Photos/frames/photoframes2.jpg',
    baseColor: 'Gold',
    type: 'frame' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Premium Resin', 'Glass'],
    prices: [
      { size: '4x6-inch', price: getRandomPrice(2499) },
      { size: '5x7-inch', price: getRandomPrice(2999) },
      { size: '8x10-inch', price: getRandomPrice(3499) }
    ]
  },
  {
    id: 13,
    title: 'Vintage Style Frame Set',
    image: '../data/Photos/frames/photoframes3.jpg',
    description: 'A set of vintage-style frames perfect for displaying your favorite miniature photos. Each frame is hand-painted for a unique look.',
    category: 'Frame',
    baseColor: 'Silver',
    type: 'frame' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Wood', 'Glass'],
    prices: [
      { size: 'Set of 3', price: getRandomPrice(3999) },
      { size: 'Set of 5', price: getRandomPrice(5499) },
      { size: 'Set of 7', price: getRandomPrice(6999) }
    ]
  },
  // ===== MUGS =====
  {
    id: 14,
    title: 'Personalized Photo Mug',
    image: '../data/Photos/mugs/mugs2.webp',
    description: 'Start your day with a smile! This high-quality ceramic mug features your favorite photo printed in vibrant colors that won\'t fade.',
    category: 'Mug',
    baseColor: 'White',
    type: 'mug' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Ceramic', 'Dishwasher Safe'],
    prices: [
      { size: '11oz', price: getRandomPrice(1299) },
      { size: '15oz', price: getRandomPrice(1499) },
      { size: '20oz', price: getRandomPrice(1799) }
    ]
  },
  {
    id: 15,
    image: '../data/Photos/mugs/mugs3.webp',
    title: 'Magic Change Color Mug',
    description: 'A fun and unique mug that reveals your photo when filled with hot liquid. The perfect gift for any occasion!',
    category: 'Mug',
    baseColor: 'Black',
    type: 'mug' as const,
    stock: getRandomStock(),
    rating: getRandomRating(),
    materials: ['Ceramic', 'Heat Sensitive Coating'],
    prices: [
      { size: '11oz', price: getRandomPrice(1599) },
      { size: '15oz', price: getRandomPrice(1799) },
      { size: '20oz', price: getRandomPrice(2099) }
    ]
  }
];

// Get product images with additional properties
export const getProductImages = (): ProductImage[] => {
  return baseProducts.map((product, index) => ({
    ...product,
    url: getImageUrl(product.type, index),
    currentPrice: product.prices[0].price,
    originalPrice: Math.round(product.prices[0].price * 1.2), // 20% markup for original price
    isNew: Math.random() > 0.5, // Randomly mark as new
    ratings: product.rating // Alias for rating
  }));
};

// Function to get featured products (first 4 products)
export const getFeaturedProducts = () => {
  return getProductImages().slice(0, 4);
};

// Function to get products by category
export const getProductsByCategory = (category: string) => {
  return getProductImages().filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};
