import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const LoginScreen = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-4">
            <div className="w-full max-w-md space-y-8 relative">
                <div className="text-center space-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">op</span>
                    </div>
                    <h1 className="text-3xl font-bold">OzzePay</h1>
                    <p className="text-muted-foreground">Consolidated Zimbabwean Wallet</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg animate-fade-in">
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;