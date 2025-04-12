import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
                            <Input id="recipient" placeholder="Enter phone or email" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="amount">Amount (USD)</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                <Input id="amount" type="number" className="pl-7" placeholder="0.00" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="reason">Reason for request</Label>
                            <Textarea id="reason" placeholder="What is this payment for?" />
                        </div>

                        <Button type="submit" className="w-full">Send Request</Button>
                    </form>

                    <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h3 className="font-medium text-sm mb-2">Payment Link</h3>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 border rounded p-2 bg-background text-xs overflow-hidden text-ellipsis">
                            https://walletwave.app/pay/req123456
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


export default Request;