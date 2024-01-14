import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels() {
  const [status, setStatus] = React.useState("");

  const handleChange = event => {
    setStatus(event.target.value);
  };

  return (
    <div style={{ height: "40px" }}>
      <FormControl sx={{ m: 1, minWidth: 120, height: "40px" }}>
        <Select
          style={{ height: "40px" }}
          value={status}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="">
            <p style={{ color: "lightgrey", marginBottom: "0px" }}>Status</p>
          </MenuItem>
          <MenuItem value={10}>Declined</MenuItem>
          <MenuItem value={20}>Pending</MenuItem>
          <MenuItem value={40}>Published</MenuItem>
          <MenuItem value={30}>Payment</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
