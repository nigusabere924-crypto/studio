"use client";

import { useState } from 'react';
import { getProductsByShopId, Product } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Trash, PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock the shop owner's ID
const MY_SHOP_ID = '2';

export default function InventoryManagement() {
  const [inventory, setInventory] = useState(() => getProductsByShopId(MY_SHOP_ID));
  const { toast } = useToast();

  const handlePriceChange = (productId: string, newPrice: number) => {
    setInventory(
      inventory.map((p) => (p.id === productId ? { ...p, price: newPrice } : p))
    );
  };

  const handleStockChange = (productId: string, inStock: boolean) => {
    setInventory(
      inventory.map((p) => (p.id === productId ? { ...p, inStock } : p))
    );
  };
  
  const handleSaveChanges = () => {
    // In a real app, this would be an API call
    console.log("Saving inventory:", inventory);
    toast({
        title: "Inventory Saved!",
        description: "Your product prices and stock have been updated."
    });
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
                <CardTitle className="font-headline">Product Inventory</CardTitle>
                <CardDescription>Update prices and stock status for your products.</CardDescription>
            </div>
            <div className="flex gap-2">
                <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Add Product</Button>
                <Button onClick={handleSaveChanges} className="bg-accent hover:bg-accent/90">Save Changes</Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="w-40">Price (ETB)</TableHead>
              <TableHead className="w-32 text-center">In Stock</TableHead>
              <TableHead className="w-20 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                      handlePriceChange(product.id, Number(e.target.value))
                    }
                    className="h-9"
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    checked={product.inStock}
                    onCheckedChange={(checked) =>
                      handleStockChange(product.id, checked)
                    }
                    aria-label={`${product.name} stock status`}
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </CardContent>
    </Card>
  );
}
