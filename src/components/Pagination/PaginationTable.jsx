import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack
      sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}
      spacing={2}>
      <Pagination count={6} page={page} onChange={handleChange} />
    </Stack>
  );
}
