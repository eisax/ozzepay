import { useToast } from "@/hooks/use-toast";
import { Zap } from "lucide-react";
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

                <CardContent>
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                            <Zap className="h-8 w-8 text-amber-500" />
                        </div>
                    </div>

                    <form onSubmit={handlePurchase} className="space-y-4">
                    <div className="space-y-2"></div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Electricity;