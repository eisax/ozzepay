import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            </Card>
        </div>
    );
}


export default Request;