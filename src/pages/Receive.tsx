import { useToast } from "@/hooks/use-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

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

            <Card className="max-w-md mx-auto">
            <CardHeader>
            <CardTitle>Receive Money</CardTitle>
            </CardHeader>
            </Card>
        </div>
    );
}

export default Receive;