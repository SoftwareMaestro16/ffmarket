import { useTranslation } from 'react-i18next';

function Banner() {
  const { t } = useTranslation();

  return (
    <section className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 p-8 text-white shadow-lg">
      <h1 className="text-3xl font-bold md:text-4xl">{t('hero.title')}</h1>
      <p className="mt-3 max-w-2xl text-zinc-200">{t('hero.subtitle')}</p>
    </section>
  );
}

export default Banner;
