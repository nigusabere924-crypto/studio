import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ShopOnboardingForm from '@/components/shop-onboarding-form';
import InventoryManagement from '@/components/inventory-management';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-headline font-bold mb-6">Shop Dashboard</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="profile">My Shop Profile</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <ShopOnboardingForm />
        </TabsContent>
        <TabsContent value="inventory" className="mt-6">
          <InventoryManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
