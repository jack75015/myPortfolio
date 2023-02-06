import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { homeData } from "../utils/data";

export default function Home() {
  return (
    <Container sx={{ minHeight: "100vh" }} component="main" maxWidth="lg">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          {homeData.map((data, index) => (
            <motion.p
              initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
              animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "tween", delay: index }}
            >
              <Typography
                align="center"
                variant={index === 0 ? "h2" : "h4"}
                fontWeight={index === 0 ? "600" : "inherit"}
              >
                {data}
              </Typography>
            </motion.p>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
