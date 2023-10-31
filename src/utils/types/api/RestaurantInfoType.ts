export interface RestaurantInfoType {
  id: string;
  name: string;
  cloudinaryImageId: string;
  // this property is added in getRestaurants() in useRestaurantCards
  cta: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
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

export interface FeeDetails {
  restaurantId: string;
  fees: Fee[];
  totalFee: number;
}

export interface Fee {
  name: string;
  fee?: number;
}

export interface Sla {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}

export interface Availability {
  nextCloseTime: string;
  opened: boolean;
}

export interface Badges {}

export interface BadgesV2 {
  entityBadges: EntityBadges;
}

export interface EntityBadges {
  imageBased: ImageBased;
  textBased: TextBased;
  textExtendedBadges: TextExtendedBadges;
}

export interface ImageBased {}

export interface TextBased {}

export interface TextExtendedBadges {}

export interface AggregatedDiscountInfoV3 {
  header: string;
  subHeader: string;
}

export interface OrderabilityCommunication {
  title: Title;
  subTitle: SubTitle;
  message: Message;
  customIcon: CustomIcon;
}

export interface Title {}

export interface SubTitle {}

export interface Message {}

export interface CustomIcon {}

export interface DifferentiatedUi {
  displayType: string;
  differentiatedUiMediaDetails: DifferentiatedUiMediaDetails;
}

export interface DifferentiatedUiMediaDetails {
  mediaType: string;
  lottie: Lottie;
  video: Video;
}

export interface Lottie {}

export interface Video {}

export interface ReviewsSummary {}

export interface RestaurantOfferPresentationInfo {}
