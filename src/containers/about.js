import React  from 'react';
import { useTranslation } from 'react-i18next';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function About() {
  const { t } = useTranslation('about');
  return (<div>
    <h1>{t('title')}</h1>
    <p>{t('description.part1')}</p>
    <p>{t('description.part2')}</p>
  </div>);
}