
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


const MOCK_USER: User = {
    id: "user-1",
    name: "John Doe",
    email: "john.doe@example.com",
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const storedUser = localStorage.getItem("walletwave_user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setIsLoading(false);
    }, []);


    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        return new Promise((resolve) => {
            setTimeout(() => {
                if (!email || !password) {
                    toast({
                        title: "Login failed",
                        description: "Please enter both email and password",
                        variant: "destructive",
                    });
                    setIsLoading(false);
                    resolve(false);
                    return;
                }

                const loggedInUser = { ...MOCK_USER, email };
                setUser(loggedInUser);

                localStorage.setItem("walletwave_user", JSON.stringify(loggedInUser));

                setIsLoading(false);
                resolve(true);
            }, 1000);
        });
    };

    const register = async (name: string, email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        return new Promise((resolve) => {
            setTimeout(() => {
                if (!name || !email || !password) {
                    toast({
                        title: "Registration failed",
                        description: "Please fill in all fields",
                        variant: "destructive",
                    });
                    setIsLoading(false);
                    resolve(false);
                    return;
                }

                // Set the new user
                const newUser = { ...MOCK_USER, name, email, id: "user-" + Date.now() };
                setUser(newUser);

                // Store in localStorage for persistence
                localStorage.setItem("walletwave_user", JSON.stringify(newUser));

                setIsLoading(false);
                resolve(true);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("walletwave_user");

        toast({
            title: "Logged out",
            description: "You have been successfully logged out",
        });
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: !!user,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};