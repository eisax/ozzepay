import { useToast } from "@/hooks/use-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                    <CardDescription>Share your details to receive money</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/50">
                        <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg mb-4">
                            <QrCode size={180} className="text-primary" />
                        </div>
                        <p className="text-sm text-center text-muted-foreground">
                            Scan this QR code to send money to this wallet
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-medium">Wallet ID</p>
                        <div className="flex items-center gap-2">
                            <div className="border rounded p-2 flex-1 bg-muted/30">
                                <code className="text-sm">wallet-id-12345</code>
                            </div>
                            <Button variant="outline" size="sm" onClick={copyToClipboard}>
                                Copy
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Receive;