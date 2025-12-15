import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full min-h-[calc(100vh-14rem)]">
      <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
