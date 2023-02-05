import { Container, Grid } from "@mui/material";
import CardProject from "../components/CardProject";
import { projectsData } from "../utils/data";

export default function Projects() {
  return (
    <Container sx={{ minHeight: "100vh" }} component="main" maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        sx={{ textAlign: "center" }}
        spacing={5}
      >
        {projectsData.map(({ title, link, imagePath, descriptions, date }) => (
          <Grid item lg={4} pr={1}>
            <CardProject
              title={title}
              link={link}
              imagePath={imagePath}
              descriptions={descriptions}
              date={date}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
