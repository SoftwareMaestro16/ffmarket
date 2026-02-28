import type { Currency } from '../types/store';

const localeByCurrency: Record<Currency, string> = {
  USD: 'en-US',
  EUR: 'fr-FR',
  RUB: 'ru-RU',
};

export const formatPrice = (value: number, currency: Currency): string => {
  return new Intl.NumberFormat(localeByCurrency[currency], {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value);
};
