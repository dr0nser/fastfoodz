import { useState } from "react";
import RestaurantCards from "../customcomponents/RestaurantCards";
import Sort from "@/customcomponents/Sort";
import Search from "@/customcomponents/Search";

export default function Home() {
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="w-3/5 py-4 mx-auto dark:bg-black">
      {/* will have the filter and search */}
      <div className="flex items-center justify-between text-gray-600">
        <div id="sortby-container" className="flex items-center space-x-5">
          <p className="text-md font-medium dark:text-gray-300">Sort By</p>
          <Sort setSortBy={setSortBy} sortBy={sortBy} />
        </div>
        <div
          id="search-container"
          className="flex w-full max-w-md items-center space-x-2 border border-slate-300 rounded-md"
        >
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
      {/* restaurant cards */}
      <div id="restaurant-cards" className="py-6">
        <RestaurantCards sortBy={sortBy} searchQuery={searchQuery} />
      </div>
    </main>
  );
}
