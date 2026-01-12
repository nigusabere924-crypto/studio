import { Review } from '@/lib/data';
import StarRating from './star-rating';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface ShopReviewsProps {
  reviews: Review[];
}

export default function ShopReviews({ reviews }: ShopReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No reviews yet for this shop.</p>
        </CardContent>
      </Card>
    );
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Reviews</CardTitle>
        <div className="flex items-center gap-2">
          <StarRating rating={averageRating} />
          <span className="text-muted-foreground">
            {averageRating.toFixed(1)} ({reviews.length} reviews)
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={review.id}>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{review.author}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                  <p className="mt-2 text-sm">{review.comment}</p>
                </div>
              </div>
              {index < reviews.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
