import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    CreditCard,
    User,
    Shield,
    Bell,
    Settings,
    Check,
    Fingerprint,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {

    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [profile, setProfile] = useState({
        name: "Kudah Ndhlovu",
        email: "kudah.ndhlovu@ozzepay.com",
        phone: "+263 77 425 9097",
        address: "123 Main Street, Harare",
    });

    const handleSave = () => {
        setIsSaving(true);

        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setIsEditing(false);

            toast({
                title: "Profile updated",
                description: "Your profile information has been updated successfully",
            });
        }, 1000);
    };


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-semibold">Your Profile</CardTitle>
                        <CardDescription>Manage your personal information</CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center pt-6">
                        <Avatar className="h-28 w-28 mb-4">
                            <AvatarImage src="" alt="Profile picture" />
                            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">TD</AvatarFallback>
                        </Avatar>

                        <h2 className="text-xl font-semibold">{profile.name}</h2>
                        <p className="text-muted-foreground mb-6">{profile.email}</p>

                        <Button className="w-full mb-2" variant="outline" onClick={() => setIsEditing(true)}>
                            Edit Profile
                        </Button>

                        <Button className="w-full" variant="secondary">
                            Change Password
                        </Button>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-semibold">Account Information</CardTitle>
                        <CardDescription>View and update your account details</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-6">
                        <Tabs defaultValue="personal">
                            <TabsList className="mb-6">
                                <TabsTrigger value="personal">
                                    <User size={16} className="mr-2" />
                                    Personal
                                </TabsTrigger>

                                <TabsTrigger value="security">
                                    <Shield size={16} className="mr-2" />
                                    Security
                                </TabsTrigger>

                                <TabsTrigger value="notifications">
                                    <Bell size={16} className="mr-2" />
                                    Notifications
                                </TabsTrigger>

                                <TabsTrigger value="preferences">
                                    <Settings size={16} className="mr-2" />
                                    Preferences
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="personal">
                                {isEditing ? (
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input
                                                    id="name"
                                                    value={profile.name}
                                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={profile.email}
                                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    value={profile.phone}
                                                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="address">Address</Label>
                                                <Input
                                                    id="address"
                                                    value={profile.address}
                                                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-end space-x-2 pt-4">
                                            <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                                                Cancel
                                            </Button>
                                            <Button
                                                type="button"
                                                onClick={handleSave}
                                                disabled={isSaving}
                                            >
                                                {isSaving ? "Saving..." : "Save Changes"}
                                            </Button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="space-y-6">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                                            <div>
                                                <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                                                <p className="mt-1">{profile.name}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-muted-foreground">Email Address</h3>
                                                <p className="mt-1">{profile.email}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-muted-foreground">Phone Number</h3>
                                                <p className="mt-1">{profile.phone}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-muted-foreground">Address</h3>
                                                <p className="mt-1">{profile.address}</p>
                                            </div>
                                        </div>

                                        <div className="border-t pt-6">
                                            <h3 className="font-medium mb-4">Linked Wallets</h3>

                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-wallet-eco flex items-center justify-center text-white">
                                                            E
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Ecocash</p>
                                                            <p className="text-sm text-muted-foreground">Connected</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1 text-sm text-wallet-eco">
                                                        <Check size={16} />
                                                        <span>Verified</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-wallet-inn flex items-center justify-center text-white">
                                                            I
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Innbucks</p>
                                                            <p className="text-sm text-muted-foreground">Connected</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-wallet-eco">
                                                        <Check size={16} />
                                                        <span>Verified</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-wallet-inn flex items-center justify-center text-white">
                                                            I
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Innbucks</p>
                                                            <p className="text-sm text-muted-foreground">Connected</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-wallet-eco">
                                                        <Check size={16} />
                                                        <span>Verified</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-wallet-one flex items-center justify-center text-white">
                                                            O
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">OneMoney</p>
                                                            <p className="text-sm text-muted-foreground">Connected</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-wallet-eco">
                                                        <Check size={16} />
                                                        <span>Verified</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="security">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="font-medium">Two-Factor Authentication</h3>
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                                    <Fingerprint className="text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">Biometric Authentication</p>
                                                    <p className="text-sm text-muted-foreground">Use fingerprint or face recognition to login</p>
                                                </div>
                                            </div>
                                            <Switch />
                                        </div>

                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                                    <Shield className="text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">SMS Verification</p>
                                                    <p className="text-sm text-muted-foreground">Receive a code via SMS for sensitive actions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t">
                                        <h3 className="font-medium">Transaction Security</h3>

                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                                    <CreditCard className="text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">Require PIN for all transactions</p>
                                                    <p className="text-sm text-muted-foreground">Additional security for payments and transfers</p>
                                                </div>
                                            </div>
                                            <Switch defaultChecked />
                                        </div>
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <Button variant="outline">Change PIN</Button>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="notifications">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="font-medium">Push Notifications</h3>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="push-all">All transactions</Label>
                                                <Switch id="push-all" defaultChecked />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="push-deposits">Deposits only</Label>
                                                <Switch id="push-deposits" />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="push-large">Large transactions</Label>
                                                <Switch id="push-large" defaultChecked />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t">
                                        <h3 className="font-medium">Email Notifications</h3>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="email-summary">Weekly summary</Label>
                                                <Switch id="email-summary" defaultChecked />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="email-security">Security alerts</Label>
                                                <Switch id="email-security" defaultChecked />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="email-marketing">Marketing and promotions</Label>
                                                <Switch id="email-marketing" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="preferences">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="font-medium">Display Preferences</h3>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="dark-mode">Dark Mode</Label>
                                                <Switch id="dark-mode" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="hide-balances">Hide balances by default</Label>
                                                <Switch id="hide-balances" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t">
                                        <h3 className="font-medium">Default Wallet</h3>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                            <div className="rounded-lg border border-wallet-eco bg-wallet-eco/10 p-3 text-center hover:border-wallet-eco/70 cursor-pointer transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-wallet-eco mx-auto flex items-center justify-center text-white">
                                                    E
                                                </div>
                                                <p className="text-sm font-medium mt-1">Ecocash</p>
                                            </div>

                                            <div className="rounded-lg border p-3 text-center hover:border-wallet-inn/70 cursor-pointer transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-wallet-inn mx-auto flex items-center justify-center text-white">
                                                    I
                                                </div>
                                                <p className="text-sm font-medium mt-1">Innbucks</p>
                                            </div>

                                            <div className="rounded-lg border p-3 text-center hover:border-wallet-one/70 cursor-pointer transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-wallet-one mx-auto flex items-center justify-center text-white">
                                                    O
                                                </div>
                                                <p className="text-sm font-medium mt-1">OneMoney</p>
                                            </div>

                                            <div className="rounded-lg border p-3 text-center hover:border-wallet-omari/70 cursor-pointer transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-wallet-omari mx-auto flex items-center justify-center text-white">
                                                    O
                                                </div>
                                                <p className="text-sm font-medium mt-1">Omari</p>
                                            </div>

                                            <div className="rounded-lg border p-3 text-center hover:border-wallet-zim/70 cursor-pointer transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-wallet-zim mx-auto flex items-center justify-center text-white">
                                                    Z
                                                </div>
                                                <p className="text-sm font-medium mt-1">Zimswitch</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t">
                                        <h3 className="font-medium">Language and Currency</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                            <div className="space-y-2">
                                                <Label htmlFor="language">Language</Label>

                                                <select
                                                    id="language"
                                                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md"
                                                >
                                                    <option value="en">English</option>
                                                    <option value="sn">Shona</option>
                                                    <option value="nd">Ndebele</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="currency">Default Currency</Label>
                                                <select
                                                    id="currency"
                                                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md"
                                                >
                                                    <option value="usd">USD (US Dollar)</option>
                                                    <option value="zwl">ZWL (Zimbabwean Dollar)</option>
                                                    <option value="zar">ZAR (South African Rand)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Profile;