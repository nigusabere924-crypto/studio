"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Product, Shop } from '@/lib/data';
import ProductCard from './product-card';
import { Button } from './ui/button';
import { MapPin, ArrowUpDown, LoaderCircle, ServerCrash } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

type ProductWithShop = Product & { shop: Shop };
type Location = { latitude: number; longitude: number };

// Haversine distance formula
const getDistance = (loc1: Location, loc2: { lat: number; lng: number }) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (loc2.lat - loc1.latitude) * (Math.PI / 180);
  const dLon = (loc2.lng - loc1.longitude) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(loc1.latitude * (Math.PI / 180)) *
      Math.cos(loc2.lat * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

export default function ProductList({ initialProducts }: { initialProducts: ProductWithShop[] }) {
  const [products, setProducts] = useState<ProductWithShop[]>(initialProducts);
  const [sortBy, setSortBy] = useState('price-asc');
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const { toast } = useToast();

  const handleLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setSortBy('nearest');
          setIsLocating(false);
          toast({ title: "Location found!", description: "Displaying nearest options first." });
        },
        () => {
          toast({ variant: "destructive", title: "Location Error", description: "Unable to retrieve your location. Please enable location services in your browser." });
          setIsLocating(false);
        }
      );
    } else {
      toast({ variant: "destructive", title: "Location Error", description: "Geolocation is not supported by this browser." });
      setIsLocating(false);
    }
  };

  const sortedProducts = useMemo(() => {
    let sorted = [...initialProducts];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'nearest' && userLocation) {
      sorted.sort((a, b) => {
        const distA = getDistance(userLocation, a.shop.location);
        const distB = getDistance(userLocation, b.shop.location);
        return distA - distB;
      });
    }
    return sorted;
  }, [initialProducts, sortBy, userLocation]);

  useEffect(() => {
    setProducts(sortedProducts);
  }, [sortedProducts]);

  if (initialProducts.length === 0) {
    return (
      <div className="text-center py-10">
        <ServerCrash className="mx-auto h-12 w-12 text-muted-foreground" />
        <h2 className="mt-4 text-2xl font-headline font-semibold">No Products Found</h2>
        <p className="mt-2 text-muted-foreground">
          Your search did not match any products. Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-headline font-semibold">
          Found {products.length} results
        </h2>
        <div className="flex items-center gap-2 sm:gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] bg-card">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              {userLocation && <SelectItem value="nearest">Nearest First</SelectItem>}
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleLocation} disabled={isLocating}>
            {isLocating ? (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <MapPin className="mr-2 h-4 w-4" />
            )}
            Nearest
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
