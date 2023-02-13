import { createContext } from "react";
import { Language } from "../utils/types";

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageContext = createContext<LanguageContextType>({
  language: Language.FR,
  setLanguage: () => {},
});

export default LanguageContext;
