import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Language } from "../utils/types";
import LanguageContext from "../containers/Languages";

export default function LanguageSwitcher() {
  const { language, setLanguage } = React.useContext(LanguageContext);

  const options = [
    {
      icon: "🇫🇷",
      key: Language.FR,
    },
    {
      icon: "🇬🇧",
      key: Language.EN,
    },
  ];
  const currentLanguage = options.find((elem) => elem.key === language);

  return (
    <Grid container spacing={1}>
      {options.map((option) => (
        <Grid item xs={6}>
          <Typography
            onClick={() => setLanguage(option.key)}
            variant="h5"
            textAlign="center"
            sx={{
              textShadow:
                option !== currentLanguage ? null : "#FFFF 1px 0 5px;",
              cursor: "pointer",
            }}
          >
            {option.icon}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
