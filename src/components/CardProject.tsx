import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { CardProjectType } from "../utils/types";
import { onClickHandler } from "../utils/utils";

export default function CardProject(props: CardProjectType) {
  const { title, imagePath, descriptions, link, date } = props;

  return (
    <Card
      sx={{
        boxShadow: 6,
        borderRadius: "30px",
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <CardHeader
        color="text.primary"
        title={
          <>
            <Typography variant="h5" color="text.primary">
              {title}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {date}
            </Typography>
          </>
        }
      />

      <CardContent>
        <img
          style={{
            maxHeight: "250px",
            maxWidth: "250px",
            padding: "5px",
            objectFit: "contain",
            borderRadius: "30px",
            cursor: "pointer",
          }}
          src={imagePath}
          onClick={() => onClickHandler(link)}
        />
      </CardContent>

      <CardContent>
        {descriptions.map((description) => (
          <Typography variant="body2" color="text.primary">
            {description}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
