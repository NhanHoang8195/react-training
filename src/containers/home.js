import React from 'react';
import { useTranslation } from 'react-i18next';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Home() {
  const { t } = useTranslation('home', );
  return (<div>
      <h1>{t('title', {aaaaa: '1234'})}</h1>
    <p>{t('description.part1', {aaaaa: 'adfjdlskfjas'})}</p>
    <p>{t('description.part2')}</p>
  </div>);
}