import { useToast } from "@/hooks/use-toast";

const Request = () => {

    const { toast } = useToast();


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Request Money</h1>
        </div>
    );
}


export default Request;