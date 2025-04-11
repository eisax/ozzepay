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

    return ()
}

export default Internet;