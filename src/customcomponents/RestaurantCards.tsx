import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantCardSkeleton from "@/skeleton/RestaurantCardSkeleton";
import useRestaurantCards from "@/utils/hooks/useRestaurantCards";
import { RestaurantInfoType } from "@/utils/types/api/RestaurantInfoType";
import RestaurantCardsProps from "@/utils/types/props/RestaurantCardsProps";

export default function RestaurantCards({
  sortBy,
  searchQuery,
}: RestaurantCardsProps) {
  // realtime data coming from API
  const restaurantCards = useRestaurantCards();
  // data local to component for sorting, searching, etc.
  const [resCards, setResCards] = useState<RestaurantInfoType[]>(
    [] as RestaurantInfoType[]
  );

  useEffect(() => {
    if (restaurantCards.length === 0) return;
    let dataToSet: RestaurantInfoType[] = [...restaurantCards];
    // sorting
    if (sortBy !== "relevance") {
      dataToSet = [...dataToSet].sort((a, b) => {
        switch (sortBy) {
          case "toprated":
            return b.avgRating - a.avgRating;
          case "deliverytime":
            return a.sla.deliveryTime - b.sla.deliveryTime;
          default:
            return 0;
        }
      });
    }
    // searching
    if (searchQuery && searchQuery.length > 0) {
      dataToSet = [...dataToSet].filter(
        (res) =>
          res.name.toLowerCase().includes(searchQuery) ||
          res.cuisines.join(" ").toLowerCase().includes(searchQuery)
      );
    }
    setResCards(dataToSet);
  }, [restaurantCards, sortBy, searchQuery]);

  return (
    <div className="grid grid-cols-3 gap-8 py-4">
      {resCards && resCards.length > 0 ? (
        resCards.map((card: any) => (
          <Link
            key={card.id}
            to={`${card.cta.replace(
              "https://www.swiggy.com/restaurants/",
              ""
            )}`}
          >
            <RestaurantCard {...card} />
          </Link>
        ))
      ) : (
        <>
          <RestaurantCardSkeleton />
          <RestaurantCardSkeleton />
          <RestaurantCardSkeleton />
          <RestaurantCardSkeleton />
          <RestaurantCardSkeleton />
          <RestaurantCardSkeleton />
        </>
      )}
    </div>
  );
}
