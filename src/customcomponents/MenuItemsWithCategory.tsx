import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MenuItem from "./MenuItem";
import { MenuItemsWithCategoryProps } from "@/utils/types/props/MenuItemsWithCategoryProps";
import { MenuItemType } from "@/utils/types/app/MenuCategoryType";

export default function MenuItemsWithCategory({
  data,
  categoryStyles,
  menuItemStyles,
}: MenuItemsWithCategoryProps) {
  return (
    <AccordionItem
      className="dark:border-gray-600 dark:text-gray-300"
      value={`${data.title}`}
    >
      <AccordionTrigger className={`text-lg font-bold ${categoryStyles}`}>
        {data.title} ({data.items.length})
      </AccordionTrigger>
      <AccordionContent>
        {data.items.map((menuItem: MenuItemType) => (
          <MenuItem
            key={menuItem.id}
            data={menuItem}
            menuItemStyles={menuItemStyles}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
