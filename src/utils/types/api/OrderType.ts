export interface OrderType {
  id: string;
  created_at: string;
  content: Content[];
  user_id: string;
}

interface Content {
  id: string;
  name: string;
  isVeg: number;
  price: number;
  addons: Addon[];
  ribbon: Ribbon;
  imageId: string;
  inStock: number;
  ratings: Ratings;
  badgesV2: BadgesV2;
  category: string;
  quantity: number;
  variants: Variants;
  itemBadge: ItemBadge;
  showImage: boolean;
  variantsV2: VariantsV2;
  description: string;
  itemAttribute: ItemAttribute;
}

interface Addon {
  choices: Choice[];
  groupId: string;
  groupName: string;
  maxAddons: number;
  minAddons: number;
  maxFreeAddons: number;
}

interface Choice {
  id: string;
  name: string;
  isVeg: number;
  inStock: number;
  isEnabled: number;
}

interface Ribbon {}

interface Ratings {
  aggregatedRating: AggregatedRating;
}

interface AggregatedRating {}

interface BadgesV2 {}

interface Variants {}

interface ItemBadge {}

interface VariantsV2 {}

interface ItemAttribute {
  vegClassifier: string;
}
