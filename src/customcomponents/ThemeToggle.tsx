import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themeAtom } from "@/recoil/atom/themeAtom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CiLight, CiDark } from "react-icons/ci";
import { RxDesktop } from "react-icons/rx";

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  // this theme is for the current component
  const [theme2, setTheme2] = useState<string>(theme);

  useEffect(() => {
    const appObject = localStorage.getItem("fastfoodz");
    if (appObject) {
      const parsed = JSON.parse(appObject);
      parsed.theme = theme2;
      localStorage.setItem("fastfoodz", JSON.stringify(parsed));
      if (theme2 === "light" || theme2 === "dark" || theme2 === "system")
        setTheme(theme2);
    }
  }, [theme2]);

  useEffect(() => {
    if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } else if (
      theme === "dark" &&
      !document.documentElement.classList.contains("dark")
    )
      document.documentElement.classList.add("dark");
    else if (
      theme === "light" &&
      document.documentElement.classList.contains("dark")
    )
      document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          {theme === "light" ? (
            <div className="flex items-center space-x-2">
              <CiLight className="text-2xl" />
              <p>Light</p>
            </div>
          ) : theme === "dark" ? (
            <div className="flex items-center space-x-2">
              <CiDark className="text-2xl" />
              <p>Dark</p>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <RxDesktop className="text-xl" />
              <p>System</p>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme2} onValueChange={setTheme2}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
