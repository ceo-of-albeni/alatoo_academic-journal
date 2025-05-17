import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export default function Category() {
  const [category, setCategory] = React.useState("");
  const { t, i18n } = useTranslation();

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <div style={{ height: "49px" }}>
      <FormControl sx={{ m: 1, minWidth: 120, height: "49px" }}>
        <Select
          className="text_input max_mb"
          style={{
            height: "49px",
            marginBottom: "120px",
            // display: "flex",
            // alignItems: "center",
          }}
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="">
            <p style={{ color: "lightgrey", marginBottom: "0px" }}>{t("category.category")}</p>
          </MenuItem>
          <MenuItem value={10}>{t("category.1")}</MenuItem>
          <MenuItem value={20}>{t("category.2")}</MenuItem>
          <MenuItem value={40}>{t("category.3")}</MenuItem>
          <MenuItem value={30}>{t("category.4")}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
