import { useTranslation } from "react-i18next";

import type { Currency, Language } from "../types/store";
import { ChevronDown } from "lucide-react";
import ProductsSection from "../components/features/ProductsSection";

type HomePageProps = {
  language: Language;
  currency: Currency;
};

function HomePage({ language, currency }: HomePageProps) {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-ff-animated">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col">
        <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/90 via-red-800 to-black">
            <div className="absolute inset-0 opacity-20 sm:opacity-30">
              <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-200/90 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-200/90 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 sm:left-76 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
          </div>

          {/* Исправленный паттерн точек */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 2px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-200">
                ⚡ Trusted by 10,000+ gamers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-red-400">
                FFMarket
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              {t("hero.subtitle")}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto border-r-2 border-red-500 pr-2 animate-fade-in-up animation-delay-600">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-800">
              <button
                onClick={scrollToProducts}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-amber-50 bg-red-700/90 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-800/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                <span className="relative flex items-center gap-2">
                  {t("hero.button")}
                  <ChevronDown
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300"
                  />
                </span>

                <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:animate-shine"></span>
              </button>

              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full text-white/90 text-sm sm:text-base font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                Watch trailer
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  Instant
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Delivery</div>
              </div>
            </div>
          </div>

          <div  className="absolute bottom-18 sm:bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div >
        </section>

        <div 

          className="py-6 sm:py-10 md:py-12 mx-auto flex flex-col items-center"
        >
          <h1 className="relative text-3xl sm:text-4xl font-bold text-white mb-6">
            {t("product.title")}
          </h1>

          <ProductsSection language={language} currency={currency} />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
