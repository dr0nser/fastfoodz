import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RESTAURANT_CARD_CDN } from "@/utils/contants/constants";
import { RestaurantInfoType } from "@/utils/types/api/RestaurantInfoType";
import { AiFillStar } from "react-icons/ai";

export default function RestaurantCard({
  sla,
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
}: RestaurantInfoType) {
  const deliveryTime = sla.slaString;

  return (
    <Card className="border-none hover:shadow-2xl p-2 cursor-pointer transition-all dark:hover:scale-105 duration-150 antialiased hover:subpixel-antialiased">
      <CardContent>
        <img
          className="rounded-xl transition-all ease-in duration-200"
          src={`${RESTAURANT_CARD_CDN}${cloudinaryImageId}`}
        />
      </CardContent>
      <CardFooter className="flex flex-col p-1">
        <div className="flex items-center justify-between w-full pb-1">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {name}
          </p>
          <div className="flex items-center bg-green-700 rounded-sm px-1 text-white font-semibold space-x-1">
            <p className="text-md">{avgRating}</p>
            <AiFillStar className="text-sm" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full text-md text-gray-400">
          <p className="">
            {cuisines.join(", ").length > 25
              ? cuisines.join(", ").substring(0, 25) + "..."
              : cuisines.join(", ")}
          </p>
          <p>{costForTwo}</p>
        </div>
        <p className="w-full text-sm font-semibold text-gray-500 text-right">
          {deliveryTime}
        </p>
      </CardFooter>
    </Card>
  );
}
