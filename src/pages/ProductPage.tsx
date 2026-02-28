import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import type { Currency, Language } from '../types/store';
import { formatPrice } from '../utils/price';
import { MessageCircle, Mail, ArrowLeft, Sparkles, Shield, Clock } from 'lucide-react';

type ProductPageProps = {
  language: Language;
  currency: Currency;
};

function ProductPage({ language, currency }: ProductPageProps) {
  const { t } = useTranslation();
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === productId);

  const getWhatsAppMessage = (): string => {
    if (!product) return '';
    
    const translation = product.translations[language];
    const price = formatPrice(product.prices[currency], currency);
    
    const messages: Record<Language, string> = {
      en: `Hello! I would like to buy ${translation.name} for ${price}.`,
      ru: `Добрый день! Хочу купить ${translation.name} за ${price}.`,
      fr: `Bonjour! Je voudrais acheter ${translation.name} pour ${price}.`,
      ar: `مرحباً! أريد شراء ${translation.name} مقابل ${price}.`
    };
    
    return messages[language] || messages.en;
  };

  const getEmailSubject = (): string => {
    if (!product) return '';
    
    const translation = product.translations[language];
    
    const subjects: Record<Language, string> = {
      en: `Inquiry about ${translation.name}`,
      ru: `Запрос о ${translation.name}`,
      fr: `Demande concernant ${translation.name}`,
      ar: `استفسار عن ${translation.name}`
    };
    
    return subjects[language] || subjects.en;
  };

  const getEmailBody = (): string => {
    if (!product) return '';
    
    const translation = product.translations[language];
    const price = formatPrice(product.prices[currency], currency);
    
    const bodies: Record<Language, string> = {
      en: `Hello,\n\nI am interested in purchasing ${translation.name} for ${price}.\n\nPlease provide more information.\n\nThank you!`,
      ru: `Здравствуйте!\n\nЯ заинтересован в покупке ${translation.name} за ${price}.\n\nПожалуйста, предоставьте больше информации.\n\nСпасибо!`,
      fr: `Bonjour,\n\nJe suis intéressé par l'achat de ${translation.name} pour ${price}.\n\nVeuillez me fournir plus d'informations.\n\nMerci!`,
      ar: `مرحباً،\n\nأنا مهتم بشراء ${translation.name} مقابل ${price}.\n\nيرجى تزويدي بمزيد من المعلومات.\n\nشكراً!`
    };
    
    return bodies[language] || bodies.en;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://wa.me/21692455024?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    window.location.href = `mailto:support@ffmarket.com?subject=${subject}&body=${body}`;
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="relative max-w-md w-full bg-gradient-to-b from-zinc-900 to-black rounded-3xl border border-red-500/20 p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-red-600/5 blur-3xl"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
              <Sparkles size={32} className="text-red-500" />
            </div>
            <p className="mb-4 text-xl font-bold text-white">{t('notFound')}</p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              <ArrowLeft size={18} />
              {t('back')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const translation = product.translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950/30 to-black py-4 sm:py-6 px-4 sm:px-6 relative overflow-hidden">
      {/* Анимированные фоновые элементы с красными тонами */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Основной красный градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-red-950/20"></div>
        
        {/* Пульсирующие красные круги */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full filter blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-700/5 rounded-full filter blur-3xl animate-pulse"></div>
        
        {/* Дополнительные красные акценты */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl animate-float-delay"></div>
        
        {/* Красные линии по краям */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        
        {/* Движущиеся красные частицы */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-red-400/40 rounded-full animate-float-particle"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-500/30 rounded-full animate-float-particle-delay"></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-red-600/20 rounded-full animate-float-particle-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-400/25 rounded-full animate-float-particle"></div>
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-red-500/35 rounded-full animate-float-particle-delay"></div>
        
        {/* Красная сетка */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'grid-move 25s linear infinite'
        }}></div>
        
        {/* Красные точки с мерцанием */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.4) 1px, transparent 0)',
          backgroundSize: '50px 50px',
          animation: 'flicker 5s ease-in-out infinite'
        }}></div>
        
        {/* Сканирующие красные линии */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/40 to-transparent animate-scan"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/40 to-transparent animate-scan-reverse"></div>
        
        {/* Вертикальные сканирующие линии */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-red-400/30 to-transparent animate-scan-vertical"></div>
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-red-400/30 to-transparent animate-scan-vertical-reverse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Кнопка назад с красным акцентом */}
<button
  onClick={() => {
    navigate('/', { replace: false }); // переходим на главную
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 50); // небольшой таймаут, чтобы DOM успел отрендериться
  }}
  className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm border border-red-500/20 text-white rounded-xl hover:bg-red-500/10 hover:border-red-500/40 transition-all group relative overflow-hidden"
>
  <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
  {t('back')}
</button>

        {/* Основная карточка товара с красной обводкой */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gradient-to-b from-zinc-900/95 to-black/95 backdrop-blur-sm rounded-3xl border border-red-500/20 hover:border-red-500/40 p-4 sm:p-6 shadow-2xl shadow-red-500/5 animate-fade-in-up">
          
          {/* Блок с изображением */}
          <div className="relative group">
            {/* Бейдж категории */}
            <div className="absolute z-10 top-4 left-4 animate-bounce-gentle">
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-red-500/30">
                <Sparkles size={14} className="animate-spin-slow" />
                {product.category}
              </span>
            </div>
            
            {/* Изображение с красной рамкой при наведении */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-red-500/20 group-hover:border-red-500/60 transition-all duration-500">
              <img 
                src={product.image} 
                alt={translation.name} 
                className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Красный градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Анимированная красная рамка */}
              <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 rounded-2xl transition-all duration-500 scale-105 group-hover:scale-100"></div>
            </div>

            {/* Мини статистика с красным фоном */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white/80 text-xs sm:text-sm">
              <span className="flex items-center gap-1 bg-red-950/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-500/30 hover:bg-red-600/30 transition-colors animate-pulse-glow">
                <Shield size={14} className="text-red-400" />
                Secure
              </span>
              <span className="flex items-center gap-1 bg-red-950/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-500/30 hover:bg-red-600/30 transition-colors animate-pulse-glow-delay">
                <Clock size={14} className="text-red-400" />
                Instant
              </span>
            </div>
          </div>

          {/* Блок с информацией */}
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {/* Заголовок и описание */}
            <div className="animate-slide-in-right">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 hover:text-red-400 transition-colors">
                {translation.name}
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {translation.description}
              </p>
            </div>

            {/* Цена с красным акцентом */}
            <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 p-[2px] rounded-xl w-full sm:w-auto animate-pulse-glow">
              <div className="bg-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                <span className="text-xl text-zinc-400">{t('product.price')}</span>
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500 animate-shimmer">
                  {formatPrice(product.prices[currency], currency)}
                </p>
              </div>
            </div>

            {/* Кнопки Contact Seller */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp кнопка */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-4 py-4 rounded-xl font-bold text-sm sm:text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-600/30 relative overflow-hidden group/btn"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                <MessageCircle size={20} className="animate-bounce-gentle" />
                WhatsApp
              </button>

              {/* Email кнопка */}
              <button
                onClick={handleEmailClick}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-4 py-4 rounded-xl font-bold text-sm sm:text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30 relative overflow-hidden group/btn"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                <Mail size={20} className="animate-bounce-gentle-delay" />
                Email
              </button>
            </div>

            {/* Дополнительная информация с красными точками */}
            <div className="text-xs text-zinc-500 border-t border-red-500/20 pt-4">
              <p className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                ✓ Instant delivery after payment
              </p>
              <p className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse animation-delay-200"></span>
                ✓ 24/7 customer support
              </p>
              <p className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse animation-delay-400"></span>
                ✓ Secure payment
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default ProductPage;