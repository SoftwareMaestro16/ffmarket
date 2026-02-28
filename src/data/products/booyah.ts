import type { Product } from '../../types/store';

export const booyahPass: Product[] = [
  {
    id: 'enterprise-pack',
    category: 'Booyah Pass',
    image: 'https://static.wikia.nocookie.net/garena-freefire/images/1/10/Booyah_Pass_App_Splash.jpg',
    isHot: true,
    translations: {
      en: { 
        name: 'Booyah Pass', 
        description: 'Unlock exclusive rewards, skins, and bonuses for your Free Fire adventures with the Booyah Pass.' 
      },
      ru: { 
        name: 'Booyah Pass', 
        description: 'Откройте эксклюзивные награды, скины и бонусы для своих приключений в Free Fire с Booyah Pass.' 
      },
      fr: { 
        name: 'Booyah Pass', 
        description: 'Débloquez des récompenses, skins et bonus exclusifs pour vos aventures Free Fire avec le Booyah Pass.' 
      },
      ar: { 
        name: 'بويا باس', 
        description: 'افتح مكافآت حصرية، وأزياء، ومزايا لمغامراتك في فري فاير مع بويا باس.' 
      },
    },
    prices: { USD: 149, RUB: 149, EUR: 149 },
  },
];