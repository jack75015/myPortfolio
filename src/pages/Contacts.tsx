import { Button, Grid, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { onClickHandler } from "../utils/utils";
import { githubLink, linkedinLink, twitterLink } from "../hooks/useData";

export default function Contacts() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ textAlign: "center", marginTop: "60px", marginBottom: "30px" }}
    >
      <Grid item xs={4}>
        <Button size="small" sx={{ color: "white" }}>
          <TwitterIcon
            fontSize="large"
            onClick={() => onClickHandler(twitterLink)}
          />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button size="small" sx={{ color: "white" }}>
          <GitHubIcon
            fontSize="large"
            onClick={() => onClickHandler(githubLink)}
          />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button size="small" sx={{ color: "white" }}>
          <LinkedInIcon
            fontSize="large"
            onClick={() => onClickHandler(linkedinLink)}
          />
        </Button>
      </Grid>
      <Grid item xs={12}>
        Made with ❤️ in Paris 🇫🇷
      </Grid>
      <Grid item xs={12}>
        <Link href="https://github.com/jack75015/myPortfolio">Code</Link>
      </Grid>
    </Grid>
  );
}
