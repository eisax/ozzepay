
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Send, 
  Download, 
  CreditCard, 
  Smartphone, 
  Wifi, 
  Zap, 
  Receipt 
} from "lucide-react";

interface ActionItem {
  icon: React.ElementType;
  label: string;
  color: string;
  path: string;
}

export function QuickActions() {
  const actions: ActionItem[] = [
    { 
      icon: Send, 
      label: "Send Money", 
      color: "from-blue-500 to-indigo-600", 
      path: "/send" 
    },
    { 
      icon: Download, 
      label: "Receive", 
      color: "from-green-500 to-emerald-600", 
      path: "/receive" 
    },
    { 
      icon: CreditCard, 
      label: "Pay Bills", 
      color: "from-orange-500 to-red-600", 
      path: "/pay-bills" 
    },
    { 
      icon: Smartphone, 
      label: "Airtime", 
      color: "from-purple-500 to-violet-600", 
      path: "/airtime" 
    },
    { 
      icon: Wifi, 
      label: "Internet", 
      color: "from-sky-500 to-blue-600", 
      path: "/internet" 
    },
    { 
      icon: Zap, 
      label: "Electricity", 
      color: "from-amber-500 to-yellow-600", 
      path: "/electricity" 
    },
    { 
      icon: Receipt, 
      label: "Request", 
      color: "from-pink-500 to-rose-600", 
      path: "/request" 
    },
  ];

  return (
    <Card className="wallet-card">
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
          {actions.map((action) => (
            <Link key={action.label} to={action.path} className="group">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}>
                  <action.icon size={24} />
                </div>
                <span className="text-xs md:text-sm font-medium text-center">{action.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
