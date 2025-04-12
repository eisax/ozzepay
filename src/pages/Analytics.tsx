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

    return (
        <div className="space-y-6"></div>
    );
}

export default Analytics;