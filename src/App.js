import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import the i18n configuration
import './index.css';

const App = () => {
  const { t, i18n } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState("home");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const menuItems = [
    { id: "home", label: t('home'), image: "/images/home.jpg" },
    { id: "movies", label: t('movies'), image: "/images/movies.jpg" },
    { id: "tvShows", label: t('tvShows'), image: "/images/tvshows.jpg" },
    { id: "sports", label: t('sports'), image: "/images/sports.jpg" },
    { id: "live", label: t('live'), image: "/images/live.jpg" },
    { id: "settings", label: t('settings') }
  ];

  return (
    <div className="app">
      <nav className="menu">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedMenu(item.id)}
            className={selectedMenu === item.id ? 'active' : ''}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {selectedMenu === "settings" ? (
        <div className="settings">
          <label>{t('settings')}:</label>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
            <option value="zh">Chinese</option>
          </select>
        </div>
      ) : (
        <div className="content">
          <div className="image-container">
            <div className="shadow">
              <h1>{t(selectedMenu)}</h1>
            </div>
            <img src={menuItems.find(item => item.id === selectedMenu).image} alt={selectedMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
