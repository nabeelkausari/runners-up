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
}

type PaymentMethod = 'UPI' | 'CREDIT_CARD' | 'DEBIT_CARD';

export function PaymentDialog({ open, onOpenChange, amount }: PaymentDialogProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('UPI');
  const [qrGenerated, setQrGenerated] = useState(false);

  const handleGenerateCode = () => {
    setQrGenerated(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Select Payment Method</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <RadioGroup
              defaultValue="UPI"
              value={selectedMethod}
              onValueChange={(value) => {
                setSelectedMethod(value as PaymentMethod);
                setQrGenerated(false);
              }}
              className="space-y-4"
            >
              <div className={`p-4 rounded-lg border ${selectedMethod === 'UPI' ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="UPI" id="upi" />
                  <Label htmlFor="upi">UPI Payments</Label>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 bg-gray-100 rounded">Paytm</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">GPay</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">PhonePe</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  0% convenience fee
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${selectedMethod === 'CREDIT_CARD' ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="CREDIT_CARD" id="credit" />
                  <Label htmlFor="credit">Credit Card</Label>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 bg-gray-100 rounded">Mastercard</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">Visa</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  2.25% convenience fee
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${selectedMethod === 'DEBIT_CARD' ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="DEBIT_CARD" id="debit" />
                  <Label htmlFor="debit">Debit Card</Label>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 bg-gray-100 rounded">Mastercard</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">Visa</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  1% convenience fee
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-semibold mb-4">
                Pay ₹ {amount.toFixed(2)}
              </div>
              {selectedMethod === 'UPI' && (
                <>
                  {!qrGenerated ? (
                    <Button 
                      className="w-full"
                      onClick={handleGenerateCode}
                    >
                      Generate Code
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-white p-8 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                        <div className="text-gray-400 text-sm text-center">
                          [QR Code Placeholder]
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Scan this QR code with any of your UPI App and pay.
                      </div>
                      <div className="flex justify-center items-center gap-4 text-sm">
                        <span className="px-2 py-1 bg-gray-100 rounded">Paytm</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">GPay</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">PhonePe</span>
                      </div>
                    </div>
                  )}
                </>
              )}
              {selectedMethod === 'CREDIT_CARD' && (
                <div className="text-sm text-gray-600 bg-white p-4 rounded-lg">
                  Credit card payment form will be implemented here
                </div>
              )}
              {selectedMethod === 'DEBIT_CARD' && (
                <div className="text-sm text-gray-600 bg-white p-4 rounded-lg">
                  Debit card payment form will be implemented here
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
