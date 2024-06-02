import {
  CreateLotFormValues,
  DealType,
  DeliveryMethod,
  Location,
  Lot,
  LotImage,
  LotStatus,
  PaymentMethod,
} from '../types.ts';
import { addDays } from 'date-fns';

export const getEnumValues = <T extends object>(someEnum: T) => {
  return Object.keys(someEnum).filter((k) => isNaN(Number(k)));
};

export const getPicturePath = (fileName?: string) => {
  if (!fileName) return undefined;
  return `${import.meta.env.VITE_AUCTION_SERVICE_API_URL}/uploads/${fileName}`;
};

export const getPreviewLot = (
  lotValues: Partial<CreateLotFormValues>,
  lotImages: LotImage[],
): Lot => {
  const startTime = lotValues.startTime ?? new Date();
  return {
    id: 'lot_id',
    title: lotValues.title || 'Ваша назва',
    description: lotValues.description || 'Ваш опис',
    user: {
      id: '1',
      username: 'username',
      rating: 10,
    },
    leader: null,
    status: LotStatus.ACTIVE,
    category: lotValues.category || {
      id: 'category_id',
      name: 'Ваша категорія',
    },
    tags: lotValues.tags ?? [],
    startingPrice: lotValues.startingPrice || 1,
    currentPrice: lotValues.startingPrice || 1,
    startTime: startTime.toISOString(),
    endTime: addDays(startTime, lotValues.durationInDays ?? 1).toISOString(),
    bids: [],
    comments: [],
    images: lotImages,
    paymentMethods: Object.keys(
      lotValues.paymentMethods ?? {},
    ) as PaymentMethod[],
    deliveryMethods: Object.keys(
      lotValues.deliveryMethods ?? {},
    ) as DeliveryMethod[],
    dealType: lotValues.dealType || DealType.CASH_ON_DELIVERY,
    location: lotValues.location || Location.IVANO_FRANKIVSK,
    createdAt: '',
    updatedAt: '',
  };
};
