import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Category() {
  const [category, setCategory] = React.useState("");

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <div style={{ height: "40px" }}>
      <FormControl sx={{ m: 1, minWidth: 120, height: "40px" }}>
        <Select
          style={{ height: "40px" }}
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="">
            <p style={{ color: "lightgrey" }}>Category</p>
          </MenuItem>
          <MenuItem value={10}>Philosophy</MenuItem>
          <MenuItem value={20}>Mathematics</MenuItem>
          <MenuItem value={40}>Languages</MenuItem>
          <MenuItem value={30}>History</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
