import { CreateLotFromValues, Lot } from '../types.ts';
import { addDays } from 'date-fns';

export const getEnumValues = <T extends object>(someEnum: T) => {
  return Object.keys(someEnum).filter((k) => isNaN(Number(k)));
};

export const getPicturePath = (fileName: string) => {
  return `http://localhost:3000/uploads/${fileName}`;
};

export const getPreviewLot = (lotValues: CreateLotFromValues): Lot => {
  return {
    id: 'lot_id',
    name: lotValues.title || 'Ваша назва',
    description: lotValues.description || 'Ваш опис',
    category: lotValues.category || {
      id: 'category_id',
      name: 'Ваша категорія',
    },
    tags: lotValues.tags,
    images: lotValues.images || [],
    startPrice: lotValues.startPrice || 1,
    currentPrice: lotValues.startPrice || 1,
    startTime: lotValues.startTime.toISOString(),
    endTime: addDays(
      lotValues.startTime,
      lotValues.durationInDays ?? 1,
    ).toISOString(),
    comments: [],
    bids: [],
    paymentMethods: [],
    deliveryMethods: [],
    createdAt: '',
    updatedAt: '',
  };
};
