import { Grid, Typography } from "@mui/material";
import { SkillType } from "../utils/types";

export default function Skill(props: SkillType) {
  const { image, description } = props;

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item xs={6} sx={{ filter: "invert(1)" }}>
        <img alt="" src={image} />
      </Grid>
      <Grid item xs={6}>
        <Typography component="span" variant="h6" color="white">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}
