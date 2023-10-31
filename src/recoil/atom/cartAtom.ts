import { CartItemType } from "@/utils/types/app/CartItemType";
import { atom } from "recoil";

export const cartAtom = atom({
  key: "orders",
  default: (localStorage.getItem("fastfoodz")
    ? JSON.parse(localStorage.getItem("fastfoodz")!).cart
    : []) as CartItemType[],
});
