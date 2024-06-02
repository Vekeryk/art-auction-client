import auctionAxios from '../utils/auctionAxios.ts';
import bidsAxios from '../utils/bidsAxios.ts';
import {
  BaseUser,
  Bid,
  Category,
  CreateComment,
  CreateLot,
  Dialog,
  Lot,
  LotComment,
  LotImage,
  Message,
  Notification,
  PageableLots,
  SearchLotsQuery,
  Tag,
} from '../types.ts';

export const fetchCategories = async () => {
  const response = await auctionAxios.get<Category[]>('categories');
  return response.data;
};

export const fetchLot = async (id?: string) => {
  const response = await auctionAxios.get<Lot>(`lots/${id}`);
  return response.data;
};

export const fetchBids = async (lotId: string) => {
  const { data } = await bidsAxios.get<Bid[]>(`bids/lot/${lotId}`);
  return data;
};

export const fetchUsers = async (ids: string[]) => {
  const { data } = await auctionAxios.post<BaseUser[]>('users', { ids });
  return data;
};

export const fetchRecentLots = async () => {
  const response = await auctionAxios.get<PageableLots>('lots');
  return response.data.lots;
};

export const fetchUserLots = async (userId: string) => {
  const response = await auctionAxios.get<Lot[]>(`lots/user/${userId}`);
  return response.data;
};

export const searchLotsByTitle = async (title: string) => {
  const response = await auctionAxios.get<Pick<Lot, 'id' | 'title'>[]>('lots', {
    params: { title },
  });
  return response.data;
};

export const fetchFilteredLots = async (params: Partial<SearchLotsQuery>) => {
  const response = await auctionAxios.get<PageableLots>(`lots`, { params });
  return response.data;
};

export const fetchTags = async () => {
  const response = await auctionAxios.get<Tag[]>('tags');
  return response.data;
};

export const createLot = async (data: Partial<CreateLot>) => {
  const response = await auctionAxios.post<Lot>('lots', data);
  return response.data;
};

export const createComment = async (data: CreateComment) => {
  const response = await auctionAxios.post<LotComment>('comments', data);
  return response.data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await auctionAxios.post<LotImage>('images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const fetchNotifications = async () => {
  const { data } = await auctionAxios.get<Notification[]>('notifications');
  return data;
};

export const readNotifications = async () => {
  await auctionAxios.post('notifications/read');
};

export const fetchDialogs = async () => {
  const { data } = await auctionAxios.get<Message[]>(`messages`);
  return data;
};

export const fetchDialogMessages = async (personId?: string) => {
  const { data } = await auctionAxios.get<Dialog>(`messages/user/${personId}`);
  return data;
};

export const sendMessage = async (message: string, receiverId?: string) => {
  const { data } = await auctionAxios.post('messages', {
    message,
    receiverId,
  });
  return data;
};
