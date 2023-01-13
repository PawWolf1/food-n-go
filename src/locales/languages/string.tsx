import { PlusImg } from "../images/plus";
import { eng } from "./eng";
import { pl } from "./pl";

const { defaultLanguage } = { defaultLanguage: "pl" };

type LanguageType = "pl" | "eng";
export let language: any = localStorage.getItem("language");
export const initLanguage = (name: LanguageType) => {
  localStorage.setItem("language", name);
  language = localStorage.getItem("language");
};
export const saveLanguage = (name: LanguageType) => {};

export const getString = <AreaName extends keyof typeof pl>(
  area: AreaName,
  stringName: keyof typeof pl[AreaName]
) => {
  if (!language) {
    language = defaultLanguage as LanguageType;
  }
  if (language === "pl") {
    return pl[area][stringName];
  }
  if (language === "eng") {
    return eng[area][stringName];
  }
  return language !== null ? language[area][stringName] : eng[area][stringName];
  // if (language === 'pl') {
  //   return en[area][stringName];
  // }
};

export type StringArea = keyof typeof pl;
