
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface WalletOption {
  id: string;
  name: string;
  balance: number;
}

interface SendMoneyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  wallets: WalletOption[];
}

export function SendMoneyModal({ open, onOpenChange, wallets }: SendMoneyModalProps) {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = () => {
    if (!amount || !recipient || !selectedWallet) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    const wallet = wallets.find((w) => w.id === selectedWallet);
    if (!wallet || amountNum > wallet.balance) {
      toast({
        title: "Insufficient funds",
        description: `You don't have enough funds in your ${wallet?.name || "selected"} wallet`,
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Money sent!",
        description: `$${amountNum.toFixed(2)} has been sent to ${recipient}`,
      });
      onOpenChange(false);
      
      // Reset form
      setAmount("");
      setRecipient("");
      setSelectedWallet("");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] glass animate-scale-in">
        <DialogHeader>
          <DialogTitle>Send Money</DialogTitle>
          <DialogDescription>
            Send money securely to any recipient
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="recipient" className="text-right">
              To
            </Label>
            <Input
              id="recipient"
              placeholder="Phone number or wallet ID"
              className="col-span-3"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="wallet" className="text-right">
              From
            </Label>
            <Select
              value={selectedWallet}
              onValueChange={setSelectedWallet}
            >
              <SelectTrigger id="wallet" className="col-span-3">
                <SelectValue placeholder="Select wallet" />
              </SelectTrigger>
              <SelectContent>
                {wallets.map((wallet) => (
                  <SelectItem key={wallet.id} value={wallet.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{wallet.name}</span>
                      <span className="text-muted-foreground text-sm">
                        ${wallet.balance.toFixed(2)}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <div className="col-span-3 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                $
              </span>
              <Input
                id="amount"
                type="number"
                className="pl-7"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSend} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Send Money"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
