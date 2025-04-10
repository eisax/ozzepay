import { useToast } from "@/hooks/use-toast";

const Receive = () => {
    const { toast } = useToast();

    const copyToClipboard = () => {
        navigator.clipboard.writeText("wallet-id-12345");
        toast({
            title: "Wallet ID copied!",
            description: "You can now share this with the sender",
        });
    };

    return (
        <div className="space-y-6"></div>
    );
}

export default Receive;