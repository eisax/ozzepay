import React, { useState } from "react";

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

    return (
        <div className="space-y-6"></div>
    );
}

export default Analytics;