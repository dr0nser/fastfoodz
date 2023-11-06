import Order from "@/customcomponents/Order";
import useOrders from "@/utils/hooks/useOrders";
import { OrderType } from "@/utils/types/api/OrderType";

export default function Orders() {
  const orders = useOrders();

  return (
    <main className="w-3/5 mx-auto flex-grow py-3">
      <p className="text-gray-600 dark:text-gray-300 text-2xl font-semibold">
        Orders
      </p>
      {orders.map((order: OrderType) => (
        <Order key={order.id} data={order} />
      ))}
    </main>
  );
}
