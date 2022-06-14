import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import ru from './ru';
import it from './it';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
      it: {
        translation: it,
      },
    },
    lng: 'en',
    keySeparator: '.', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
