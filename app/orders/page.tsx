import { MainLayout } from '@/components/layout/main-layout'
import { OrderList } from '@/components/orders/order-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function NewOrderForm() {
  return (
    <form className="space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="customer">Customer Name</Label>
        <Input id="customer" placeholder="Enter customer name" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="items">Items (comma-separated)</Label>
        <Input id="items" placeholder="e.g., Burger, Fries, Coke" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="total">Total</Label>
        <Input id="total" type="number" step="0.01" placeholder="Enter total amount" />
      </div>
      <Button type="submit">Create Order</Button>
    </form>
  )
}

export default function OrdersPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Orders</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>New Order</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Order</DialogTitle>
              </DialogHeader>
              <NewOrderForm />
            </DialogContent>
          </Dialog>
        </div>
        <OrderList />
      </div>
    </MainLayout>
  )
}

