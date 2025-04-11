import { useToast } from "@/hooks/use-toast";
import { Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
                        <div className="space-y-2">
                            <Label htmlFor="meter">Meter Number</Label>
                            <Input id="meter" placeholder="Enter meter number" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="amount">Amount (USD)</Label>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                <Input id="amount" type="number" className="pl-7" placeholder="0.00" />
                            </div>
                        </div>

                        <Button type="submit" className="w-full">Purchase Token</Button>
                    </form>

                    <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h3 className="font-medium text-sm mb-2">Recent Purchases</h3>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Electricity;