import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MenuItemsWithCategory from "./MenuItemsWithCategory";
import { MenuItemsWithNestedCategoryProps } from "@/utils/types/props/MenuItemsWithNestedCategoryProps";
import { MenuCategoryType } from "@/utils/types/app/MenuCategoryType";

export default function MenuItemsWithNestedCategory({
  data,
}: MenuItemsWithNestedCategoryProps) {
  return (
    <AccordionItem
      className="dark:border-gray-600 dark:text-gray-300"
      value={`${data.title}`}
    >
      <AccordionTrigger className="text-lg font-bold">
        {data.title} ({data.categories.length})
      </AccordionTrigger>
      <AccordionContent>
        <Accordion type="single" collapsible className="w-full">
          {data.categories.map((category: MenuCategoryType) => (
            <MenuItemsWithCategory
              key={category.title}
              data={category}
              categoryStyles="ml-2 font-semibold"
              menuItemStyles="ml-4"
            />
          ))}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
}
