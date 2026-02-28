export type Language = 'en' | 'ru' | 'fr' | 'ar';
export type Currency = 'USD' | 'RUB' | 'EUR';

export type ProductTranslation = {
  name: string;
  description: string;
};

export type Product = {
  id: string;
  category: 'Diamonds' | 'Booyah Pass' | 'Evo Subscription';
  translations: Record<Language, ProductTranslation>;
  prices: Record<Currency, number>;
  image: string;
  isHot?: boolean;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
};