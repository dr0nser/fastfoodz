import { cartAtom } from "@/recoil/atom/cartAtom";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../customcomponents/CartItem";
import { CartItemType } from "@/utils/types/app/CartItemType";
import { Button } from "@/components/ui/button";
import supabase from "@/utils/contants/supabase";
import { useUser } from "@clerk/clerk-react";
import { useToast } from "@/components/ui/use-toast";

export default function Cart() {
  const [cart, setCart] = useRecoilState<CartItemType[]>(cartAtom);
  const { isSignedIn, user } = useUser();
  const { toast } = useToast();
  const navigate = useNavigate();

  async function submitOrder() {
    if (!isSignedIn || cart.length === 0) navigate("/sign-in");
    const loggedInUser = user!;
    const loggedInUserId = loggedInUser.id;
    const { error } = await supabase
      .from("orders")
      .insert({ content: cart, user_id: loggedInUserId });
    if (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem submitting the order!",
      });
    } else {
      toast({
        title: "Your order was created successfully!",
      });
      setCart([]);
      const appObject = localStorage.getItem("fastfoodz");
      if (appObject) {
        const parsed = JSON.parse(appObject);
        parsed.cart = [];
        localStorage.setItem("fastfoodz", JSON.stringify(parsed));
      }
    }
  }

  return (
    <main className="w-3/5 mx-auto flex-grow py-3">
      {cart.length > 0 ? (
        cart.map((cartItem: CartItemType) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))
      ) : (
        <div className="w-full h-full flex justify-around mt-32">
          <div className="flex flex-col justify-center items-center">
            <img
              className="h-60 mb-2"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            />
            <p className="text-xl font-semibold text-gray-500 dark:text-gray-300 mb-2 cursor-default">
              Your cart is empty
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 cursor-default">
              You can go to home page to view more restaurants
            </p>
            <Link to="/">
              <button className="text-white px-6 py-2 bg-orange-500 font-semibold text-xl hover:shadow-xl">
                See Restaurants Near You
              </button>
            </Link>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <Button
          onClick={() => submitOrder()}
          className="w-full mt-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 dark:text-white text-lg"
        >
          Order
        </Button>
      )}
    </main>
  );
}
