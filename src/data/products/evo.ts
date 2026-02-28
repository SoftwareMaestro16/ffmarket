import type { Product } from '../../types/store';

export const evo: Product[] = [
  {
    id: 'evo-3days',
    category: 'Evo Subscription',
    image: 'https://i.ytimg.com/vi/KZIWPLeKQBs/hq720.jpg',
    isHot: false,
    translations: {
      en: { 
        name: 'Evo Subscription - 3 Days', 
        description: 'Access exclusive weapons for 3 days with the Evo Subscription.' 
      },
      ru: { 
        name: 'Подписка Evo - 3 дня', 
        description: 'Получите доступ к эксклюзивному оружию на 3 дня с подпиской Evo.' 
      },
      fr: { 
        name: 'Abonnement Evo - 3 Jours', 
        description: 'Accédez à des armes exclusives pendant 3 jours avec l’abonnement Evo.' 
      },
      ar: { 
        name: 'اشتراك Evo - 3 أيام', 
        description: 'احصل على وصول إلى الأسلحة الحصرية لمدة 3 أيام مع اشتراك Evo.' 
      },
    },
    prices: { USD: 10, RUB: 100, EUR: 10 },
  },

  {
    id: 'evo-7days',
    category: 'Evo Subscription',
    image: 'https://pic.bittopup.com/apiUpload/f3c8b5d20d29f5adb2846e15a8b44bf5.jpg',
    isHot: false,
    translations: {
      en: { 
        name: 'Evo Subscription - 7 Days', 
        description: 'Access exclusive weapons for 7 days with the Evo Subscription.' 
      },
      ru: { 
        name: 'Подписка Evo - 7 дней', 
        description: 'Получите доступ к эксклюзивному оружию на 7 дней с подпиской Evo.' 
      },
      fr: { 
        name: 'Abonnement Evo - 7 Jours', 
        description: 'Accédez à des armes exclusives pendant 7 jours avec l’abonnement Evo.' 
      },
      ar: { 
        name: 'اشتراك Evo - 7 أيام', 
        description: 'احصل على وصول إلى الأسلحة الحصرية لمدة 7 أيام مع اشتراك Evo.' 
      },
    },
    prices: { USD: 20, RUB: 200, EUR: 20 },
  },

  {
    id: 'evo-1month',
    category: 'Evo Subscription',
    image: 'https://i.ytimg.com/vi/i0tlhzMq66o/hq720.jpg',
    isHot: true,
    translations: {
      en: { 
        name: 'Evo Subscription - 1 Month', 
        description: 'Access exclusive weapons for 1 month with the Evo Subscription.' 
      },
      ru: { 
        name: 'Подписка Evo - 1 месяц', 
        description: 'Получите доступ к эксклюзивному оружию на 1 месяц с подпиской Evo.' 
      },
      fr: { 
        name: 'Abonnement Evo - 1 Mois', 
        description: 'Accédez à des armes exclusives pendant 1 mois avec l’abonnement Evo.' 
      },
      ar: { 
        name: 'اشتراك Evo - 1 شهر', 
        description: 'احصل على وصول إلى الأسلحة الحصرية لمدة شهر واحد مع اشتراك Evo.' 
      },
    },
    prices: { USD: 50, RUB: 500, EUR: 50 },
  },
];