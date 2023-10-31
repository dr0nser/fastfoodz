export interface MenuRestaurantInfo {
  id: string;
  name: string;
  city: string;
  slugs: Slugs;
  uniqueId: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  costForTwoMessage: string;
  cuisines: string[];
  avgRating: number;
  feeDetails: FeeDetails;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  aggregatedDiscountInfo: AggregatedDiscountInfo;
  badges: Badges;
  slugString: string;
  isOpen: boolean;
  labels: Label[];
  totalRatings: number;
  aggregatedDiscountInfoV2: AggregatedDiscountInfoV2;
  type: string;
  nudgeBanners: NudgeBanner[];
  headerBanner: HeaderBanner;
  expectationNotifiers: ExpectationNotifier[];
  ratingSlab: string;
  orderabilityCommunication: OrderabilityCommunication;
  hasBestsellerItems: boolean;
  cartOrderabilityNudgeBanner: CartOrderabilityNudgeBanner;
  latLong: string;
}

interface Slugs {
  restaurant: string;
  city: string;
}

interface FeeDetails {
  restaurantId: string;
  fees: Fee[];
  totalFee: number;
  icon: string;
  message: string;
}

interface Fee {
  name: string;
  fee?: number;
}

interface Sla {
  restaurantId: string;
  deliveryTime: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  stressFactor: number;
  rainMode: string;
  longDistance: string;
  zoneId: number;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}

interface Availability {
  nextCloseTime: string;
  visibility: boolean;
  opened: boolean;
  restaurantClosedMeta: RestaurantClosedMeta;
}

interface RestaurantClosedMeta {}

interface AggregatedDiscountInfo {
  header: string;
  shortDescriptionList: ShortDescriptionList[];
  descriptionList: DescriptionList[];
  visible: boolean;
}

interface ShortDescriptionList {
  meta: string;
  discountType: string;
  operationType: string;
}

interface DescriptionList {
  meta: string;
  discountType: string;
  operationType: string;
}

interface Badges {}

interface Label {
  title: string;
  message: string;
}

interface AggregatedDiscountInfoV2 {
  header: string;
  shortDescriptionList: ShortDescriptionList2[];
  descriptionList: DescriptionList2[];
  couponDetailsCta: string;
}

interface ShortDescriptionList2 {
  meta: string;
  discountType: string;
  operationType: string;
}

interface DescriptionList2 {
  meta: string;
  discountType: string;
  operationType: string;
}

interface NudgeBanner {
  minValue: number;
  maxValue: number;
  priority: number;
  couponCode: string;
  discountInfo: DiscountInfo;
  lockedMessage: string;
  unlockedMessage: string;
  logoCtx: LogoCtx;
}

interface DiscountInfo {
  discountType: string;
  value: number;
}

interface LogoCtx {}

interface HeaderBanner {
  url: string;
}

interface ExpectationNotifier {
  text: string;
  icon: Icon;
  popup: Popup;
  type: string;
  enrichedText: string;
  halfCardPopup: HalfCardPopup;
}

interface Icon {
  imageId: string;
}

interface Popup {
  cta: Cta;
}

interface Cta {}

interface HalfCardPopup {
  halfCardPopupHeader: HalfCardPopupHeader;
}

interface HalfCardPopupHeader {}

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

interface CartOrderabilityNudgeBanner {
  parameters: Parameters;
  presentation: Presentation;
}

interface Parameters {}

interface Presentation {}
