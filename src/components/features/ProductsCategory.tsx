import ProductCard from './ProductCard';
import type { Currency, Language } from '../../types/store';
import type { Product } from '../../types/store';
import { useTranslation } from 'react-i18next';

type ProductCategoryProps = {
  categoryName: string;
  products: Product[];
  language: Language;
  currency: Currency;
};

export default function ProductCategory({
  categoryName,
  products,
  language,
  currency,
}: ProductCategoryProps) {
  const { t } = useTranslation();

  if (products.length === 0) return null;

  return (
   <section  className="relative w-full py-4 sm:py-6 overflow-hidden">
  {/* Анимированный фоновый градиент на всю секцию */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20"></div>
  
  {/* Пульсирующие красные частицы на всю секцию */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/20 rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
  </div>
  
  {/* Красные линии пульсации на всю секцию */}
  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
  
  {/* Красные точки на всю секцию */}
  <div className="absolute inset-0 opacity-30" style={{
    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(239, 68, 68, 0.3) 1px, transparent 0)',
    backgroundSize: '50px 50px'
  }}></div>

  {/* Контент с относительным позиционированием */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
    <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-left text-white">
      {t(`footer.${categoryName.toLowerCase()}`, categoryName)}
    </h3>
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          language={language}
          currency={currency}
        />
      ))}
    </div>
  </div>
</section>
  );
}