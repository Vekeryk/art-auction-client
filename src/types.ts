export type Theme = 'light' | 'dark';

export type ImagePreview = {
  id: string;
  img: string;
  title: string;
};

export type BaseUser = {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string;
  createdAt: string;
};

export type Lot = {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
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
