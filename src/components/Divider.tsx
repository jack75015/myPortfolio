import { Divider as MUIDivider, Typography } from "@mui/material";
import { DividerType } from "../utils/types";

export default function Divider(props: DividerType) {
  const { title } = props;

  return (
    <MUIDivider sx={{ margin: "5%", fontSize: "large" }} variant="middle">
      {title ? (
        <Typography variant="h4" color="text.primary" fontWeight="600">
          {title}
        </Typography>
      ) : null}
    </MUIDivider>
  );
}
