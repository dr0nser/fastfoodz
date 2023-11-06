import VegIcon from "../assets/veg.png";
import NonVegIcon from "../assets/non-veg.png";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { MenuItemProps } from "@/utils/types/props/MenuItemProps";
import { CartItemType } from "@/utils/types/app/CartItemType";
import { cartAtom } from "@/recoil/atom/cartAtom";

export default function MenuItem({ data, menuItemStyles }: MenuItemProps) {
  const [cart, setCart] = useRecoilState<CartItemType[]>(cartAtom);
  const [inCart, setInCart] = useState(false);
  const [item, setItem] = useState<CartItemType>({ ...data, quantity: 0 });

  useEffect(() => {
    const itemInCart = cart.filter(
      (cartItem: CartItemType) => cartItem.id === data.id
    );
    if (itemInCart.length > 0) {
      setInCart(true);
      setItem(itemInCart[0]);
    }
  }, [item]);

  useEffect(() => {
    const appObject = localStorage.getItem("fastfoodz");
    if (appObject) {
      const parsed = JSON.parse(appObject);
      parsed.cart = [...cart];
      localStorage.setItem("fastfoodz", JSON.stringify(parsed));
    }
  }, [cart]);

  function handleAddToCart() {
    const itemsExceptCurrentItem = cart.filter(
      (cartItem: CartItemType) => cartItem.id !== data.id
    );
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    setItem(updatedItem);
    setCart([...itemsExceptCurrentItem, updatedItem]);
  }

  function handleRemoveFromCart() {
    const itemsExceptCurrentItem = cart.filter(
      (cartItem: CartItemType) => cartItem.id !== data.id
    );
    if (item.quantity === 1) {
      setCart([...itemsExceptCurrentItem]);
      setInCart(false);
    } else {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      setItem(updatedItem);
      setCart([...itemsExceptCurrentItem, updatedItem]);
    }
  }

  return (
    <div
      className={`p-2 grid grid-cols-5 items-start space-x-2 pt-3 pb-12 border-b dark:border-gray-600 justify-between ${
        menuItemStyles ? menuItemStyles : ""
      }`}
    >
      <div className="col-span-4">
        <img
          className="w-6 h-6"
          src={
            data.itemAttribute.vegClassifier === "VEG" ? VegIcon : NonVegIcon
          }
          alt={
            data.itemAttribute.vegClassifier === "VEG"
              ? "Vegetarian"
              : "Non-Vegetarian"
          }
        />
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {data.name}
        </p>
        <p className="font-semibold text-gray-700 pb-3 dark:text-gray-300">
          ₹ {data.price ? data.price / 100 : data.defaultPrice! / 100}
        </p>
        <p className="w-4/5 text-gray-400">{data.description}</p>
      </div>
      {data.imageId ? (
        <div className="object-cover col-span-1 relative">
          <img
            className="rounded-lg object-cover mx-auto w-32 h-28"
            width="256"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data.imageId}`}
          />
          {inCart ? (
            <div className="w-full absolute -bottom-3">
              <div className="w-1/2 mx-auto flex items-center justify-around border border-green-500 text-green-500 bg-white hover:bg-green-600 hover:text-white font-semibold rounded-lg cursor-pointer dark:bg-black dark:hover:bg-green-600">
                <button className="text-2xl" onClick={handleRemoveFromCart}>
                  -
                </button>
                <p className="text-lg">{item.quantity}</p>
                <button className="text-xl" onClick={handleAddToCart}>
                  +
                </button>
              </div>
            </div>
          ) : (
            <button
              className="w-full mx-auto absolute -bottom-2"
              onClick={handleAddToCart}
            >
              <span className="px-8 py-2 border rounded-lg border-green-600 text-green-600 bg-white font-semibold hover:bg-green-600 hover:text-white dark:bg-black dark:hover:bg-green-600">
                ADD
              </span>
            </button>
          )}
        </div>
      ) : (
        <div
          className="col-span-1w-full h-full flex items-center justify-around"
          onClick={handleAddToCart}
        >
          {inCart ? (
            <button
              className="w-full mx-auto absolute -bottom-2"
              onClick={handleAddToCart}
            >
              <span className="px-8 py-2 border rounded-lg border-green-600 text-green-600 bg-white font-semibold hover:bg-green-600 hover:text-white dark:bg-black dark:hover:bg-green-600">
                ADD
              </span>
            </button>
          ) : (
            <button className="px-6 py-2 border rounded-lg border-green-600 text-green-600 bg-white font-semibold hover:bg-green-600 hover:text-white dark:bg-black dark:hover:bg-green-600">
              <span>ADD</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
