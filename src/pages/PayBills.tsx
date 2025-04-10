import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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

            <Card className="max-w-3xl mx-auto"></Card>
        </div>
    );
}
export default PayBills;