import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {

    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [profile, setProfile] = useState({
        name: "Thomas Dhlamini",
        email: "thomas.dhlamini@example.com",
        phone: "+263 77 123 4567",
        address: "123 Main Street, Harare",
    });


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
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Profile;