import Home from "./pages/Home";
import Header from "./components/Header";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Divider from "./components/Divider";
import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Section from "./components/Section";
import Hobbies from "./pages/Hobbies";
import { useState } from "react";
import LanguageContext from "./containers/Languages";
import { Language } from "./utils/types";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [language, setLanguage] = useState<string>(Language.FR);

  const themeDark = createTheme({
    typography: {
      fontFamily: ["IBM Plex Sans Arabic"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `linear-gradient(19deg, #1A1A1A 0%, #262626 100%)`,
          },
        },
      },
    },
    palette: {
      background: {
        default: "#262626",
      },
      text: {
        primary: "#ffffff",
      },
      divider: "#ffffff",
    },
  });

  return (
    <ThemeProvider theme={themeDark}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <CssBaseline />
        <ProgressBar />
        <Header />
        <Home />
        <Divider title={"experiences"} />
        <Section children={<Experiences />} />
        <Divider title={"skills"} />
        <Section children={<Skills />} />
        <Divider title={"projects"} />
        <Section children={<Projects />} />
        <Divider title={"hobbies"} />
        <Section children={<Hobbies />} />
        <Divider />
        <Section children={<Contacts />} />
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
