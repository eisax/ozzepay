
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  ShoppingBag,
  Smartphone,
  Wifi,
  Home,
  Coffee,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: "incoming" | "outgoing";
  category: "shopping" | "utility" | "food" | "transfer" | "mobile" | "internet" | "other";
  date: string;
  wallet: "eco" | "inn" | "one" | "omari" | "zim";
}

interface TransactionListProps {
  transactions: Transaction[];
  limit?: number;
}

const categoryIcons = {
  shopping: ShoppingBag,
  utility: Home,
  food: Coffee,
  transfer: DollarSign,
  mobile: Smartphone,
  internet: Wifi,
  other: CreditCard,
};

export function TransactionList({ transactions, limit }: TransactionListProps) {
  const displayTransactions = limit
    ? transactions.slice(0, limit)
    : transactions;

  return (
    <Card className="wallet-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Recent Transactions</CardTitle>
        <CardDescription>Your latest financial activities</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="divide-y divide-border">
          {displayTransactions.map((transaction) => {
            const Icon = categoryIcons[transaction.category];
            
            return (
              <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-10 w-10 rounded-full flex items-center justify-center",
                    transaction.type === "incoming" ? "bg-wallet-eco/10 text-wallet-eco" : "bg-wallet-zim/10 text-wallet-zim"
                  )}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.title}</p>
                    <p className="text-sm text-muted-foreground">{transaction.description}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    {transaction.type === "incoming" ? (
                      <ArrowUpRight size={16} className="text-wallet-eco mr-1" />
                    ) : (
                      <ArrowDownRight size={16} className="text-wallet-zim mr-1" />
                    )}
                    <span className={cn(
                      "font-semibold",
                      transaction.type === "incoming" ? "text-wallet-eco" : "text-wallet-zim"
                    )}>
                      {transaction.type === "incoming" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className={`wallet-chip-${transaction.wallet} w-2 h-2 rounded-full mr-1`}></div>
                    <span className="text-xs text-muted-foreground">{transaction.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
