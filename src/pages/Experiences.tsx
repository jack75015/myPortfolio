import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { experiencesData } from "../utils/data";
import { ExperienceType } from "../utils/types";
import useMediaQuery from "@mui/material/useMediaQuery";
interface TabPanelProps {
  experience: ExperienceType;
  index: number;
  value: number;
}

export default function Experiences() {
  const smallScreen = useMediaQuery("(max-width: 768px)");

  const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  const TabPanel = (props: TabPanelProps) => {
    const { experience, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4">{experience.job}</Typography>
            <Typography variant="h6">{experience.date}</Typography>
            <Typography variant="body1" color="text.primary">
              <ul>
                {experience.missions.map((mission) => (
                  <>
                    <li style={{ marginBottom: "30px" }}>
                      <Typography
                        sx={{ textDecoration: "underline" }}
                        variant="body1"
                      >
                        {mission.title}{" "}
                        {mission.date ? `(${mission.date})` : null}
                      </Typography>
                      <Typography variant="body1">
                        {mission.description}
                      </Typography>
                    </li>
                  </>
                ))}
              </ul>
            </Typography>
          </Box>
        )}
      </div>
    );
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const generateTabLabel = (experience: ExperienceType): any => (
    <>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={!smallScreen ?? 6}>
          <img src={experience.imagePath} />
        </Grid>
        {!smallScreen ? (
          <Grid item xs={6}>
            <Typography variant="h6" color="white">
              {experience.title}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );

  return (
    <Container sx={{ minHeight: "70vh" }} component="main" maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={!smallScreen ?? 3}>
          <Tabs
            orientation={smallScreen ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{
              alignItems: "self-start",
              justifyContent: "flex-start",
            }}
          >
            {experiencesData.map((experience, index) => (
              <Tab label={generateTabLabel(experience)} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Grid>

        <Grid item xs={!smallScreen ?? 9}>
          {experiencesData.map((experience, index) => (
            <TabPanel value={value} index={index} experience={experience} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
