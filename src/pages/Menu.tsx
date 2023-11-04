import { useEffect, useState } from "react";
import RestaurantInfo from "../customcomponents/RestaurantInfo";
import MenuItemsWithCategory from "../customcomponents/MenuItemsWithCategory";
import { Accordion } from "@/components/ui/accordion";
import MenuItemsWithNestedCategory from "../customcomponents/MenuItemsWithNestedCategory";
import MenuSkeleton from "@/skeleton/MenuSkeleton";
import RestaurantInfoSkeleton from "@/skeleton/RestaurantInfoSkeleton";
import { Switch } from "@/components/ui/switch";
import useRestaurantMenu from "@/utils/hooks/useRestaurantMenu";
import { MenuRestaurantInfo } from "@/utils/types/app/MenuRestaurantInfo";
import {
  MenuCategoryType,
  MenuItemType,
  MenuNestedCategoryType,
} from "@/utils/types/app/MenuCategoryType";

export default function Menu() {
  // menu data coming from API
  const [info, menu] = useRestaurantMenu();
  // local component data
  const [resInfo, setResInfo] = useState<MenuRestaurantInfo>();
  const [resMenu, setResMenu] =
    useState<(MenuCategoryType | MenuNestedCategoryType)[]>();

  const [vegOnly, setVegOnly] = useState<boolean>(false);

  useEffect(() => {
    setResInfo(info);
    if (!vegOnly) setResMenu(menu);
    else {
      const vegOnlyMenu: (MenuCategoryType | MenuNestedCategoryType)[] = [];
      menu.forEach((category: MenuCategoryType | MenuNestedCategoryType) => {
        if (category.type === "category") {
          const curCategory = category as MenuCategoryType;
          const vegItems: MenuItemType[] = [];
          curCategory.items.forEach((menuItem: MenuItemType) => {
            if (menuItem.itemAttribute.vegClassifier === "VEG")
              vegItems.push(menuItem);
          });
          if (vegItems.length > 0) {
            vegOnlyMenu.push({
              title: curCategory.title,
              type: curCategory.type,
              items: vegItems,
            } as MenuCategoryType);
          }
        } else {
          const curCategory = category as MenuNestedCategoryType;
          const vegOnlyCategories: MenuCategoryType[] = [];
          curCategory.categories.forEach((category: MenuCategoryType) => {
            const vegOnlyItems: MenuItemType[] = [];
            category.items.forEach((menuItem: MenuItemType) => {
              if (menuItem.itemAttribute.vegClassifier === "VEG")
                vegOnlyItems.push(menuItem);
            });
            if (vegOnlyItems.length > 0) {
              vegOnlyCategories.push({
                title: category.title,
                type: category.type,
                items: vegOnlyItems,
              });
            }
          });
          if (vegOnlyCategories.length > 0) {
            vegOnlyMenu.push({
              title: category.title,
              type: category.type,
              categories: vegOnlyCategories,
            });
          }
        }
      });
      setResMenu(vegOnlyMenu);
    }
  }, [info, menu, vegOnly]);

  return (
    <main className="w-3/5 mx-auto min-h-screen">
      {resInfo ? <RestaurantInfo info={resInfo} /> : <RestaurantInfoSkeleton />}
      {resInfo ? (
        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 mt-4 border-b dark:border-gray-600 pb-5">
          <p className="font-semibold">Veg Only</p>
          <Switch checked={vegOnly} onCheckedChange={setVegOnly} />
        </div>
      ) : null}
      <Accordion type="single" collapsible className="w-full">
        {resMenu ? (
          resMenu.map((category: MenuCategoryType | MenuNestedCategoryType) =>
            category.type === "category" ? (
              <MenuItemsWithCategory
                key={category.title}
                data={category as MenuCategoryType}
              />
            ) : category.type === "nestedcategory" ? (
              <MenuItemsWithNestedCategory
                key={category.title}
                data={category as MenuNestedCategoryType}
              />
            ) : null
          )
        ) : (
          <MenuSkeleton />
        )}
      </Accordion>
    </main>
  );
}
