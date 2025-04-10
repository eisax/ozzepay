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
}

export default Receive;