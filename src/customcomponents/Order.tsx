import OrderPropType from "@/utils/types/props/OrderPropType";

export default function Order({ data }: OrderPropType) {
  const parsedDate = Date.parse(data.created_at);
  const dateString = new Date(parsedDate).toLocaleString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="dark:text-gray-300 py-3 my-5 shadow-lg rounded-lg p-3 border border-gray-100 dark:border-gray-600">
      <p className="mb-2 font-semibold text-gray-500">{dateString}</p>
      {data.content.map((item: any) => (
        <div
          key={item.id}
          className="flex justify-between px-3 py-1 font-semibold text-lg"
        >
          <p>{item.name}</p>
          <p>x{item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
