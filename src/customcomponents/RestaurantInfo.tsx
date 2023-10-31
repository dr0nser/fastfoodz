import { AiFillStar } from "react-icons/ai";

export default function RestaurantInfo({ info }: any) {
  return (
    <div id="restaurant-info" className="border-b dark:border-gray-600 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold tracking-tight pb-2">
            {info.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {info.cuisines}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {info.areaName}, {info.sla.lastMileTravelString}
          </p>
        </div>
        <div className="text-center border dark:border-gray-600 rounded-lg p-3">
          <div className="pb-2 text-xl text-green-700 dark:text-green-500 flex items-center justify-center space-x-1 w-full border-b dark:border-gray-500">
            <p className="font-semibold">{info.avgRatingString}</p>
            <AiFillStar />
          </div>
          <p className="font-semibold text-gray-400 pt-2">
            {info.totalRatingsString}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 pt-2">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${info.feeDetails.icon}`}
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {info.feeDetails.message}
        </p>
      </div>
    </div>
  );
}
