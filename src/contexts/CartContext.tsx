import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface DeliveryAddress {
  name: string;
  phone: string;
  address: string;
  instructions?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: string;
  deliveryAddress: DeliveryAddress | null;
  saveDeliveryAddress: (address: DeliveryAddress) => void;
  clearDeliveryAddress: () => void;
  appliedCoupon: string | null;
  couponDiscount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const VALID_COUPONS = {
  'BC25': 222
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress | null>(() => {
    const savedAddress = localStorage.getItem('deliveryAddress');
    return savedAddress ? JSON.parse(savedAddress) : null;
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(() => {
    const savedCoupon = localStorage.getItem('appliedCoupon');
    return savedCoupon || null;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (deliveryAddress) {
      localStorage.setItem('deliveryAddress', JSON.stringify(deliveryAddress));
    } else {
      localStorage.removeItem('deliveryAddress');
    }
  }, [deliveryAddress]);

  useEffect(() => {
    if (appliedCoupon) {
      localStorage.setItem('appliedCoupon', appliedCoupon);
    } else {
      localStorage.removeItem('appliedCoupon');
    }
  }, [appliedCoupon]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast.success("Item quantity updated in cart");
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      toast.success("Item added to cart");
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('cart');
    toast.success("Cart cleared");
  };

  const saveDeliveryAddress = (address: DeliveryAddress) => {
    setDeliveryAddress(address);
    toast.success("Delivery address saved");
  };

  const clearDeliveryAddress = () => {
    setDeliveryAddress(null);
    toast.success("Delivery address cleared");
  };

  const applyCoupon = (code: string): boolean => {
    if (code in VALID_COUPONS) {
      setAppliedCoupon(code);
      toast.success(`Coupon ${code} applied successfully!`);
      return true;
    }
    toast.error("Invalid coupon code");
    return false;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    toast.success("Coupon removed");
  };

  const total = items
    .reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  const couponDiscount = appliedCoupon ? VALID_COUPONS[appliedCoupon as keyof typeof VALID_COUPONS] : 0;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        deliveryAddress,
        saveDeliveryAddress,
        clearDeliveryAddress,
        appliedCoupon,
        couponDiscount,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};