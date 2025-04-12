import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);

    const [selectedWallet, setSelectedWallet] = useState("");

    const [amount, setAmount] = useState("");

    const wallets = [
        { id: "eco", name: "Ecocash", balance: 245.75 },
        { id: "inn", name: "Innbucks", balance: 150.20 },
        { id: "one", name: "OneMoney", balance: 85.50 },
        { id: "omari", name: "Omari", balance: 120.30 },
        { id: "zim", name: "Zimswitch", balance: 200.00 },
    ];

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();

        if (!amount || !selectedWallet) {
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

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Payment successful!",
                description: `$${amountNum.toFixed(2)} has been paid successfully`,
            });

            // Reset form
            setAmount("");
            setSelectedWallet("");
        }, 1500);
    }
}

export default Payment;