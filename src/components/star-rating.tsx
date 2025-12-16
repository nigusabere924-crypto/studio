'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      ))}
      {partialStar > 0 && (
        <div className="relative h-5 w-5">
          <Star className="h-5 w-5 text-yellow-400" />
          <div style={{ width: `${partialStar * 100}%` }} className="absolute top-0 left-0 h-full overflow-hidden">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
      ))}
    </div>
  );
}
