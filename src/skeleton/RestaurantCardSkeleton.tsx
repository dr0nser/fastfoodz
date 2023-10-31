import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function RestaurantCardSkeleton() {
  return (
    <Card className="border-none hover:shadow-2xl p-2 cursor-pointer">
      <CardContent>
        {/* image */}
        <Skeleton className="w-full h-60" />
      </CardContent>
      <CardFooter className="flex flex-col py-2">
        <div className="flex items-center justify-between w-full pb-2">
          {/* restaurant name */}
          <Skeleton className="w-56 h-7" />
          {/* rating */}
          <Skeleton className="w-12 h-7" />
        </div>
        <div className="flex items-center justify-between w-full text-md text-gray-400">
          {/* cuisines */}
          <Skeleton className="w-56 h-7" />
          {/* cost for two */}
          <Skeleton className="w-20 h-7" />
        </div>
        {/* delivery */}
        <Skeleton className="w-20 h-7 ml-auto mt-2" />
      </CardFooter>
    </Card>
  );
}
