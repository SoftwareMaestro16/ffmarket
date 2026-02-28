import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Currency, Language, Product } from "../../types/store";
import { formatPrice } from "../../utils/price";
import { Sparkles, Zap } from "lucide-react";

type ProductCardProps = {
  product: Product;
  language: Language;
  currency: Currency;
};

function ProductCard({ product, language, currency }: ProductCardProps) {
  const { t } = useTranslation();
  const translation = product.translations[language];

  return (
    <article className="group relative flex flex-col overflow-visible rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={translation.name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isHot && (
          <div className="absolute z-20 top-2 left-2">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg border border-yellow-300/30">
              <Zap size={14} className="fill-black" />
              HOT
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex flex-col flex-1 p-4 relative">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
          {translation.name}
        </h3>

        <p className="text-sm text-zinc-400 flex-1 line-clamp-2">
          {translation.description}
        </p>

        <div className="mt-4 flex gap-2">
          <div className="flex-1 relative overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-2.5">
              <span className="flex items-center gap-1 text-black font-black text-sm uppercase tracking-wider">
                <Sparkles size={14} className="text-black" />
                {formatPrice(product.prices[currency], currency)}
              </span>
            </div>
          </div>

          <Link
            to={`/products/${product.id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-1 relative overflow-hidden rounded-lg bg-gradient-to-r from-zinc-800 to-black p-[2px] hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
          >
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-black px-3 py-2.5 text-white hover:bg-transparent transition-colors duration-300">
              <span className="text-sm font-bold uppercase tracking-wider">
                {t("product.details")}
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Zap size={12} />
            {t("product.instant", "Instant Delivery")}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
