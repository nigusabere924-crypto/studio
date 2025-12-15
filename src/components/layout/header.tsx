import Link from 'next/link';
import { Leaf, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
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
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/">Search</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard">
              <Store className="sm:mr-2" />
              <span className="hidden sm:inline">Shop Dashboard</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
