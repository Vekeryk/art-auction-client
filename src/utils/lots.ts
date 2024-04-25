import {
  CreateLotFromValues,
  DealType,
  DeliveryMethod,
  Location,
  Lot,
  PaymentMethod,
} from '../types.ts';
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
    title: lotValues.title || 'Ваша назва',
    description: lotValues.description || 'Ваш опис',
    category: lotValues.category || {
      id: 'category_id',
      name: 'Ваша категорія',
    },
    tags: lotValues.tags,
    startingPrice: lotValues.startingPrice || 1,
    currentPrice: lotValues.startingPrice || 1,
    startTime: lotValues.startTime.toISOString(),
    endTime: addDays(
      lotValues.startTime,
      lotValues.durationInDays ?? 1,
    ).toISOString(),
    bids: [],
    comments: [],
    images: [],
    paymentMethods: Object.keys(lotValues.paymentMethods) as PaymentMethod[],
    deliveryMethods: Object.keys(lotValues.deliveryMethods) as DeliveryMethod[],
    dealType: lotValues.dealType || DealType.CASH_ON_DELIVERY,
    location: lotValues.location || Location.IVANO_FRANKIVSK,
    createdAt: '',
    updatedAt: '',
  };
};
