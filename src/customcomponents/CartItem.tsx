import VegIcon from "../assets/veg.png";
import NonVegIcon from "../assets/non-veg.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartAtom } from "../recoil/atom/cartAtom";
import { useEffect, useState } from "react";
import { CartItemType } from "@/utils/types/app/CartItemType";
import { CartItemProps } from "@/utils/types/props/CartItemProps";

export default function MenuItem({ data }: CartItemProps) {
  const [, setCart] = useRecoilState<CartItemType[]>(cartAtom);
  const cartItems = useRecoilValue(cartAtom);
  const [item, setItem] = useState<CartItemType>({ ...data });

  useEffect(() => {
    setItem({ ...data });
  }, []);

  function handleAddToCart() {
    const itemsExceptCurrentItem = cartItems.filter(
      (cartItem: CartItemType) => cartItem.id !== data.id
    );
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    setItem(updatedItem);
    setCart([...itemsExceptCurrentItem, updatedItem]);
  }

  function handleRemoveFromCart() {
    const itemsExceptCurrentItem = cartItems.filter(
      (cartItem: CartItemType) => cartItem.id !== data.id
    );
    if (item.quantity === 1) {
      setCart([...itemsExceptCurrentItem]);
    } else {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      setItem(updatedItem);
      setCart([...itemsExceptCurrentItem, updatedItem]);
    }
  }

  return (
    <div className="p-2 grid grid-cols-5 items-start space-x-2 pt-3 pb-12 border-b dark:border-gray-600 justify-between">
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
        </div>
      ) : (
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
      )}
    </div>
  );
}
