'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

export function NewOrderForm() {
  const [orderType, setOrderType] = useState('dine-in')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card>
          <CardHeader>
            <CardTitle>New Order</CardTitle>
          </CardHeader>
          <CardContent>
            <Form>
              <div className="grid gap-4">
                <FormField
                  name="orderType"
                  render={() => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-base">Order Type<span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={setOrderType}
                          defaultValue="dine-in"
                          className="flex flex-row space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="dine-in" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Dine In
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="take-away" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Take Away
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {orderType === 'dine-in' && (
                  <>
                    <FormField
                      name="table"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Table<span className="text-red-500">*</span></FormLabel>
                          <Select>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select table" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">Table 1</SelectItem>
                              <SelectItem value="2">Table 2</SelectItem>
                              <SelectItem value="3">Table 3</SelectItem>
                              <SelectItem value="4">Table 4</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time<span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input
                              type="datetime-local"
                              {...field}
                              defaultValue={new Date().toISOString().slice(0, 16)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <FormField
                  name="items"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Items</FormLabel>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-3">
                            <Select>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="main">Main Menu</SelectItem>
                                <SelectItem value="drinks">Drinks</SelectItem>
                                <SelectItem value="desserts">Desserts</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="col-span-3">
                            <Select>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Item" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="biryani">
                                  Chicken Biryani
                                </SelectItem>
                                <SelectItem value="noodles">Noodles</SelectItem>
                                <SelectItem value="curry">Curry</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="col-span-2">
                            <Input type="number" placeholder="Qty" min="1" />
                          </div>
                          <div className="col-span-2">
                            <Input
                              type="number"
                              placeholder="Price"
                              readOnly
                              value="150.00"
                            />
                          </div>
                          <div className="col-span-2">
                            <Button variant="outline" className="w-full">
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="attendant"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Attendant<span className="text-red-500">*</span></FormLabel>
                      <Select>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select attendant" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="chris">ChrisThomas - 226</SelectItem>
                          <SelectItem value="laura">Laura Olivia - 228</SelectItem>
                          <SelectItem value="michael">
                            Michael Jack - 227
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-4">
                  <Button variant="outline">Reset</Button>
                  <Button>Submit</Button>
                </div>
              </div>
            </Form>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent aria-describedby="new-order-form-description">
        <DialogHeader>
          <DialogTitle>New Order</DialogTitle>
          <DialogDescription id="new-order-form-description">
            Create a new order by filling out the form below.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

