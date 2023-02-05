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
function App() {
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
      <CssBaseline />
      {/* <Header /> */}
      <Home />
      <Divider title={"Expériences"} />
      <Section children={<Experiences />} />
      <Divider title={"Compétences"} />
      <Section children={<Skills />} />
      <Divider title={"Projets"} />
      <Section children={<Projects />} />
      <Divider title={"Activités"} />
      <Section children={<Hobbies />} />
      <Divider />
      <Section children={<Contacts />} />
    </ThemeProvider>
  );
}

export default App;
