
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Clock,
  Send,
  CreditCard,
  BarChart3,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { logout } = useAuth();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Clock, label: "Transactions", path: "/transactions" },
    { icon: Send, label: "Send Money", path: "/send" },
    { icon: CreditCard, label: "Payment", path: "/payment" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={`bg-sidebar h-screen flex flex-col border-r border-border transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
            <h1 className="text-xl font-bold">OzzePay</h1>
          </div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
        )}
        {!isCollapsed && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsCollapsed(true)}
            className="h-8 w-8 p-0"
          >
            &lt;
          </Button>
        )}
        {isCollapsed && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsCollapsed(false)}
            className="h-8 w-8 p-0 mx-auto mt-4"
          >
            &gt;
          </Button>
        )}
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            } ${isCollapsed ? "justify-center" : "justify-start space-x-3"}`}
          >
            <item.icon size={isCollapsed ? 24 : 18} />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <Button 
          variant="ghost" 
          className={`w-full ${isCollapsed ? "p-2 justify-center" : "px-3 py-2 justify-start"} text-destructive hover:text-destructive hover:bg-destructive/10`}
          onClick={logout}
        >
          <LogOut size={isCollapsed ? 24 : 18} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </aside>
  );
}
