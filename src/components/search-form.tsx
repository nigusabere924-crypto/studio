"use client";

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Mic, LoaderCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    });
  };

  const handleVoiceSearch = () => {
    toast({
      title: 'Voice Search Not Implemented',
      description: 'This is a placeholder for voice search functionality.',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full"
      aria-label="Product search form"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search in any local language (e.g., 'buna', 'dabo')"
          className="w-full pl-10 pr-20 py-6 text-base rounded-full shadow-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search for products"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={handleVoiceSearch}
            aria-label="Search by voice"
          >
            <Mic className="h-5 w-5" />
          </Button>
          <Button
            type="submit"
            className="rounded-full font-bold bg-accent hover:bg-accent/90"
            aria-label="Submit search"
            disabled={isPending}
          >
            {isPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              'Search'
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
