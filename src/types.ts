export type Theme = 'light' | 'dark';

export type ImagePreview = {
  id: string;
  img: string;
  title: string;
};

export type CurrentUser = {
  username: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string;
};

export type BaseUser = {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string;
  createdAt: string;
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
  name: string;
  description: string;
  category: Category;
  tags: Tag[];
  images: LotImage[];
  startingPrice: number;
  currentPrice: number;
  startTime: string;
  endTime: string;
  comments: LotComment[];
  bids: Bid[];
  paymentMethods: string[];
  deliveryMethods: string[];
  createdAt: string;
  updatedAt: string;
};

export type CreateLotFromValues = {
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

export type Bid = {
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
