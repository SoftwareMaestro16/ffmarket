import ProductCategory from './ProductsCategory';
import type { Currency, Language } from '../../types/store';
import { products } from '../../data/products';

type ProductsSectionProps = {
  language: Language;
  currency: Currency;
};

export default function ProductsSection({ language, currency }: ProductsSectionProps) {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div id='products'>
      {categories.map(category => {
        const categoryProducts = products.filter(p => p.category === category);
        return (
          <ProductCategory
            key={category}
            categoryName={category}
            products={categoryProducts}
            language={language}
            currency={currency}
          />
        );
      })}
    </div>
  );
}