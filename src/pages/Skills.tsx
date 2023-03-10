import { Container, Grid } from "@mui/material";
import Skill from "../components/Skill";
import { useData } from "../hooks/useData";

export default function Skills() {
  const data = useData();
  return (
    <Container sx={{ minHeight: "50vh" }} component="main" maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        sx={{ textAlign: "center" }}
        spacing={5}
      >
        {data.skillsData.map(({ image, description }, index) => (
          <Grid key={index} item lg={4} pr={1}>
            <Skill image={image} description={description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
