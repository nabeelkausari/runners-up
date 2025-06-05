import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  onPlaceOrder: () => void;
}

type PaymentMethod = 'CASH_ON_DELIVERY';

export function PaymentDialog({ open, onOpenChange, amount, onPlaceOrder }: PaymentDialogProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('CASH_ON_DELIVERY');

  const handlePlaceOrderClick = () => {
    console.log('Placing order with Cash on Delivery...', amount);
    onPlaceOrder();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Select Payment Method</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <RadioGroup
            defaultValue="CASH_ON_DELIVERY"
            value={selectedMethod}
            onValueChange={(value) => {
              setSelectedMethod(value as PaymentMethod);
            }}
            className="space-y-2"
          >
            <div className={`p-4 rounded-lg border ${selectedMethod === 'CASH_ON_DELIVERY' ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="CASH_ON_DELIVERY" id="cash-on-delivery" />
                <Label htmlFor="cash-on-delivery">Cash on Delivery</Label>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Pay with cash upon delivery of your order.
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="mt-6">
          <Button 
            className="w-full"
            size="lg"
            onClick={handlePlaceOrderClick}
            disabled={selectedMethod !== 'CASH_ON_DELIVERY'}
          >
            Place Order (COD)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
