import { useToast } from "@/hooks/use-toast";

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
        </div>
    );
}

export default Airtime;
