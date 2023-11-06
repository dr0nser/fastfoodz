import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SortByProps from "@/utils/types/props/SortByProps";
import { memo } from "react";

function Sort({ setSortBy, sortBy }: SortByProps) {
  return (
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
  );
}

export default memo(Sort);
