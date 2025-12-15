'use client';

import SearchForm from '@/components/search-form';
import { Bot } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Find Anything, Locally.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Search in Amharic, Tigrinya, Oromo, or English. We'll find the best
          prices from shops right in your neighborhood.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl w-full">
        <SearchForm />
        <p className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
          <Bot size={14} /> AI-powered multilingual search
        </p>
      </div>
    </div>
  );
}
