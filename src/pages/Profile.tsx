import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Profile;