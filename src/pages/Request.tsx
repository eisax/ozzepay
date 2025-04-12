import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

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
        </div>
    );
}


export default Request;