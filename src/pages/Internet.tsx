import { useToast } from "@/hooks/use-toast";
import { Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
  } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Internet = () => {
    const { toast } = useToast();

    const handlePay = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Internet package purchased",
            description: "Your internet package has been successfully purchased",
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Internet Services</h1>

            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Internet & WiFi</CardTitle>
                    <CardDescription>Pay for your internet service</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                            <Wifi className="h-6 w-6 text-blue-500" />
                            <span>ZOL</span>
                        </Button>

                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                            <Wifi className="h-6 w-6 text-green-500" />
                            <span>TelOne</span>
                        </Button>

                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                            <Wifi className="h-6 w-6 text-orange-500" />
                            <span>Liquid</span>
                        </Button>
                    </div>

                    <form onSubmit={handlePay} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="account">Account Number</Label>
                            <Input id="account" placeholder="Enter account number" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="package">Internet Package</Label>

                            <Select>
                                <SelectTrigger id="package">
                                    <SelectValue placeholder="Select package" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="basic">Basic (10Mbps)</SelectItem>
                                    <SelectItem value="standard">Standard (30Mbps)</SelectItem>
                                    <SelectItem value="premium">Premium (100Mbps)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Internet;