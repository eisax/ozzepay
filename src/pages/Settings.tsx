import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    CreditCard,
    Bell,
    Shield,
    User,
    Eye,
    EyeOff,
    Check,
    X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Settings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Settings</h1>

            <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="account">
                        <User size={16} className="mr-2" />
                        Account
                    </TabsTrigger>

                    <TabsTrigger value="security">
                        <Shield size={16} className="mr-2" />
                        Security
                    </TabsTrigger>

                    <TabsTrigger value="notifications">
                        <Bell size={16} className="mr-2" />
                        Notifications
                    </TabsTrigger>

                    <TabsTrigger value="payment">
                        <CreditCard size={16} className="mr-2" />
                        Payment Methods
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your personal details</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" defaultValue="John" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" placeholder="+263 77 123 4567" defaultValue="+263 77 123 4567" />
                            </div>

                            <Button>Save Changes</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Account Preferences</CardTitle>
                            <CardDescription>Manage your account settings</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between"></div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
export default Settings;