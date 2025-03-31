
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Fingerprint, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function LoginScreen() {
    const { toast } = useToast();
    const { login, register } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Login form state
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // Register form state
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPhone, setRegisterPhone] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // Get return path from location state or default to dashboard
    const from = (location.state as any)?.from?.pathname || "/";

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const success = await login(loginEmail, loginPassword);

            if (success) {
                toast({
                    title: "Login successful",
                    description: "Welcome back to WalletWave!",
                });

                // Navigate to the return path or dashboard
                navigate(from, { replace: true });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const success = await register(registerName, registerEmail, registerPassword);

            if (success) {
                toast({
                    title: "Registration successful",
                    description: "Welcome to OzzePay!",
                });

                // Navigate to the dashboard
                navigate("/", { replace: true });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleBiometricLogin = async () => {
        setIsLoading(true);

        try {
            // For demo, simulate successful biometric auth
            const success = await login("demo@example.com", "password123");

            if (success) {
                toast({
                    title: "Biometric authentication successful",
                    description: "Welcome back to WalletWave!",
                });

                // Navigate to the return path or dashboard
                navigate(from, { replace: true });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-4">
            <div className="w-full max-w-md space-y-8 relative">
                <div className="text-center space-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">W</span>
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

                        <TabsContent value="login">
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email or Phone Number</Label>
                                    <Input
                                        id="email"
                                        placeholder="Enter your email or phone"
                                        required
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            required
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                                        Forgot password?
                                    </Link>
                                    <Button type="button" variant="outline" onClick={handleBiometricLogin} disabled={isLoading}>
                                        <Fingerprint size={18} className="mr-2" />
                                        Biometric
                                    </Button>
                                </div>

                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? "Authenticating..." : "Login"}
                                </Button>
                            </form>
                        </TabsContent>

                        <TabsContent value="register">
                            <form onSubmit={handleRegister} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="register-name">Full Name</Label>
                                    <Input
                                        id="register-name"
                                        placeholder="Enter your full name"
                                        required
                                        value={registerName}
                                        onChange={(e) => setRegisterName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="register-email">Email</Label>
                                    <Input
                                        id="register-email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={registerEmail}
                                        onChange={(e) => setRegisterEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="register-phone">Phone Number</Label>
                                    <Input
                                        id="register-phone"
                                        placeholder="Enter your phone number"
                                        value={registerPhone}
                                        onChange={(e) => setRegisterPhone(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="register-password">Create Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="register-password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a strong password"
                                            required
                                            value={registerPassword}
                                            onChange={(e) => setRegisterPassword(e.target.value)}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </Button>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? "Creating Account..." : "Create Account"}
                                </Button>
                            </form>
                        </TabsContent>
                    </Tabs>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-4">
                    By using WalletWave, you agree to our{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    );
}
