import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import RestaurantCards from "../customcomponents/RestaurantCards";

export default function Home() {
  const [sortBy, setSortBy] = useState("relevance");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="w-3/5 py-4 mx-auto dark:bg-black">
      {/* will have the filter and search */}
      <div className="flex items-center justify-between text-gray-600">
        <div id="sortby-container" className="flex items-center space-x-5">
          <p className="text-md font-medium dark:text-gray-300">Sort By</p>
          <Select onValueChange={setSortBy} defaultValue={sortBy}>
            <SelectTrigger className="w-44 dark:text-gray-300 dark:border-gray-500">
              <SelectValue placeholder="Select a sort category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="toprated">Top Rated</SelectItem>
                <SelectItem value="deliverytime">Delivery Time</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div
          id="search-container"
          className="flex w-full max-w-md items-center space-x-2 border border-slate-300 rounded-md"
        >
          <Input
            className="dark:text-gray-300"
            type="text"
            placeholder="Search by restaurant names or cuisines"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* restaurant cards */}
      <div id="restaurant-cards" className="py-6">
        <RestaurantCards sortBy={sortBy} searchQuery={searchQuery} />
      </div>
    </main>
  );
}
