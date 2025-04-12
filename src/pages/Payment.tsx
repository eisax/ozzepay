import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    CreditCard,
    Smartphone,
    Zap,
    Wifi,
    Home,
    Globe,
    Tv,
} from "lucide-react";
import { Button } from "@/components/ui/button";
v

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

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Payments</h1>

            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Pay Bills & Services</CardTitle>
                    <CardDescription>Make quick payments to various service providers</CardDescription>
                </CardHeader>

                <CardContent>
                    <Tabs defaultValue="utilities" className="w-full">
                        <TabsList className="grid grid-cols-4 mb-6">
                            <TabsTrigger value="utilities">
                                <Zap size={16} className="mr-2" />
                                Utilities
                            </TabsTrigger>
                            <TabsTrigger value="mobile">
                                <Smartphone size={16} className="mr-2" />
                                Mobile
                            </TabsTrigger>
                            <TabsTrigger value="internet">
                                <Wifi size={16} className="mr-2" />
                                Internet
                            </TabsTrigger>
                            <TabsTrigger value="other">
                                <CreditCard size={16} className="mr-2" />
                                Other
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="utilities" className="space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                                    <Zap className="h-6 w-6 text-amber-500" />
                                    <span>ZESA Electricity</span>
                                </Button>

                                <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                                    <Home className="h-6 w-6 text-blue-500" />
                                    <span>City Council</span>
                                </Button>

                                <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                                    <Tv className="h-6 w-6 text-purple-500" />
                                    <span>DStv</span>
                                </Button>
                            </div>

                            <form onSubmit={handlePayment} className="space-y-4 pt-4 border-t">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="meter">Meter/Account Number</Label>
                                        <Input id="meter" placeholder="Enter meter or account number" />
                                    </div>
                                </div>
                            </form>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}

export default Payment;