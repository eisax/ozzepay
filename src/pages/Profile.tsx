import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Profile = () => {
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
                    <Avatar className="h-28 w-28 mb-4"></Avatar>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Profile;