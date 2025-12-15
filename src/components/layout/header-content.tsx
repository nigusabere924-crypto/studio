'use client';

import Link from 'next/link';
import { Leaf, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HeaderContent() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">
            Ethiopia LocalLens
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link href="/" passHref>
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <span>Search</span>
            </Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button asChild>
              <span>
                <Store className="sm:mr-2" />
                <span className="hidden sm:inline">Shop Dashboard</span>
              </span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
