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
        <div className="space-y-6"></div>
    );
}
export default PayBills;