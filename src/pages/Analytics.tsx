import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Analytics = () => {
    const [period, setPeriod] = useState("month");

    const weeklySpending = [
        { day: "Mon", amount: 35.50 },
        { day: "Tue", amount: 75.20 },
        { day: "Wed", amount: 45.75 },
        { day: "Thu", amount: 25.30 },
        { day: "Fri", amount: 65.80 },
        { day: "Sat", amount: 95.40 },
        { day: "Sun", amount: 55.10 },
    ];

    const monthlySpending = [
        { day: "Week 1", amount: 245.75 },
        { day: "Week 2", amount: 320.50 },
        { day: "Week 3", amount: 185.30 },
        { day: "Week 4", amount: 265.80 },
    ];

    const yearlySpending = [
        { day: "Jan", amount: 950.40 },
        { day: "Feb", amount: 875.30 },
        { day: "Mar", amount: 925.20 },
        { day: "Apr", amount: 1045.75 },
        { day: "May", amount: 895.60 },
        { day: "Jun", amount: 945.50 },
        { day: "Jul", amount: 1125.80 },
        { day: "Aug", amount: 1035.70 },
        { day: "Sep", amount: 985.90 },
        { day: "Oct", amount: 1075.25 },
        { day: "Nov", amount: 1150.15 },
        { day: "Dec", amount: 1250.45 },
    ];

    const categoryData = [
        { name: "Shopping", value: 205.35, color: "#3B82F6" },
        { name: "Utilities", value: 145.20, color: "#10B981" },
        { name: "Transfer", value: 270.00, color: "#8B5CF6" },
        { name: "Mobile", value: 45.00, color: "#F97316" },
        { name: "Food", value: 95.50, color: "#EC4899" },
    ];

    const walletData = [
        { name: "Ecocash", value: 245.75, color: "#10B981" },
        { name: "Innbucks", value: 150.20, color: "#8B5CF6" },
        { name: "OneMoney", value: 85.50, color: "#F97316" },
        { name: "Omari", value: 120.30, color: "#06B6D4" },
        { name: "Zimswitch", value: 200.00, color: "#EF4444" },
    ];

    const formatCurrency = (value: number) => {
        return `$${value.toFixed(2)}`;
    };

    const getSpendingData = () => {
        switch (period) {
            case "week":
                return weeklySpending;
            case "month":
                return monthlySpending;
            case "year":
                return yearlySpending;
            default:
                return monthlySpending;
        }
    };

    const totalSpending = getSpendingData().reduce((sum, item) => sum + item.amount, 0);

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-background p-2 border rounded-md shadow-sm">
                    <p className="font-medium">{`${label}`}</p>
                    <p className="text-primary">{`Amount: ${formatCurrency(payload[0].value)}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold">Analytics</h1>

                <Select value={period} onValueChange={setPeriod}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select period" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Total Spending</CardTitle>
                        <CardDescription>
                            {period === "week"
                                ? "This week"
                                : period === "month"
                                    ? "This month"
                                    : "This year"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold text-primary">
                            {formatCurrency(totalSpending)}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Average Daily</CardTitle>

                        <CardDescription>
                            Based on {period === "week" ? "7 days" : period === "month" ? "30 days" : "365 days"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold text-primary">
                            {formatCurrency(totalSpending / (period === "week" ? 7 : period === "month" ? 30 : 365))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Analytics;