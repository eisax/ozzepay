import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Home, Tv } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
  } from "@/components/ui/select";

const PayBills = () => {
    const { toast } = useToast();

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Payment initiated",
            description: "Your bill payment is being processed",
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Pay Bills</h1>

            <Card className="max-w-3xl mx-auto">

                <CardHeader>
                    <CardTitle>Pay Your Bills</CardTitle>
                    <CardDescription>Select a service provider and make your payment</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                            <Zap className="h-6 w-6 text-amber-500" />
                            <span>ZESA Electricity</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                            <Home className="h-6 w-6 text-blue-500" />
                            <span>City Council</span>
                        </Button>

                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                            <Tv className="h-6 w-6 text-purple-500" />
                            <span>DStv</span>
                        </Button>
                    </div>

                    <form onSubmit={handlePayment} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="meter">Meter/Account Number</Label>
                                <Input id="meter" placeholder="Enter meter or account number" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="provider">Service Provider</Label>
                                <Select>
                                    <SelectTrigger id="provider">
                                        <SelectValue placeholder="Select provider" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="zesa">ZESA Electricity</SelectItem>
                                        <SelectItem value="city">Harare City Council</SelectItem>
                                        <SelectItem value="dstv">DStv</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
export default PayBills;