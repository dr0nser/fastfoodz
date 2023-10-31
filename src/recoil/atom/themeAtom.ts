import { atom } from "recoil";

export const themeAtom = atom({
  key: "theme",
  default: (localStorage.getItem("fastfoodz")
    ? JSON.parse(localStorage.getItem("fastfoodz")!).theme
    : "system") as "dark" | "light" | "system",
});
