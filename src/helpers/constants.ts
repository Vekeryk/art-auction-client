import { DeliveryMethod, Option, PaymentMethod } from '../types.ts';

export const NAVIGATE_PATH = {
  home: '/',
  lot: '/lots/:id',
  search: '/search',
  createLot: '/create-lot',
  about: '/about',
  any: '*',
};

export const CATEGORIES = [
  { id: 1, name: 'Живопис' },
  { id: 2, name: 'Скульптура' },
  { id: 4, name: 'Сучасне мистецтво' },
  { id: 5, name: 'Графіка' },
  { id: 6, name: 'Антикварна книга' },
  { id: 7, name: 'Кераміка' },
  { id: 8, name: 'Текстильне мистецтво' },
  { id: 9, name: 'Арт-інсталяція' },
];

export const AUCTION_DURATIONS_IN_DAYS = [1, 3, 5, 7, 14, 21, 30];

export const INPUT_PROPS = {
  size: 'small',
  margin: 'normal',
  fullWidth: true,
} as const;

export const PAYMENT_METHODS: Record<PaymentMethod, string> = {
  BANK_TRANSFER: 'Банківський переказ',
  CASH_ON_MEETING: 'Готівкою при зустрічі',
  PAY_TO_COURIER: "Оплата кур'єру",
  BY_AGREEMENT: 'За домовленністю',
} as const;

export const PAYMENT_METHOD_OPTIONS = Object.entries(
  PAYMENT_METHODS,
).map<Option>((entry) => ({ value: entry[0], label: entry[1] }));

export const DELIVERY_METHODS: Record<DeliveryMethod, string> = {
  NOVA_POST: 'Нова Пошта',
  UKR_POST: 'Укрпошта',
  PERSONAL_MEETING: 'Особиста зустріч',
  BY_AGREEMENT: 'За домовленністю',
} as const;

export const DELIVERY_METHOD_OPTIONS = Object.entries(
  DELIVERY_METHODS,
).map<Option>((entry) => ({ value: entry[0], label: entry[1] }));

export const LOCATIONS: Record<string, string> = {
  KYIV: 'Київська область',
  ODESA: 'Одеська область',
  KHARKIV: 'Харківська область',
  DNIPRO: 'Дніпровська область',
  ZAPORIZHZHIA: 'Запоріжська область',
  IVANO_FRANKIVSK: 'Івано-Франківська область',
  CHERKASY: 'Черкаська область',
  CHERNIVTSI: 'Чернівецька область',
  KHERSON: 'Херсонська область',
  KHMELNYTSKYI: 'Хмельницька область',
  LUHANSK: 'Луганська область',
  MYKOLAIV: 'Миколаївська область',
  POLTAVA: 'Полтавська область',
  RIVNE: 'Рівненська область',
  SUMY: 'Сумська область',
  TERNOPIL: 'Тернопільська область',
  VINNYTSIA: 'Вінницька область',
  VOLYN: 'Волинська область',
  ZAKARPATTIA: 'Закарпатська область',
  ZHYTOMYR: 'Житомирська область',
  KROPYVNYTSKYI: 'Кропивницька область',
  DONETSK: 'Донецька область',
} as const;

export const LOCATION_OPTIONS = Object.entries(LOCATIONS).map<Option>(
  (entry) => ({ value: entry[0], label: entry[1] }),
);

export const DEAL_TYPES = {
  PREPAYMENT: 'Передоплата',
  CASH_ON_DELIVERY: 'Оплата при отриманні',
} as const;

export const DEAL_TYPE_OPTIONS = Object.entries(DEAL_TYPES).map<Option>(
  (entry) => ({ value: entry[0], label: entry[1] }),
);
