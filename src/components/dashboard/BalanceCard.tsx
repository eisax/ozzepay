
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleDollarSign, ArrowUpRight, ArrowDownRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WalletBalance {
  id: string;
  name: string;
  balance: number;
  color: string;
  change: number;
}

interface BalanceCardProps {
  totalBalance: number;
  wallets: WalletBalance[];
}

export function BalanceCard({ totalBalance, wallets }: BalanceCardProps) {
  const [showBalance, setShowBalance] = React.useState(true);

  return (
    <Card className="wallet-card overflow-visible">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">Total Balance</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setShowBalance(!showBalance)}
          >
            {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        </div>
        <CardDescription>Across all wallets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline">
            <div className="text-3xl font-bold">
              {showBalance ? `$${totalBalance.toFixed(2)}` : "$ •••••"}
            </div>
            <div className="ml-2 text-sm font-medium text-muted-foreground">
              USD
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {wallets.map((wallet) => (
              <Card
                key={wallet.id}
                className={`bg-gradient-to-br from-${wallet.color}-500/20 to-${wallet.color}-600/10 border border-${wallet.color}-500/30 hover:shadow-md transition-all duration-300 h-full`}
              >
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className={`wallet-chip-${wallet.id} text-xs px-2 py-1 rounded-full`}>
                      {wallet.name}
                    </div>
                    {wallet.change > 0 ? (
                      <ArrowUpRight
                        size={16}
                        className="text-wallet-eco"
                      />
                    ) : (
                      <ArrowDownRight
                        size={16}
                        className="text-wallet-zim"
                      />
                    )}
                  </div>
                  <div className="text-lg font-semibold">
                    {showBalance ? `$${wallet.balance.toFixed(2)}` : "$ •••••"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
