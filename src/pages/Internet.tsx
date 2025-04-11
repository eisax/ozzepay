import { useToast } from "@/hooks/use-toast";

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
        </div>
    );
}

export default Internet;