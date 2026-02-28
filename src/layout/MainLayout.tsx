import type { PropsWithChildren } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import type { Currency, Language } from '../types/store';

type MainLayoutProps = PropsWithChildren<{
  language: Language;
  currency: Currency;
  onLanguageChange: (value: Language) => void;
  onCurrencyChange: (value: Currency) => void;
}>;

function MainLayout({
  children,
  language,
  currency,
  onLanguageChange,
  onCurrencyChange,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-zinc-900">
      <Header
        language={language}
        currency={currency}
        onLanguageChange={onLanguageChange}
        onCurrencyChange={onCurrencyChange}
      />
      <main className="flex-1 mx-auto w-full">{children}</main>      
      <Footer />
    </div>
  );
}

export default MainLayout;
