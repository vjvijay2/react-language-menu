// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      movies: "Movies",
      tvShows: "TV Shows",
      sports: "Sports",
      live: "Live",
      settings: "Settings",
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      movies: "Films",
      tvShows: "Émissions de télévision",
      sports: "Sports",
      live: "En direct",
      settings: "Paramètres",
    }
  },
  de: {
    translation: {
      home: "Zuhause",
      movies: "Filme",
      tvShows: "Fernsehsendungen",
      sports: "Sport",
      live: "Live",
      settings: "Einstellungen",
    }
  },
  ru: {
    translation: {
      home: "Главная",
      movies: "Фильмы",
      tvShows: "ТВ-шоу",
      sports: "Спорт",
      live: "Прямой эфир",
      settings: "Настройки",
    }
  },
  es: {
    translation: {
      home: "Inicio",
      movies: "Películas",
      tvShows: "Programas de TV",
      sports: "Deportes",
      live: "En vivo",
      settings: "Configuraciones",
    }
  },
  zh: {
    translation: {
      home: "主页",
      movies: "电影",
      tvShows: "电视剧",
      sports: "体育",
      live: "直播",
      settings: "设置",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
