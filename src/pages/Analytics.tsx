import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
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

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Top Category</CardTitle>
                        <CardDescription>
                            Most spent category
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold text-primary">
                            {categoryData.sort((a, b) => b.value - a.value)[0].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {formatCurrency(categoryData.sort((a, b) => b.value - a.value)[0].value)}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="col-span-1 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Spending Overview</CardTitle>
                        <CardDescription>
                            {period === "week"
                                ? "Your daily spending for this week"
                                : period === "month"
                                    ? "Your weekly spending for this month"
                                    : "Your monthly spending for this year"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={getSpendingData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis tickFormatter={(value) => `$${value}`} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend />
                                    <Bar dataKey="amount" name="Spending" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Spending by Category</CardTitle>
                        <CardDescription>How your money is spent across categories</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Tabs defaultValue="chart">
                            <TabsList className="mb-4">
                                <TabsTrigger value="chart">Chart</TabsTrigger>
                                <TabsTrigger value="list">List</TabsTrigger>
                            </TabsList>

                            <TabsContent value="chart">
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={categoryData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                                nameKey="name"
                                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                            >
                                                {categoryData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </TabsContent>

                            <TabsContent value="list">
                                <div className="space-y-2">
                                    {categoryData.sort((a, b) => b.value - a.value).map((category) => (
                                        <div key={category.name} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                                                <span>{category.name}</span>
                                            </div>
                                            <span className="font-medium">{formatCurrency(category.value)}</span>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Wallet Distribution</CardTitle>
                        <CardDescription>How your money is distributed across wallets</CardDescription>
                    </CardHeader>

                    <CardContent></CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Analytics;