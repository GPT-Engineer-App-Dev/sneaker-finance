import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AddTransaction = () => {
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
    // Logic to add transaction
    setNewTransaction({ date: "", amount: "", type: "income", brand: "Nike" });
  };

  return (
    <div className="flex justify-center items-center h-full">
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
  );
};

export default AddTransaction;