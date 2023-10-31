import { locationAtom } from "@/recoil/atom/locationAtom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

export default function useRestaurantMenu() {
  const [menu, setMenu] = useState<any[]>();
  const [info, setInfo] = useState<any>();
  const location = useRecoilValue(locationAtom);

  const params = useParams();
  const slug = params.slug!;
  const restaurantId = slug.substring(slug.lastIndexOf("-") + 1);

  async function getRestaurantMenu() {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.lat}&lng=${location.lng}&restaurantId=${restaurantId}`
    );
    const result = await response.data;
    const restaurantInformation = await result.data.cards[0].card.card.info;
    const regularCards = await result.data.cards[2].groupedCard.cardGroupMap
      .REGULAR.cards;
    const menuCards = await regularCards.filter(
      (card: any) =>
        card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    const formattedMenuCategories: any[] = [];
    menuCards.forEach((menuCard: any) => {
      if (
        menuCard.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        const formattedItems: any[] = [];
        const itemCards = menuCard.card.card.itemCards;
        itemCards.forEach((itemCard: any) => {
          formattedItems.push(itemCard.card.info);
        });
        const newMenuCategory = {
          title: menuCard.card.card.title,
          items: formattedItems,
          type: "category",
        };
        formattedMenuCategories.push(newMenuCategory);
      } else if (
        menuCard.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      ) {
        const formattedNestedCategories: any[] = [];
        menuCard.card.card.categories.forEach((subCategory: any) => {
          const formattedNestedItemCards: any[] = [];
          subCategory.itemCards.forEach(async (itemCard: any) => {
            formattedNestedItemCards.push(itemCard.card.info);
          });
          formattedNestedCategories.push({
            title: subCategory.title,
            items: formattedNestedItemCards,
          });
        });
        formattedMenuCategories.push({
          title: menuCard.card.card.title,
          categories: formattedNestedCategories,
          type: "nestedcategory",
        });
      }
    });
    return { info: restaurantInformation, menu: formattedMenuCategories };
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: [`menu-${restaurantId}`],
    queryFn: getRestaurantMenu,
    staleTime: 3600000,
  });

  useEffect(() => {
    if (isLoading || isError) return;
    setInfo(data.info);
    setMenu(data.menu);
  }, [data]);

  return [info, menu];
}
