export interface RestaurantCardType {
  info: Info;
  analytics: Analytics;
  cta: Cta;
  widgetId: string;
}

interface Info {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  veg: boolean;
  feeDetails: FeeDetails;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  badges: Badges;
  isOpen: boolean;
  type: string;
  badgesV2: BadgesV2;
  aggregatedDiscountInfoV3: AggregatedDiscountInfoV3;
  orderabilityCommunication: OrderabilityCommunication;
  differentiatedUi: DifferentiatedUi;
  reviewsSummary: ReviewsSummary;
  displayType: string;
  restaurantOfferPresentationInfo: RestaurantOfferPresentationInfo;
}

interface FeeDetails {
  restaurantId: string;
  fees: Fee[];
  totalFee: number;
}

interface Fee {
  name: string;
  fee?: number;
}

interface Sla {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}

interface Availability {
  nextCloseTime: string;
  opened: boolean;
}

interface Badges {
  imageBadges: ImageBadge[];
}

interface ImageBadge {
  imageId: string;
  description: string;
}

interface BadgesV2 {
  entityBadges: EntityBadges;
}

interface EntityBadges {
  imageBased: ImageBased;
  textBased: TextBased;
  textExtendedBadges: TextExtendedBadges;
}

interface ImageBased {
  badgeObject: BadgeObject[];
}

interface BadgeObject {
  attributes: Attributes;
}

interface Attributes {
  description: string;
  imageId: string;
}

interface TextBased {}

interface TextExtendedBadges {}

interface AggregatedDiscountInfoV3 {
  header: string;
  subHeader: string;
}

interface OrderabilityCommunication {
  title: Title;
  subTitle: SubTitle;
  message: Message;
  customIcon: CustomIcon;
}

interface Title {}

interface SubTitle {}

interface Message {}

interface CustomIcon {}

interface DifferentiatedUi {
  displayType: string;
  differentiatedUiMediaDetails: DifferentiatedUiMediaDetails;
}

interface DifferentiatedUiMediaDetails {
  mediaType: string;
  lottie: Lottie;
  video: Video;
}

interface Lottie {}

interface Video {}

interface ReviewsSummary {}

interface RestaurantOfferPresentationInfo {}

interface Analytics {
  context: string;
}

interface Cta {
  link: string;
  text: string;
  type: string;
}
