import React, { useState } from "react";
import { Languages } from "../Views/LanguageSettings/LanguageSettings.model";
const defaultLanguage = Languages.English;

export const LanguageContext = React.createContext({});

export const LanguageProvider = ({
  children,
  language,
}: {
  language: Languages;
  children: JSX.Element;
}) => {
  const [currentLanguage, setCurrentLanguage] = useState(
    language || defaultLanguage
  );

  const changeLanguage = (language: Languages) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ language: currentLanguage, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageConsumer = LanguageContext.Consumer;
