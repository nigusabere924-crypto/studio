"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, "Shop name must be at least 2 characters."),
  address: z.string().min(10, "Please enter a full address."),
  contact: z.string().min(10, "Please enter a valid phone number."),
  operatingHours: z.string().min(5, "Please enter operating hours."),
  paymentOptions: z.string().min(3, "Enter payment options, separated by commas."),
});

// Mock initial data as if fetched for an existing shop owner
const mockShopData = {
    name: 'Bole Fresh Goods',
    address: '456 Bole Rd, Addis Ababa',
    contact: '+251 92 345 6789',
    operatingHours: 'Every day: 7 AM - 10 PM',
    paymentOptions: 'Cash, Telebirr, CBE Birr, Credit Card'
}

export default function ShopOnboardingForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: mockShopData,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Profile Updated!",
      description: "Your shop profile has been successfully saved.",
    });
  }

  return (
    <Card className="max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle className="font-headline">Your Shop Profile</CardTitle>
            <CardDescription>Keep your shop information up to date for customers.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Shop Name</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Merkato General Store" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., 123 Merkato St, Addis Ababa" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Contact Phone</FormLabel>
                    <FormControl>
                        <Input placeholder="+251 91 123 4567" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="operatingHours"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Operating Hours</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Mon-Sat: 8 AM - 8 PM" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="paymentOptions"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Payment Options</FormLabel>
                    <FormControl>
                        <Textarea placeholder="e.g., Cash, Telebirr, CBE Birr" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90">Save Changes</Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
