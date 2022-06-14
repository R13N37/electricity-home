import React, { useEffect, useState } from "react";
import LanguageSettingsView from "./LanguageSettings.view";
import american from "../../assets/icons/united.svg";
import russian from "../../assets/icons/russia.svg";
import italian from "../../assets/icons/italy.svg";
import { ILanguageSetting, Languages } from "./LanguageSettings.model";
import { useTranslation } from "react-i18next";

const LanguageSettings = () => {
  const { i18n } = useTranslation();
  const [showState, setShowState] = useState<boolean>(false);
  const [selectedLanguageState, setSelectedLanguageState] = useState<Languages>(
    Languages.English
  );
  const languages: ILanguageSetting[] = [
    {
      icon: american,
      title: Languages.English,
    },
    {
      icon: italian,
      title: Languages.Italian,
    },
    {
      icon: russian,
      title: Languages.Russian,
    },
  ];

  useEffect(() => {
    const localization = localStorage.getItem("localization") as Languages;
    setSelectedLanguageState(() => localization);
  }, []);
  useEffect(() => {
    i18n.changeLanguage(selectedLanguageState);
  }, [selectedLanguageState, i18n]);

  const handleLanguageSelection = (language: Languages) => {
    setSelectedLanguageState(() => language);
    i18n.changeLanguage(language);
    localStorage.setItem("localization", language);
    setShowState(() => false);
  };

  const selectedLanguage =
    languages.find(
      (language: ILanguageSetting) => language.title === selectedLanguageState
    ) || languages[0];
  return (
    <LanguageSettingsView
      show={showState}
      languages={languages}
      onLanguageSelect={handleLanguageSelection}
      selectedLanguage={selectedLanguage}
      onClick={() => setShowState((prev: boolean) => !prev)}
    ></LanguageSettingsView>
  );
};

export default LanguageSettings;
