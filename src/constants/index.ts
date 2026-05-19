/* eslint-disable max-len */
import { PerPageType, SortType } from '../types/Types';

export const SORT_OPTIONS = [
  { label: 'Newest', value: SortType.AGE },
  { label: 'Alphabetically', value: SortType.TITLE },
  { label: 'Cheapest', value: SortType.PRICE },
];

export const PER_PAGE_OPTIONS = [
  { label: '4', value: PerPageType.FOUR },
  { label: '8', value: PerPageType.EIGHT },
  { label: '16', value: PerPageType.SIXTEEN },
  { label: 'All', value: PerPageType.ALL },
];

export const RIGHTS_PATH =
  'https://github.com/Nazarii-Lesniak/advanced-react-phone-catalog?tab=GPL-3.0-1-ov-file';

export const GIT_HUB_REPO =
  'https://github.com/Nazarii-Lesniak/advanced-react-phone-catalog';

export const CONTACTS =
  'https://github.com/Nazarii-Lesniak/advanced-react-phone-catalog/blob/main/LICENSE';
