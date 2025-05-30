import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

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

                <CardContent>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                            <Smartphone className="h-6 w-6 text-green-500" />
                            <span>Econet</span>
                        </Button>

                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                            <Smartphone className="h-6 w-6 text-red-500" />
                            <span>NetOne</span>
                        </Button>

                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                            <Smartphone className="h-6 w-6 text-blue-500" />
                            <span>Telecel</span>
                        </Button>
                    </div>

                    <form onSubmit={handlePurchase} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Enter phone number" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="type">Purchase Type</Label>
                            <Select>
                                <SelectTrigger id="type">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="airtime">Airtime</SelectItem>
                                    <SelectItem value="data">Data Bundle</SelectItem>
                                    <SelectItem value="voice">Voice Bundle</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="amount">Amount (USD)</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                <Input id="amount" type="number" className="pl-7" placeholder="0.00" />
                            </div>
                        </div>

                        <Button type="submit" className="w-full">Purchase</Button>
                    </form>


                </CardContent>
            </Card>
        </div>
    );
}

export default Airtime;
