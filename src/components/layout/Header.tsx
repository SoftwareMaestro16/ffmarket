import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Currency, Language } from "../../types/store";
import { ShoppingCart, Menu, X } from "lucide-react";
import CustomSelect from "../ui/CustomSelect";
import { useState } from "react";

type HeaderProps = {
  language: Language;
  currency: Currency;
  onLanguageChange: (value: Language) => void;
  onCurrencyChange: (value: Currency) => void;
};

const languages: Language[] = ["en", "ru", "fr", "ar"];
const currencies: Currency[] = ["USD", "RUB", "EUR"];

function Header({
  language,
  currency,
  onLanguageChange,
  onCurrencyChange,
}: HeaderProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Лого */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-yellow-400 transition-colors"
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-yellow-300">
            FFMarket
          </span>
          <ShoppingCart className="text-yellow-400 group-hover:scale-110 transition-transform" size={20} />
        </Link>

        {/* Десктоп навигация */}
        <nav className="hidden md:flex items-center gap-3">
          <CustomSelect
            value={language}
            options={languages.map((l) => ({
              value: l,
              label: t(`languageNames.${l}`),
            }))}
            onChange={onLanguageChange}
          />

          <CustomSelect
            value={currency}
            options={currencies.map((c) => ({
              value: c,
              label: c,
            }))}
            onChange={onCurrencyChange}
          />
        </nav>

        {/* Мобильное меню кнопка */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Мобильное меню дропдаун */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-3">
              <CustomSelect
                value={language}
                options={languages.map((l) => ({
                  value: l,
                  label: t(`languageNames.${l}`),
                }))}
                onChange={onLanguageChange}
              />
              <CustomSelect
                value={currency}
                options={currencies.map((c) => ({
                  value: c,
                  label: c,
                }))}
                onChange={onCurrencyChange}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;