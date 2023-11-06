import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import supabase from "../contants/supabase";
import { useEffect, useState } from "react";

export default function useOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const { user, isSignedIn } = useUser();

  async function fetchOrders() {
    if (!isSignedIn) return [];
    const loggedInUserId = user.id;
    const { data: orders } = await supabase
      .from("orders")
      .select()
      .eq("user_id", loggedInUserId);
    return orders ? orders : [];
  }

  const { data, isSuccess } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    cacheTime: 0,
  });

  useEffect(() => {
    if (!isSuccess) return;
    setOrders(data);
  }, [data]);

  return orders;
}
