import React  from 'react';
import { useTranslation } from 'react-i18next';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Home() {
  const { t, i18n } = useTranslation();
  return (<div>
      <h1>{t('description.part1')}</h1>
    <button onClick={() => i18n.changeLanguage('en')}>en</button>
    <button onClick={() => i18n.changeLanguage('de')}>de</button>
  </div>);
}