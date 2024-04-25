import axios from 'axios';

import { Category, CreateLot, Lot, LotImage, Tag } from '../types.ts';

export const fetchCategories = async () => {
  const response = await axios.get<Category[]>(
    'http://localhost:3000/categories',
  );
  return response.data;
};

export const fetchTags = async () => {
  const response = await axios.get<Tag[]>('http://localhost:3000/tags');
  return response.data;
};

export const createLot = async (data: Partial<CreateLot>) => {
  const response = await axios.post<Lot>('http://localhost:3000/lots', data);
  return response.data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await axios.post<LotImage>(
    'http://localhost:3000/images',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};
