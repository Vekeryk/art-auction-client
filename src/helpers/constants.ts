export const NAVIGATE_PATH = {
  home: '/',
  lot: '/lot',
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
