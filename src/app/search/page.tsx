import { translateAndUnderstandSearchQuery } from '@/ai/flows/translate-and-understand-search-query';
import ProductList from '@/components/product-list';
import { getProducts, Product, Shop } from '@/lib/data';
import { Bot, Search, Languages, ServerCrash } from 'lucide-react';
import Link from 'next/link';

type ProductWithShop = Product & { shop: Shop };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || '';
  let aiResponse: { translatedQuery: string; understoodQuery: string } | null = null;
  let products: ProductWithShop[] = [];
  let searchError = false;

  if (query) {
    try {
      aiResponse = await translateAndUnderstandSearchQuery({ query });
      const allProducts = getProducts();

      if (aiResponse && aiResponse.understoodQuery) {
        const searchTerms = aiResponse.understoodQuery
          .toLowerCase()
          .split(',')
          .map((term) => term.trim())
          .filter(Boolean);

        if (searchTerms.length > 0) {
          products = allProducts.filter((p) => {
            const productName = p.name.toLowerCase();
            return searchTerms.some((term) => productName.includes(term));
          });
        }
        
        // Fallback: If AI keywords yield no results, try searching the translated query directly.
        if (products.length === 0 && aiResponse.translatedQuery) {
          const fallbackTerm = aiResponse.translatedQuery.toLowerCase().trim();
          products = allProducts.filter(p => p.name.toLowerCase().includes(fallbackTerm));
        }
      }
    } catch (error) {
      console.error('Error during AI-powered search:', error);
      searchError = true;
      // Fallback to a simple keyword search on the original query if AI fails
      const allProducts = getProducts();
      products = allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    }
  }

  if (!query) {
    return (
      <div className="text-center py-10">
        <Search className="mx-auto h-12 w-12 text-muted-foreground" />
        <h2 className="mt-4 text-2xl font-headline font-semibold">
          Start a new search
        </h2>
        <p className="mt-2 text-muted-foreground">
          Use the search bar above to find products.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 p-4 border rounded-lg bg-card shadow-sm">
        <h2 className="text-sm font-semibold text-muted-foreground mb-2">
          Your Search: "{query}"
        </h2>
        {searchError ? (
           <div className="text-destructive text-sm flex items-center gap-2">
             <ServerCrash className="h-4 w-4" />
             Could not connect to the AI search service. Showing basic results.
           </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Languages className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Translated Query</h3>
                <p className="text-muted-foreground">
                  {aiResponse?.translatedQuery ?? '...'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bot className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">AI Understood Query</h3>
                <p className="text-muted-foreground">
                  {aiResponse?.understoodQuery || (products.length > 0 ? '(Used translated query for search)' : 'Could not identify specific products.')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <ProductList initialProducts={products} />
    </div>
  );
}
