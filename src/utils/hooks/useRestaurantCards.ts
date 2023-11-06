import { locationAtom } from "@/recoil/atom/locationAtom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { RestaurantInfoType } from "../types/api/RestaurantInfoType";

export default function useRestaurantCards() {
  const [menu, setMenu] = useState<RestaurantInfoType[]>(
    [] as RestaurantInfoType[]
  );
  const location = useRecoilValue(locationAtom);

  async function getRestaurants() {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const result = await response.data;
    const restaurantCardGrid = await result.data.cards.filter(
      (card: any) =>
        card.card.card.id && card.card.card.id === "restaurant_grid_listing"
    )[0];
    const restaurantCards = await restaurantCardGrid.card.card.gridElements
      .infoWithStyle.restaurants;
    // only filter out the info
    const formattedRestaurantCards: RestaurantInfoType[] = [];
    restaurantCards.forEach((card: any) => {
      card.info.cta = card.cta.link;
      formattedRestaurantCards.push(card.info);
    });
    return formattedRestaurantCards;
  }

  const { data, isSuccess } = useQuery({
    queryKey: ["restaurant-cards"],
    queryFn: getRestaurants,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!isSuccess) return;
    setMenu(data);
  }, [data]);

  return menu;
}
