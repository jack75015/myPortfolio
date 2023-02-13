import { Divider as MUIDivider, Typography } from "@mui/material";
import { useData } from "../hooks/useData";
import { DividerType } from "../utils/types";

export default function Divider(props: DividerType) {
  const { title } = props;
  const data = useData();
  return (
    <MUIDivider sx={{ margin: "5%", fontSize: "large" }} variant="middle">
      {title ? (
        <Typography variant="h4" color="text.primary" fontWeight="600">
          {data.divider[title]}
        </Typography>
      ) : null}
    </MUIDivider>
  );
}
