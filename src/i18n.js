import {createI18n} from "vue-i18n";
import es from './assets/i18n/es.json'
import en from './assets/i18n/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        es,
        en
    }
    }
)

export default i18n;