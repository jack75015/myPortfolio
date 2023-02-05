import { Container, Grid } from "@mui/material";
import Skill from "../components/Skill";
import { skillsData } from "../utils/data";

export default function Skills() {
  return (
    <Container sx={{ minHeight: "50vh" }} component="main" maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        sx={{ textAlign: "center" }}
        spacing={5}
      >
        {skillsData.map(({ image, description }) => (
          <Grid item lg={4} pr={1}>
            <Skill image={image} description={description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
