import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            </Card>
        </div>
    );
}
export default PayBills;