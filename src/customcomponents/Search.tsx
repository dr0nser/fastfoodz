import { Input } from "@/components/ui/input";
import SearchProps from "@/utils/types/props/SearchProps";
import { memo } from "react";

function Search({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <Input
      className="dark:text-gray-300"
      type="text"
      placeholder="Search by restaurant names or cuisines"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default memo(Search);
