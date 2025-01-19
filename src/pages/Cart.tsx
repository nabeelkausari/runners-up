import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { Minus, Plus, Trash2, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { PaymentDialog } from '@/components/PaymentDialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AddressFormData {
  name: string;
  phone: string;
  address: string;
  instructions: string;
}

const Cart = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    total, 
    deliveryAddress, 
    saveDeliveryAddress,
    applyCoupon,
    removeCoupon,
    appliedCoupon,
    couponDiscount
  } = useCart();
  
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [addressForm, setAddressForm] = useState<AddressFormData>({
    name: deliveryAddress?.name || '',
    phone: deliveryAddress?.phone || '',
    address: deliveryAddress?.address || '',
    instructions: deliveryAddress?.instructions || '',
  });

  useEffect(() => {
    if (deliveryAddress) {
      setAddressForm({
        name: deliveryAddress.name,
        phone: deliveryAddress.phone,
        address: deliveryAddress.address,
        instructions: deliveryAddress.instructions || '',
      });
    }
  }, [deliveryAddress]);

  const deliveryFee = 100;
  const grandTotal = Number(total) + deliveryFee - couponDiscount;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveAddress = () => {
    saveDeliveryAddress(addressForm);
    setIsDialogOpen(false);
  };

  const handleApplyCoupon = () => {
    if (promoCode.trim()) {
      const success = applyCoupon(promoCode.trim());
      if (success) {
        setPromoCode('');
      }
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
              <Button onClick={() => navigate('/marketplace')}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-8">Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Delivery Order</h2>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 py-4 border-b last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-semibold">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
                {deliveryAddress ? (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Home className="h-4 w-4" />
                      <span className="font-semibold">Home</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {deliveryAddress.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {deliveryAddress.phone}
                    </p>
                    <p className="text-sm text-gray-600">
                      {deliveryAddress.address}
                    </p>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="mt-2" size="sm" onClick={() => setIsDialogOpen(true)}>
                          Edit Address
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Delivery Address</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={addressForm.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={addressForm.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                            />
                          </div>
                          <div>
                            <Label htmlFor="address">Address</Label>
                            <Textarea
                              id="address"
                              name="address"
                              value={addressForm.address}
                              onChange={handleInputChange}
                              placeholder="Enter your delivery address"
                            />
                          </div>
                          <div>
                            <Label htmlFor="instructions">
                              Delivery Instructions (Optional)
                            </Label>
                            <Textarea
                              id="instructions"
                              name="instructions"
                              value={addressForm.instructions}
                              onChange={handleInputChange}
                              placeholder="Add any special instructions..."
                            />
                          </div>
                          <Button
                            className="w-full"
                            onClick={handleSaveAddress}
                          >
                            Save Address
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : (
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button onClick={() => setIsDialogOpen(true)}>Add Delivery Address</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Delivery Address</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={addressForm.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={addressForm.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Textarea
                            id="address"
                            name="address"
                            value={addressForm.address}
                            onChange={handleInputChange}
                            placeholder="Enter your delivery address"
                          />
                        </div>
                        <div>
                          <Label htmlFor="instructions">
                            Delivery Instructions (Optional)
                          </Label>
                          <Textarea
                            id="instructions"
                            name="instructions"
                            value={addressForm.instructions}
                            onChange={handleInputChange}
                            placeholder="Add any special instructions..."
                          />
                        </div>
                        <Button
                          className="w-full"
                          onClick={handleSaveAddress}
                        >
                          Save Address
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Item Total</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery fees</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <div className="flex items-center gap-2">
                        <span>Promo Discount</span>
                        <button
                          onClick={removeCoupon}
                          className="text-xs text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                      <span>-₹{couponDiscount}</span>
                    </div>
                  )}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between font-semibold">
                      <span>Grand Total</span>
                      <span>₹{grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">Available offers</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleApplyCoupon();
                      }
                    }}
                  />
                  <Button 
                    variant="outline"
                    onClick={handleApplyCoupon}
                    disabled={!promoCode.trim()}
                  >
                    Apply
                  </Button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 text-sm text-green-600">
                    {appliedCoupon} - Saved ₹{couponDiscount}
                  </div>
                )}
              </div>

              <Button
                className="w-full"
                size="lg"
                disabled={!deliveryAddress}
                onClick={() => setIsPaymentDialogOpen(true)}
              >
                Pay Now
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span>Secured</span>
                <div className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>Verified Merchant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <PaymentDialog 
        open={isPaymentDialogOpen}
        onOpenChange={setIsPaymentDialogOpen}
        amount={grandTotal}
      />
    </div>
  );
};

export default Cart;
