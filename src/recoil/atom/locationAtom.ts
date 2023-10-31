import { atom } from "recoil";

export const locationAtom = atom({
  key: "location",
  default: {
    lat: 22.5753931,
    lng: 88.47979029999999,
  },
});
