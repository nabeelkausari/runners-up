import { Star, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
  id?: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
}

// Fallback image in case the main image fails to load
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
];

const ProductCard = ({ id = 1, name, price, image, rating, reviews }: ProductCardProps) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(image);
  const [errorCount, setErrorCount] = useState(0);

  const handleImageError = () => {
    if (errorCount < FALLBACK_IMAGES.length) {
      // Try the next fallback image
      setCurrentImage(FALLBACK_IMAGES[errorCount]);
      setErrorCount(prev => prev + 1);
    }
  };

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center relative">
        {currentImage ? (
          <img
            src={currentImage}
            alt={name}
            onError={handleImageError}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <ImageIcon className="w-12 h-12 text-gray-300" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-primary">{name}</h3>
        <p className="text-accent mt-1">{price}</p>
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-[#ffd700] text-[#ffd700]" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-accent ml-2">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;