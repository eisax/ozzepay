import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default PayBills;