import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Electricity = () => {
    const { toast } = useToast();

    const handlePurchase = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Electricity purchased",
            description: "Your electricity token has been generated",
        });
    };


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Buy Electricity</h1>

            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>ZESA Electricity</CardTitle>
                    <CardDescription>Purchase prepaid electricity tokens</CardDescription>
                </CardHeader>

                <CardContent></CardContent>
            </Card>
        </div>
    );
};

export default Electricity;