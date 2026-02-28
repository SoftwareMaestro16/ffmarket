import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: {
      hero: {
        title: 'Global Free Fire Top-Up',
        subtitle: 'Donate to Free Fire from restricted regions.',
        description:
          'FFMarket allows players to top-up diamonds securely even if in-game payments are unavailable in their country.',
        button: 'Explore Products',
      },
      languageNames: {
        en: 'English',
        ru: 'Russian',
        fr: 'French',
        ar: 'Arabic',
      },
      footer: {
        description:
          'Your ultimate gaming marketplace for digital products and in-game items.',
        navigation: 'Navigation',
        home: 'Home',
        products: 'Products',
        categories: 'Categories',
        diamonds: 'Diamonds',
        booyah: 'Booyah Pass',
        contact: 'Contact',
        hours: 'Hours',
        text: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        madeWith: 'Made with',
        forGamers: 'for gamers',
      },
      notFound: 'Product not found.',
      back: 'Back',
      product: {
        title: 'Products',
        price: 'Price',
        details: 'Details',
      },
    },
  },
  ru: {
    translation: {
      hero: {
        title: 'Пополнение Free Fire из любой страны',
        subtitle: 'Донат доступен даже в регионах с ограничениями.',
        description:
          'FFMarket помогает игрокам безопасно пополнять алмазы Free Fire даже если официальный донат недоступен.',
        button: 'Смотреть товары',
      },
      languageNames: {
        en: 'Английский',
        ru: 'Русский',
        fr: 'Французский',
        ar: 'Арабский',
      },
      footer: {
        description:
          'Ваш универсальный маркетплейс для цифровых товаров и игровых предметов.',
        navigation: 'Навигация',
        home: 'Главная',
        products: 'Товары',
        categories: 'Категории',
        diamonds: 'Алмазы',
        booyah: 'Booyah Pass',
        contact: 'Контакты',
        hours: 'Время работы',
        text: 'Все права защищены.',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        madeWith: 'Сделано с',
        forGamers: 'для геймеров',
      },
      notFound: 'Продукт не найден.',
      back: 'Назад',
      product: {
        title: 'Товары',
        price: 'Цена',
        details: 'Подробнее',
      },
    },
  },
  fr: {
    translation: {
      hero: {
        title: 'Recharge Free Fire Globalement',
        subtitle: 'Recharge disponible même dans les régions restreintes.',
        description:
          'FFMarket permet aux joueurs de recharger des diamants Free Fire en toute sécurité même si le paiement officiel est bloqué.',
        button: 'Voir les produits',
      },
      languageNames: {
        en: 'Anglais',
        ru: 'Russe',
        fr: 'Français',
        ar: 'Arabe',
      },
      footer: {
        description:
          'Votre marché ultime pour les produits numériques et les objets en jeu.',
        navigation: 'Navigation',
        home: 'Accueil',
        products: 'Produits',
        categories: 'Catégories',
        diamonds: 'Diamants',
        booyah: 'Booyah Pass',
        contact: 'Contact',
        hours: 'Horaires',
        text: 'Tous droits réservés.',
        privacy: 'Politique de confidentialité',
        terms: 'Conditions d’utilisation',
        madeWith: 'Fait avec',
        forGamers: 'pour les joueurs',
      },
      notFound: 'Produit non trouvé.',
      back: 'Retour',
      product: {
        title: 'Produits',
        price: 'Prix',
        details: 'Détails', 
      },
    },
  },
  ar: {
    translation: {
      hero: {
        title: 'شحن فري فاير عالمياً',
        subtitle: 'الشحن متاح حتى في الدول التي تمنع الدفع.',
        description:
          'يتيح لك FFMarket شحن جواهر فري فاير بأمان حتى لو كان الدفع غير متاح في بلدك.',
        button: 'عرض المنتجات',
      },
      languageNames: {
        en: 'الإنجليزية',
        ru: 'الروسية',
        fr: 'الفرنسية',
        ar: 'العربية',
      },
      footer: {
        description:
          'سوقك النهائي للمنتجات الرقمية والعناصر داخل اللعبة.',
        navigation: 'التنقل',
        home: 'الرئيسية',
        products: 'المنتجات',
        categories: 'الفئات',
        diamonds: 'الماس',
        booyah: 'Booyah Pass',
        contact: 'اتصل بنا',
        hours: 'ساعات العمل',
        text: 'جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        madeWith: 'مصنوع بـ',
        forGamers: 'للاعبين',
      },
      notFound: 'المنتج غير موجود.',
      back: 'عودة',
      product: {
        title: 'المنتجات',
        price: 'السعر',
        details: 'تفاصيل',
      },
    },
  },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

