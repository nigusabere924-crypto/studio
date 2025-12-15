import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getShopById, getProductsByShopId } from '@/lib/data';
import { Clock, Phone, CreditCard, MapPin, ExternalLink } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ShopPage({ params }: { params: { id: string } }) {
  const shop = getShopById(params.id);

  if (!shop) {
    notFound();
  }

  const products = getProductsByShopId(params.id).map(p => ({...p, shop}));

  return (
    <div className="space-y-12">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <Image
          src={shop.imageUrl}
          alt={`Exterior of ${shop.name}`}
          fill
          className="object-cover"
          data-ai-hint={shop.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h1 className="font-headline text-5xl font-bold text-white absolute bottom-6 left-6">
          {shop.name}
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <h2 className="font-headline text-2xl font-semibold">Shop Details</h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <span>{shop.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <span>{shop.operatingHours}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <span>{shop.contact}</span>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-primary mt-1" />
              <div className="flex flex-wrap gap-2">
                {shop.paymentOptions.map((option) => (
                  <Badge key={option} variant="secondary">{option}</Badge>
                ))}
              </div>
            </div>
          </div>
          <Button asChild className="w-full bg-accent hover:bg-accent/90">
            <a
              href={`https://www.google.com/maps?q=${shop.location.lat},${shop.location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-headline text-2xl font-semibold mb-6">Products Available</h2>
          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
          ) : (
            <p className="text-muted-foreground">This shop has not listed any products yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
