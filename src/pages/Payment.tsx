import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);

    const [selectedWallet, setSelectedWallet] = useState("");

    const [amount, setAmount] = useState("");
}

export default Payment;