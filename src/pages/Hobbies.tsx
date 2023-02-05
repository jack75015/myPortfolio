import { Container, Grid } from "@mui/material";
import Skill from "../components/Skill";
import { hobbiesData } from "../utils/data";

export default function Hobbies() {
  return (
    <Container sx={{ minHeight: "30vh" }} component="main" maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        sx={{ textAlign: "center" }}
        spacing={5}
      >
        {hobbiesData.map(({ image, description }) => (
          <Grid item lg={4} pr={1}>
            <Skill image={image} description={description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
