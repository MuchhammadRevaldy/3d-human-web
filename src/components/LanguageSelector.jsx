import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide on explore page
  if (location.pathname === '/explore') return null;

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'id', name: 'Indonesia', native: 'Bahasa Indonesia' }
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-wrapper">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="lang-overlay-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="lang-options-modal glass-panel"
              initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <h3 className="lang-modal-title">Select Language</h3>
              <div className="lang-list">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option-btn ${i18n.language === lang.code ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <div className="lang-info">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-native">{lang.native}</span>
                    </div>
                    {i18n.language === lang.code && <Check size={18} className="check-icon" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        className="floating-lang-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Globe size={24} />
        <span className="current-lang-badge">{i18n.language.toUpperCase()}</span>
      </motion.button>

      <style>{`
        .language-selector-wrapper {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
        }

        .floating-lang-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0077ff 0%, #a78bfa 100%);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0, 119, 255, 0.3);
          position: relative;
        }

        .current-lang-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #1a1a3a;
          color: white;
          font-size: 10px;
          font-weight: 800;
          padding: 2px 5px;
          border-radius: 6px;
          border: 1.5px solid white;
        }

        .lang-overlay-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          z-index: -1;
        }

        .lang-options-modal {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 240px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0, 50, 150, 0.15);
        }

        .lang-modal-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #5a6a8a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 16px 4px;
        }

        .lang-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .lang-option-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 16px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          width: 100%;
        }

        .lang-option-btn:hover {
          background: rgba(0, 119, 255, 0.05);
          border-color: rgba(0, 119, 255, 0.1);
        }

        .lang-option-btn.active {
          background: rgba(255, 255, 255, 0.9);
          border-color: #0077ff;
          box-shadow: 0 4px 15px rgba(0, 119, 255, 0.1);
        }

        .lang-info {
          display: flex;
          flex-direction: column;
        }

        .lang-name {
          font-weight: 700;
          color: #1a1a3a;
          font-size: 1rem;
        }

        .lang-native {
          font-size: 0.8rem;
          color: #5a6a8a;
        }

        .check-icon {
          color: #0077ff;
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
