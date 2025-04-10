
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TransactionList } from "@/components/dashboard/TransactionList";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpDown, Download } from "lucide-react";

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [walletFilter, setWalletFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  
  // Mock data - would be expanded in a real app
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
    {
      id: "tx6",
      title: "Internet Bundle",
      description: "Monthly subscription",
      amount: 35.00,
      type: "outgoing" as const,
      category: "internet" as const,
      date: "Apr 14, 3:45 PM",
      wallet: "eco" as const,
    },
    {
      id: "tx7",
      title: "Received from Lisa",
      description: "Loan repayment",
      amount: 200.00,
      type: "incoming" as const,
      category: "transfer" as const,
      date: "Apr 12, 11:30 AM",
      wallet: "zim" as const,
    },
    {
      id: "tx8",
      title: "Coffee Shop",
      description: "Breakfast meeting",
      amount: 12.50,
      type: "outgoing" as const,
      category: "food" as const,
      date: "Apr 10, 9:15 AM",
      wallet: "inn" as const,
    },
    {
      id: "tx9",
      title: "Pharmacy",
      description: "Medicine purchase",
      amount: 28.75,
      type: "outgoing" as const,
      category: "shopping" as const,
      date: "Apr 8, 5:20 PM",
      wallet: "one" as const,
    },
    {
      id: "tx10",
      title: "Received from Work",
      description: "Monthly salary",
      amount: 850.00,
      type: "incoming" as const,
      category: "transfer" as const,
      date: "Apr 1, 10:00 AM",
      wallet: "omari" as const,
    },
  ];

  // Filter transactions based on search, wallet, and date
  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = 
      tx.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tx.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesWallet = walletFilter === "all" || tx.wallet === walletFilter;
    
    // Simple date filter implementation
    const matchesDate = dateFilter === "all" || 
      (dateFilter === "today" && tx.date.includes("Today")) ||
      (dateFilter === "yesterday" && tx.date.includes("Yesterday")) ||
      (dateFilter === "week" && !tx.date.includes("Today") && !tx.date.includes("Yesterday"));
    
    return matchesSearch && matchesWallet && matchesDate;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button variant="outline">
          <Download size={18} className="mr-2" />
          Export
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">Transaction History</CardTitle>
          <CardDescription>View and filter your transaction history</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={walletFilter} onValueChange={setWalletFilter}>
                <SelectTrigger className="w-[160px]">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Wallet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Wallets</SelectItem>
                  <SelectItem value="eco">Ecocash</SelectItem>
                  <SelectItem value="inn">Innbucks</SelectItem>
                  <SelectItem value="one">OneMoney</SelectItem>
                  <SelectItem value="omari">Omari</SelectItem>
                  <SelectItem value="zim">Zimswitch</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-[160px]">
                  <ArrowUpDown size={16} className="mr-2" />
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="incoming">Incoming</TabsTrigger>
              <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <TransactionList transactions={filteredTransactions} />
              {filteredTransactions.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No transactions found matching your filters
                </div>
              )}
            </TabsContent>
            <TabsContent value="incoming">
              <TransactionList 
                transactions={filteredTransactions.filter(tx => tx.type === "incoming")} 
              />
              {filteredTransactions.filter(tx => tx.type === "incoming").length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No incoming transactions found matching your filters
                </div>
              )}
            </TabsContent>
            <TabsContent value="outgoing">
              <TransactionList 
                transactions={filteredTransactions.filter(tx => tx.type === "outgoing")} 
              />
              {filteredTransactions.filter(tx => tx.type === "outgoing").length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No outgoing transactions found matching your filters
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
