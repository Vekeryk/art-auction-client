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
  index: number;
  imageUrl: string;
};

export type Lot = {
  id: string;
  name: string;
  description: string;
  category: Category;
  tags: Tag[];
  images: LotImage[];
  startPrice: number;
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
