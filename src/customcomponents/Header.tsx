import FastFoodzLogo from "../assets/fastfoodz.png";
import { Link } from "react-router-dom";
import { BsBag, BsPerson } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { cartAtom } from "@/recoil/atom/cartAtom";
import ThemeToggle from "./ThemeToggle";
import { UserButton, useAuth, useUser } from "@clerk/clerk-react";

export default function Header() {
  const { userId, isSignedIn } = useAuth();
  const { user } = useUser();

  const cartItems = useRecoilValue(cartAtom);
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50 dark:bg-black dark:text-gray-200 dark:shadow-sm">
      <div className="py-2 w-3/5 mx-auto flex items-center justify-between">
        <Link to="/">
          <img className="h-16" src={FastFoodzLogo} alt="FastFoodz Logo" />
        </Link>
        <div className="flex items-center space-x-10">
          <Link to="/cart">
            <div className="flex space-x-1 items-center text-gray-600 dark:text-gray-200 dark:hover:text-orange-500 hover:text-orange-500">
              <div className="relative">
                <BsBag className="text-2xl" />
                <p
                  className={`absolute top-[6px] ${
                    cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    ) < 10
                      ? "left-[8px]"
                      : "left-[5px]"
                  } text-sm font-semibold`}
                >
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </p>
              </div>
              <p className="text-md font-semibold mt-1">Cart</p>
            </div>
          </Link>
          {isSignedIn && userId ? (
            <div className="flex space-x-2 items-center font-semibold">
              <UserButton
                appearance={{
                  elements: {
                    card: "dark:bg-black border dark:border-gray-600 dark:text-gray-300",
                    userPreviewSecondaryIdentifier: "dark:text-gray-300",
                    userButtonPopoverActionButtonIcon: "dark:stroke-gray-300",
                    userButtonPopoverActionButtonText: "dark:text-gray-300",
                    userButtonPopoverFooter: "hidden",
                  },
                }}
              />
              <p>{user?.firstName}</p>
            </div>
          ) : (
            <Link to="/sign-in">
              <div className="flex space-x-1 items-center text-gray-600 dark:text-gray-200 dark:hover:text-orange-500 hover:text-orange-500">
                <BsPerson className="text-2xl" />
                <p className="text-lg font-semibold mt-1">Sign In</p>
              </div>
            </Link>
          )}
          {isSignedIn && (
            <Link to="/orders">
              <div className="flex space-x-1 items-center text-gray-600 dark:text-gray-200 dark:hover:text-orange-500 hover:text-orange-500">
                <BsPerson className="text-2xl" />
                <p className="text-lg font-semibold mt-1">Orders</p>
              </div>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
