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

      const handlePayment = (e: React.FormEvent) => {}
}

export default Payment;