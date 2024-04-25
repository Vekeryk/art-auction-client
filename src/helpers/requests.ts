import axiosInstance from '../utils/axios.ts';
import { Category, CreateLot, Lot, LotImage, Tag } from '../types.ts';

export const fetchCategories = async () => {
  const response = await axiosInstance.get<Category[]>('categories');
  return response.data;
};

export const fetchLot = async (id?: string) => {
  const response = await axiosInstance.get<Lot>(`lots/${id}`, {
    params: { id },
  });
  return response.data;
};

export const fetchTags = async () => {
  const response = await axiosInstance.get<Tag[]>('tags');
  return response.data;
};

export const createLot = async (data: Partial<CreateLot>) => {
  const response = await axiosInstance.post<Lot>('lots', data);
  return response.data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await axiosInstance.post<LotImage>('images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
