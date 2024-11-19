import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {en,hi,ma} from './translations'



const resources = {
    en : {
        translation : en,
    },
    hi : {
        translation : hi,
    },
    ma : {
        translation : ma,
    }
}

i18next
  .use(initReactI18next) 
  .init({
    debug: true,
    compatibilityJSON : 'v3',
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
    resources,
  });

export default i18next;