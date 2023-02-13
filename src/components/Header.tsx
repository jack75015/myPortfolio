import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ marginLeft: "auto", flexGrow: 0, display: "inline" }}>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
