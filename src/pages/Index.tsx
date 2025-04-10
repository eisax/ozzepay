
import React, { useState } from "react";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { TransactionList } from "@/components/dashboard/TransactionList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { SendMoneyModal } from "@/components/modals/SendMoneyModal";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const isMobile = useIsMobile();
  const [sendMoneyOpen, setSendMoneyOpen] = useState(false);

  // Mock data
  const wallets = [
    { id: "eco", name: "Ecocash", balance: 245.75, color: "green", change: 12.5 },
    { id: "inn", name: "Innbucks", balance: 150.20, color: "violet", change: -5.2 },
    { id: "one", name: "OneMoney", balance: 85.50, color: "orange", change: 3.7 },
    { id: "omari", name: "Omari", balance: 120.30, color: "cyan", change: -1.8 },
    { id: "zim", name: "Zimswitch", balance: 200.00, color: "red", change: 8.9 },
  ];

  const totalBalance = wallets.reduce((total, wallet) => total + wallet.balance, 0);

  const transactions = [
    {
      id: "tx1",
      title: "Econet Airtime",
      description: "Mobile recharge",
      amount: 5.00,
      type: "outgoing" as const,
      category: "mobile" as const,
      date: "Today, 2:34 PM",
      wallet: "eco" as const,
    },
    {
      id: "tx2",
      title: "Received from John",
      description: "Payment for design work",
      amount: 150.00,
      type: "incoming" as const,
      category: "transfer" as const,
      date: "Today, 10:15 AM",
      wallet: "inn" as const,
    },
    {
      id: "tx3",
      title: "ZESA Electricity",
      description: "Monthly utility payment",
      amount: 45.20,
      type: "outgoing" as const,
      category: "utility" as const,
      date: "Yesterday, 6:30 PM",
      wallet: "one" as const,
    },
    {
      id: "tx4",
      title: "OK Supermarket",
      description: "Grocery shopping",
      amount: 78.35,
      type: "outgoing" as const,
      category: "shopping" as const,
      date: "Yesterday, 1:45 PM",
      wallet: "zim" as const,
    },
    {
      id: "tx5",
      title: "Sent to Sarah",
      description: "Rent contribution",
      amount: 120.00,
      type: "outgoing" as const,
      category: "transfer" as const,
      date: "Apr 15, 9:20 AM",
      wallet: "omari" as const,
    },
  ];

  // Chart data
  const spendingData = [
    { date: "Apr 10", amount: 30 },
    { date: "Apr 11", amount: 45 },
    { date: "Apr 12", amount: 25 },
    { date: "Apr 13", amount: 60 },
    { date: "Apr 14", amount: 20 },
    { date: "Apr 15", amount: 45 },
    { date: "Apr 16", amount: 32 },
  ];

  const walletData = [
    { name: "Ecocash", value: 245.75, color: "#10B981" },
    { name: "Innbucks", value: 150.20, color: "#8B5CF6" },
    { name: "OneMoney", value: 85.50, color: "#F97316" },
    { name: "Omari", value: 120.30, color: "#06B6D4" },
    { name: "Zimswitch", value: 200.00, color: "#EF4444" },
  ];

  const categoryData = [
    { name: "Shopping", value: 205.35, color: "#3B82F6" },
    { name: "Utilities", value: 145.20, color: "#10B981" },
    { name: "Transfer", value: 270.00, color: "#8B5CF6" },
    { name: "Mobile", value: 45.00, color: "#F97316" },
    { name: "Food", value: 95.50, color: "#EC4899" },
  ];

  return (
    <div className="space-y-6">
      {isMobile && (
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions, contacts..."
            className="pl-10 bg-muted/50 border-none"
          />
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={() => setSendMoneyOpen(true)}>
          <Plus size={18} className="mr-2" />
          Send Money
        </Button>
      </div>

      <BalanceCard totalBalance={totalBalance} wallets={wallets} />
      
      <QuickActions />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart 
          spendingData={spendingData} 
          walletData={walletData} 
          categoryData={categoryData} 
        />
        <TransactionList transactions={transactions} limit={5} />
      </div>

      <SendMoneyModal 
        open={sendMoneyOpen} 
        onOpenChange={setSendMoneyOpen} 
        wallets={wallets}
      />
    </div>
  );
};

export default Index;
