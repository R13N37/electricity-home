import React from "react";

import classes from "./LanguageSettings.module.css";
import { ILanguageSetting, Languages } from "./LanguageSettings.model";

type Props = {
  show: boolean;
  languages: ILanguageSetting[];
  selectedLanguage: ILanguageSetting;
  onLanguageSelect: (language: Languages) => void;
  onClick: () => void;
};
const LanguageSettingsView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes["languageWrapper"]}>
      <div onClick={props.onClick} className={classes["selectedLanguage"]}>
        <img
          className={classes["icon"]}
          src={props.selectedLanguage.icon}
          alt={props.selectedLanguage.title}
        ></img>
      </div>
      {props.show && (
        <div className={classes["optionWrapper"]}>
          {props.languages.map((language: ILanguageSetting) => {
            return (
              <div
                onClick={() => props.onLanguageSelect(language.title)}
                className={classes["option"]}
              >
                <img
                  className={classes["icon"]}
                  src={language.icon}
                  alt={language.title}
                ></img>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSettingsView;
