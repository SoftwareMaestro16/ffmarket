
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import MainLayout from './layout/MainLayout';
import type { Currency, Language } from './types/store';
import i18n from './i18n/config';

const defaultCurrencyByLanguage: Record<Language, Currency> = {
  en: 'USD',
  ru: 'RUB',
  fr: 'EUR',
  ar: 'USD', 
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>(defaultCurrencyByLanguage.ru);

  useEffect(() => {
    void i18n.changeLanguage(language);
    setCurrency(defaultCurrencyByLanguage[language]);
  }, [language]);

  return (
    <BrowserRouter>
      <MainLayout
        language={language}
        currency={currency}
        onLanguageChange={setLanguage}
        onCurrencyChange={setCurrency}
      >
        <Routes>
          <Route path="/" element={<HomePage language={language} currency={currency} />} />
          <Route path="/products/:productId" element={<ProductPage language={language} currency={currency} />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
