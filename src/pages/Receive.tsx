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
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Receive Money</h1>

            <Card className="max-w-md mx-auto"></Card>
        </div>
    );
}

export default Receive;