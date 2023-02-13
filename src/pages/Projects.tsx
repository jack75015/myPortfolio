import { Container, Grid } from "@mui/material";
import CardProject from "../components/CardProject";
import { useData } from "../hooks/useData";

export default function Projects() {
  const data = useData();
  return (
    <Container sx={{ minHeight: "100vh" }} component="main" maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        sx={{ textAlign: "center" }}
        spacing={5}
      >
        {data.projectsData.map(
          ({ title, link, imagePath, descriptions, date }) => (
            <Grid item lg={4} pr={1}>
              <CardProject
                title={title}
                link={link}
                imagePath={imagePath}
                descriptions={descriptions}
                date={date}
              />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
}
