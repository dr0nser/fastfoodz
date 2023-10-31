import { MenuItemType } from "./MenuCategoryType";

export interface CartItemType extends MenuItemType {
  quantity: number;
}
