import { Control, FieldValues, Path } from 'react-hook-form';

export type Theme = 'light' | 'dark';

export type ImagePreview = {
  id: string;
  img: string;
  title: string;
};

export type CurrentUser = {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  rating: number;
  profilePicture?: string;
};

export type BaseUser = {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  rating: number;
  profilePicture?: string;
};

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  difference: number;
};

export type Tag = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type LotImage = {
  id: string;
  image: string;
  createdAt: string;
};

export enum LotStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  CLOSED = 'CLOSED',
}

export enum PaymentMethod {
  BANK_TRANSFER = 'BANK_TRANSFER',
  CASH_ON_MEETING = 'CASH_ON_MEETING',
  PAY_TO_COURIER = 'PAY_TO_COURIER',
  BY_AGREEMENT = 'BY_AGREEMENT',
}

export enum DeliveryMethod {
  NOVA_POST = 'NOVA_POST',
  UKR_POST = 'UKR_POST',
  PERSONAL_MEETING = 'PERSONAL_MEETING',
  BY_AGREEMENT = 'BY_AGREEMENT',
}

export enum Location {
  KYIV = 'KYIV',
  ODESA = 'ODESA',
  KHARKIV = 'KHARKIV',
  DNIPRO = 'DNIPRO',
  ZAPORIZHZHIA = 'ZAPORIZHZHIA',
  IVANO_FRANKIVSK = 'IVANO_FRANKIVSK',
  CHERKASY = 'CHERKASY',
  CHERNIVTSI = 'CHERNIVTSI',
  KHERSON = 'KHERSON',
  KHMELNYTSKYI = 'KHMELNYTSKYI',
  LUHANSK = 'LUHANSK',
  MYKOLAIV = 'MYKOLAIV',
  POLTAVA = 'POLTAVA',
  RIVNE = 'RIVNE',
  SUMY = 'SUMY',
  TERNOPIL = 'TERNOPIL',
  VINNYTSIA = 'VINNYTSIA',
  VOLYN = 'VOLYN',
  ZAKARPATTIA = 'ZAKARPATTIA',
  ZHYTOMYR = 'ZHYTOMYR',
  KROPYVNYTSKYI = 'KROPYVNYTSKYI',
  DONETSK = 'DONETSK',
}

export enum DealType {
  PREPAYMENT = 'PREPAYMENT',
  CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
}

export type Lot = {
  id: string;
  title: string;
  description: string;
  user: BaseUser;
  leader: BaseUser | null;
  category: Category;
  tags: Tag[];
  images: LotImage[];
  status: LotStatus;
  startingPrice: number;
  currentPrice: number;
  startTime: string;
  endTime: string;
  bids: Bid[];
  comments: LotComment[];
  paymentMethods: PaymentMethod[];
  deliveryMethods: DeliveryMethod[];
  dealType: DealType;
  location: Location;
  createdAt: string;
  updatedAt: string;
};

export type CreateLotFormValues = {
  title: string;
  description: string;
  category?: Category;
  tags: Tag[];
  startingPrice?: number;
  startTime: Date;
  durationInDays?: number;
  dealType: DealType;
  paymentMethods: Record<PaymentMethod, boolean>;
  deliveryMethods: Record<DeliveryMethod, boolean>;
  location: Location;
};

export type SearchLotsQuery = {
  categoryId: string;
  tagIds: string[];
  location: Location;
  page: number;
  limit: number;
};

export type PageableLots = {
  lots: Lot[];
  count: number;
};

export type SearchLotsFormValues = {
  category?: Category;
  tags: Tag[];
  location: Location;
};

export type GenericFormControl<T extends FieldValues> = {
  required?: boolean;
  control: Control<T>;
  name: Path<T>;
  clearOption?: boolean;
};

export type CreateLot = {
  title: string;
  description: string;
  categoryId: string;
  tagIds: string[];
  imageIds: string[];
  startingPrice: number;
  startTime: Date;
  durationInDays: number;
  dealType: DealType;
  paymentMethods: PaymentMethod[];
  deliveryMethods: DeliveryMethod[];
  location: Location;
};

export type CreateComment = {
  content: string;
  lotId: string;
};

export type Bid = {
  id: string;
  amount: number;
  userId: string;
  createdAt: string;
};

export type EnrichedBid = {
  id: string;
  amount: number;
  user: BaseUser;
  createdAt: string;
};

export type LotComment = {
  id: string;
  content: string;
  user: BaseUser;
  createdAt: string;
};

export type Option = {
  value: string;
  label: string;
};

export type Notification = {
  id: string;
  message: string;
  createdAt: string;
};

export type Message = {
  id: string;
  message: string;
  sender: BaseUser;
  receiver: BaseUser;
  createdAt: string;
};

export type RawMessage = {
  id: string;
  message: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
};

export type Dialog = {
  person: BaseUser;
  messages: RawMessage[];
};
