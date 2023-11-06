export interface MenuNestedCategoryType {
  categories: MenuCategoryType[];
  title: string;
  type: string;
}

export interface MenuCategoryType {
  title: string;
  items: MenuItemType[];
  type: string;
}

export interface MenuItemType {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: string;
  inStock: number;
  isVeg?: number;
  price: number;
  defaultPrice?: number;
  variants: Variants;
  variantsV2: VariantsV2;
  itemAttribute: ItemAttribute;
  ribbon: Ribbon;
  showImage: boolean;
  itemBadge: ItemBadge;
  badgesV2: BadgesV2;
  ratings: Ratings;
  addons?: Addon[];
  isBestseller?: boolean;
}

interface Variants {}

interface VariantsV2 {}

interface ItemAttribute {
  vegClassifier: string;
  spiceLevel?: string;
  portionSize?: string;
  accompaniments?: string;
}

interface Ribbon {
  text?: string;
  textColor?: string;
  topBackgroundColor?: string;
  bottomBackgroundColor?: string;
}

interface ItemBadge {}

interface BadgesV2 {}

interface Ratings {
  aggregatedRating: AggregatedRating;
}

interface AggregatedRating {
  rating: string;
  ratingCount: string;
  ratingCountV2: string;
}

interface Addon {
  groupId: string;
  groupName: string;
  choices: Choice[];
  maxAddons: number;
  maxFreeAddons: number;
}

interface Choice {
  id: string;
  name: string;
  price: number;
  inStock: number;
  isVeg?: number;
  isEnabled: number;
}
