
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Phone, User, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Send = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock contacts data
  const contacts = [
    { id: "c1", name: "John Doe", phone: "+263 77 123 4567", avatar: "", initial: "JD" },
    { id: "c2", name: "Sarah Smith", phone: "+263 78 234 5678", avatar: "", initial: "SS" },
    { id: "c3", name: "Michael Johnson", phone: "+263 77 345 6789", avatar: "", initial: "MJ" },
    { id: "c4", name: "Jessica Williams", phone: "+263 78 456 7890", avatar: "", initial: "JW" },
    { id: "c5", name: "David Brown", phone: "+263 77 567 8901", avatar: "", initial: "DB" },
  ];

  // Filter contacts by search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery)
  );

  // Mock wallets data
  const wallets = [
    { id: "eco", name: "Ecocash", balance: 245.75 },
    { id: "inn", name: "Innbucks", balance: 150.20 },
    { id: "one", name: "OneMoney", balance: 85.50 },
    { id: "omari", name: "Omari", balance: 120.30 },
    { id: "zim", name: "Zimswitch", balance: 200.00 },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !selectedWallet) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }
    
    const wallet = wallets.find((w) => w.id === selectedWallet);
    if (!wallet || amountNum > wallet.balance) {
      toast({
        title: "Insufficient funds",
        description: `You don't have enough funds in your ${wallet?.name || "selected"} wallet`,
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Money sent!",
        description: `$${amountNum.toFixed(2)} has been sent successfully`,
      });
      
      // Reset form
      setAmount("");
      setSelectedWallet("");
    }, 1500);
  };

  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Send Money</h1>
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Transfer Funds</CardTitle>
          <CardDescription>Send money to your contacts or any wallet</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="contact">
                <User size={16} className="mr-2" />
                Contact
              </TabsTrigger>
              <TabsTrigger value="phone">
                <Phone size={16} className="mr-2" />
                Phone Number
              </TabsTrigger>
              <TabsTrigger value="wallet">
                <DollarSign size={16} className="mr-2" />
                Wallet ID
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search contacts..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="h-60 overflow-y-auto border rounded-md">
                {filteredContacts.length > 0 ? (
                  <div className="divide-y">
                    {filteredContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 transition-colors ${
                          selectedContact === contact.id ? "bg-muted" : ""
                        }`}
                        onClick={() => setSelectedContact(contact.id)}
                      >
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.initial}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{contact.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {contact.phone}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    No contacts found
                  </div>
                )}
              </div>
              
              <form onSubmit={handleSend} className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="wallet">From Wallet</Label>
                    <Select
                      value={selectedWallet}
                      onValueChange={setSelectedWallet}
                    >
                      <SelectTrigger id="wallet">
                        <SelectValue placeholder="Select wallet" />
                      </SelectTrigger>
                      <SelectContent>
                        {wallets.map((wallet) => (
                          <SelectItem key={wallet.id} value={wallet.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>{wallet.name}</span>
                              <span className="text-muted-foreground text-sm">
                                ${wallet.balance.toFixed(2)}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (USD)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input
                        id="amount"
                        type="number"
                        className="pl-7"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="note">Note (Optional)</Label>
                  <Textarea
                    id="note"
                    placeholder="Add a message to the recipient"
                    className="resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading || !selectedContact}>
                  {isLoading ? "Processing..." : "Send Money"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="phone">
              <form onSubmit={handleSend} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Recipient Phone Number</Label>
                  <Input id="phone" placeholder="+263 7X XXX XXXX" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="wallet-phone">From Wallet</Label>
                    <Select
                      value={selectedWallet}
                      onValueChange={setSelectedWallet}
                    >
                      <SelectTrigger id="wallet-phone">
                        <SelectValue placeholder="Select wallet" />
                      </SelectTrigger>
                      <SelectContent>
                        {wallets.map((wallet) => (
                          <SelectItem key={wallet.id} value={wallet.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>{wallet.name}</span>
                              <span className="text-muted-foreground text-sm">
                                ${wallet.balance.toFixed(2)}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="amount-phone">Amount (USD)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input
                        id="amount-phone"
                        type="number"
                        className="pl-7"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="note-phone">Note (Optional)</Label>
                  <Textarea
                    id="note-phone"
                    placeholder="Add a message to the recipient"
                    className="resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Send Money"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="wallet">
              <form onSubmit={handleSend} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="wallet-id">Recipient Wallet ID</Label>
                  <Input id="wallet-id" placeholder="Enter wallet ID or address" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="wallet-wallet">From Wallet</Label>
                    <Select
                      value={selectedWallet}
                      onValueChange={setSelectedWallet}
                    >
                      <SelectTrigger id="wallet-wallet">
                        <SelectValue placeholder="Select wallet" />
                      </SelectTrigger>
                      <SelectContent>
                        {wallets.map((wallet) => (
                          <SelectItem key={wallet.id} value={wallet.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>{wallet.name}</span>
                              <span className="text-muted-foreground text-sm">
                                ${wallet.balance.toFixed(2)}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="amount-wallet">Amount (USD)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input
                        id="amount-wallet"
                        type="number"
                        className="pl-7"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="note-wallet">Note (Optional)</Label>
                  <Textarea
                    id="note-wallet"
                    placeholder="Add a message to the recipient"
                    className="resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Send Money"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-sm text-muted-foreground">
            Transfers between different wallets may incur fees. See our <a href="#" className="text-primary hover:underline">fee schedule</a> for details.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Send;
