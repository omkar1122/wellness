import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// JSON files
import english from "./Languages/english.json";
import Hindi from "./Languages/Hindi.json";

const resources = {
    en: {
        translation: english
    },
    ar: {
        translation: Hindi
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
    });

export default i18n;