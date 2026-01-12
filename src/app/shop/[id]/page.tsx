import { getShopById, getProductsByShopId } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductList from '@/components/product-list';
import ShopReviews from '@/components/shop-reviews';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Phone, Clock, CreditCard, MapPin } from 'lucide-react';

export default function ShopDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const shop = getShopById(params.id);

  if (!shop) {
    notFound();
  }

  const products = getProductsByShopId(params.id);
  const productsWithShop = products.map(p => ({ ...p, shop }));
  const googleMapsUrl = `https://www.google.com/maps?q=${shop.location.lat},${shop.location.lng}`;

  return (
    <div className="space-y-8">
      <Card>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Image
              src={shop.imageUrl}
              alt={shop.name}
              width={400}
              height={400}
              className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full h-full"
            />
          </div>
          <div className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-3xl font-headline">{shop.name}</CardTitle>
              <CardDescription>{shop.address}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{shop.operatingHours}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{shop.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span>{shop.paymentOptions.join(', ')}</span>
                </div>
                <Button asChild className="mt-4">
                  <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Link>
                </Button>
            </CardContent>
          </div>
        </div>
      </Card>

      <ShopReviews reviews={shop.reviews} />

      <div>
        <h2 className="text-2xl font-headline font-semibold mb-4">Products Available</h2>
        <ProductList initialProducts={productsWithShop} />
      </div>

    </div>
  );
}
