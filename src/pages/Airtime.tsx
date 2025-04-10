import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Airtime = () => {
    const { toast } = useToast();

    const handlePurchase = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Airtime purchased",
            description: "Your airtime has been successfully purchased",
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Buy Airtime</h1>

            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Mobile Airtime & Bundles</CardTitle>
                    <CardDescription>Purchase airtime or data bundles</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}

export default Airtime;
