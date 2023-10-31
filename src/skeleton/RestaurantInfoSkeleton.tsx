import { Skeleton } from "@/components/ui/skeleton";

export default function RestaurantInfoSkeleton() {
  return (
    <div className="flex items-start justify-between py-3 border-b">
      <div>
        <Skeleton className="h-10 w-40 mb-2" />
        <Skeleton className="h-6 w-40 mb-1" />
        <Skeleton className="h-6 w-40 mb-3" />
        <Skeleton className="h-6 w-60" />
      </div>
      <Skeleton className="h-32 w-32" />
    </div>
  );
}
