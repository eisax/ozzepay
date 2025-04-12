import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt, Copy, Check } from "lucide-react";

const Request = () => {

    const { toast } = useToast();
    const [linkCopied, setLinkCopied] = useState(false);

    const handleRequest = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Request sent",
            description: "Your payment request has been sent successfully",
        });
    };

    const copyPaymentLink = () => {
        navigator.clipboard.writeText("https://ozzepay.ozzene.co.zw/pay/req123456");
        setLinkCopied(true);
        toast({
            title: "Link copied!",
            description: "Payment link copied to clipboard",
        });

        setTimeout(() => {
            setLinkCopied(false);
        }, 2000);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Request Money</h1>

            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Request Payment</CardTitle>
                    <CardDescription>Create a payment request to share with others</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                            <Receipt className="h-8 w-8 text-purple-500" />
                        </div>
                    </div>

                    <form onSubmit={handleRequest} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="recipient">Recipient's Phone or Email</Label>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}


export default Request;