import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

const Index = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: new Date(), amount: 100, type: "income", brand: "Nike" },
    { id: 2, date: new Date(), amount: 200, type: "expense", brand: "Adidas" },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    date: "",
    amount: "",
    type: "income",
    brand: "Nike",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const addTransaction = () => {
    setTransactions([
      ...transactions,
      { ...newTransaction, id: transactions.length + 1, date: new Date(newTransaction.date) },
    ]);
    setNewTransaction({ date: "", amount: "", type: "income", brand: "Nike" });
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <h1 className="text-3xl text-center">Sneaker Accounting App</h1>
        <p className="text-center">Track your sneaker transactions easily.</p>
      </div>
      <div className="flex justify-end mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Transaction</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Transaction</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={newTransaction.date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  type="number"
                  id="amount"
                  name="amount"
                  value={newTransaction.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select
                  value={newTransaction.type}
                  onValueChange={(value) => handleSelectChange("type", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="brand">Brand</Label>
                <Select
                  value={newTransaction.brand}
                  onValueChange={(value) => handleSelectChange("brand", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nike">Nike</SelectItem>
                    <SelectItem value="Adidas">Adidas</SelectItem>
                    <SelectItem value="Puma">Puma</SelectItem>
                    <SelectItem value="Reebok">Reebok</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={addTransaction}>Add</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableCaption>A list of your sneaker transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{format(new Date(transaction.date), "yyyy-MM-dd")}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.brand}</TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => deleteTransaction(transaction.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default Index;