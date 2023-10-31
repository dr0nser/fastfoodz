import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { locationAtom } from "./recoil/atom/locationAtom";
import { themeAtom } from "./recoil/atom/themeAtom";

export default function App({ children }: any) {
  const [, setLocation] = useRecoilState(locationAtom);
  const theme = useRecoilValue(themeAtom);

  useEffect(() => {
    const appObj = localStorage.getItem("fastfoodz");
    if (!appObj) {
      localStorage.setItem(
        "fastfoodz",
        JSON.stringify({
          theme,
          cart: [],
          lat: "",
          lng: "",
        })
      );
    }
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({
        lat: latitude,
        lng: longitude,
      });
    });
  }, []);

  return <div className="flex flex-col min-h-screen">{children}</div>;
}
