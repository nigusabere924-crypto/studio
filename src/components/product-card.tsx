import Image from 'next/image';
import Link from 'next/link';
import { Product, Shop } from '@/lib/data';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ArrowRight, Store } from 'lucide-react';

type ProductWithShop = Product & { shop: Shop };

export default function ProductCard({ product }: { product: ProductWithShop }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-headline mb-2 leading-tight">
          {product.name}
        </CardTitle>
        <div className="flex justify-between items-center mb-2">
          <p className="text-2xl font-bold text-primary">
            {product.price.toLocaleString('en-US')} ETB
          </p>
          <Badge variant={product.inStock ? 'default' : 'destructive'} className={product.inStock ? 'bg-green-600' : ''}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/50">
        <Button asChild variant="ghost" className="w-full justify-between">
          <Link href={`/shop/${product.shop.id}`}>
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{product.shop.name}</span>
            </div>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
