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
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Settings = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const hasMinLength = newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const passwordsMatch = newPassword === confirmPassword && newPassword !== "";

    const handleChangePassword = (e: React.FormEvent) => {
        e.preventDefault();

        if (!currentPassword || !newPassword || !confirmPassword) {
            toast({
                title: "Missing information",
                description: "Please fill in all password fields",
                variant: "destructive",
            });
            return;
        }

        if (newPassword !== confirmPassword) {
            toast({
                title: "Passwords don't match",
                description: "New password and confirmation must match",
                variant: "destructive",
            });
            return;
        }

        if (!(hasMinLength && hasUppercase && hasNumber && hasSpecialChar)) {
            toast({
                title: "Password too weak",
                description: "Please ensure your password meets all requirements",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Password changed successfully",
                description: "Your password has been updated",
            });

            // Reset form
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }, 1500);
    }


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
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Currency</div>
                                    <div className="text-sm text-muted-foreground">Change your preferred currency</div>
                                </div>
                                <Button variant="outline">USD $</Button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Language</div>
                                    <div className="text-sm text-muted-foreground">Change the display language</div>
                                </div>
                                <Button variant="outline">English</Button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Dark Mode</div>
                                    <div className="text-sm text-muted-foreground">Toggle dark mode on/off</div>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Change Password</CardTitle>
                            <CardDescription>Update your password to keep your account secure</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleChangePassword} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="currentPassword">Current Password</Label>

                                    <div className="relative">
                                        <Input
                                            id="currentPassword"
                                            type={showCurrentPassword ? "text" : "password"}
                                            placeholder="Enter your current password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                        />

                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        >
                                            {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="newPassword">New Password</Label>

                                    <div className="relative">
                                        <Input
                                            id="newPassword"
                                            type={showNewPassword ? "text" : "password"}
                                            placeholder="Enter your new password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />

                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm New Password</Label>

                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm your new password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />

                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </Button>
                                    </div>
                                </div>

                                <div className="bg-muted/50 p-3 rounded-md space-y-2 mt-2">
                                    <p className="text-sm font-medium">Password Requirements:</p>

                                    <ul className="space-y-1">
                                        <li className="text-xs flex items-center">
                                            {hasMinLength ? (
                                                <Check size={14} className="text-green-500 mr-1" />
                                            ) : (
                                                <X size={14} className="text-red-500 mr-1" />
                                            )}
                                            At least 8 characters long
                                        </li>
                                        <li className="text-xs flex items-center">
                                            {hasUppercase ? (
                                                <Check size={14} className="text-green-500 mr-1" />
                                            ) : (
                                                <X size={14} className="text-red-500 mr-1" />
                                            )}
                                            At least one uppercase letter
                                        </li>
                                        <li className="text-xs flex items-center">
                                            {hasNumber ? (
                                                <Check size={14} className="text-green-500 mr-1" />
                                            ) : (
                                                <X size={14} className="text-red-500 mr-1" />
                                            )}
                                            At least one number
                                        </li>
                                        <li className="text-xs flex items-center">
                                            {hasSpecialChar ? (
                                                <Check size={14} className="text-green-500 mr-1" />
                                            ) : (
                                                <X size={14} className="text-red-500 mr-1" />
                                            )}
                                            At least one special character
                                        </li>
                                        <li className="text-xs flex items-center mt-2">
                                            {passwordsMatch ? (
                                                <Check size={14} className="text-green-500 mr-1" />
                                            ) : (
                                                <X size={14} className="text-red-500 mr-1" />
                                            )}
                                            Passwords match
                                        </li>
                                    </ul>
                                </div>
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? "Updating..." : "Change Password"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Two-Factor Authentication</CardTitle>
                            <CardDescription>Add an extra layer of security to your account</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Enable 2FA</div>
                                    <div className="text-sm text-muted-foreground">Secure your account with two-factor authentication</div>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Login Sessions</CardTitle>
                            <CardDescription>Manage your active sessions and devices</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Chrome on Windows</div>
                                        <div className="text-sm text-muted-foreground">Harare, Zimbabwe • Current session</div>
                                    </div>
                                    <Button variant="outline" size="sm">Current</Button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Safari on iPhone</div>
                                        <div className="text-sm text-muted-foreground">Bulawayo, Zimbabwe • 2 days ago</div>
                                    </div>
                                    <Button variant="outline" size="sm">Revoke</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Choose what notifications you receive</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Push Notifications</div>
                                    <div className="text-sm text-muted-foreground">Receive notifications on your device</div>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Email Notifications</div>
                                    <div className="text-sm text-muted-foreground">Receive notifications via email</div>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">SMS Notifications</div>
                                    <div className="text-sm text-muted-foreground">Receive notifications via SMS</div>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Types</CardTitle>
                            <CardDescription>Choose what types of notifications you receive</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Transaction Alerts</div>
                                    <div className="text-sm text-muted-foreground">Get notified about all transactions</div>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Deposit Notifications</div>
                                    <div className="text-sm text-muted-foreground">Get notified when you receive money</div>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Low Balance Alerts</div>
                                    <div className="text-sm text-muted-foreground">Get notified when your balance is low</div>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Marketing Updates</div>
                                    <div className="text-sm text-muted-foreground">Receive promotional offers and updates</div>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="payment" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Connected Wallets</CardTitle>
                            <CardDescription>Manage your connected wallet accounts</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3"></div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
export default Settings;