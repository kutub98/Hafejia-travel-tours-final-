import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const Translation = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className="flex justify-between">
      <h1>Phone: 0010495849</h1>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="bn">Bn</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default Translation;
