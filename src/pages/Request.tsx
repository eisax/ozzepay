import { useToast } from "@/hooks/use-toast";

const Request = () => {

    const { toast } = useToast();
    const [linkCopied, setLinkCopied] = useState(false);

    const handleRequest = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Request sent",
            description: "Your payment request has been sent successfully",
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Request Money</h1>
        </div>
    );
}


export default Request;