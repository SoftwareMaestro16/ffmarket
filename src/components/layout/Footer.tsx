import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Heart } from 'lucide-react';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative mt-7 border-t border-white/10 bg-black/80 backdrop-blur-xl text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"></div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4">
            <button onClick={scrollToTop} className="flex items-center gap-2 text-xl sm:text-2xl font-bold group">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all">
                FFMarket
              </span>
              <ShoppingCart className="text-yellow-400 group-hover:scale-110 transition-transform" size={20} />
            </button>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.description', 'Your ultimate gaming marketplace for digital products and in-game items.')}
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:support@ffmarket.com" className="p-2 bg-white/5 rounded-lg hover:bg-yellow-400 hover:text-black transition-all hover:scale-110">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-4">
              {t('footer.navigation', 'Navigation')}
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {t('footer.home', 'Home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToProducts}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {t('footer.products', 'Products')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-4">
              {t('footer.categories', 'Categories')}
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToProducts}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {t('footer.diamonds', 'Diamonds')}
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToProducts}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {t('footer.booyah', 'Booyah Pass')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-4">
              {t('footer.contact', 'Contact')}
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">
                <span className="block text-white/60 text-xs">Email</span>
                <a href="mailto:support@ffmarket.com" className="hover:text-yellow-400 transition-colors">
                  support@ffmarket.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <span className="block text-white/60 text-xs">{t('footer.hours', 'Hours')}</span>
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              &copy; {currentYear} FFMarket. {t('footer.text')}
            </p>

            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-yellow-400 transition-colors">
                {t('footer.privacy', 'Privacy Policy')}
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-yellow-400 transition-colors">
                {t('footer.terms', 'Terms of Service')}
              </Link>
            </div>

            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
              <span>{t('footer.madeWith', 'Made with')}</span>
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              <span>{t('footer.forGamers', 'for gamers')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;