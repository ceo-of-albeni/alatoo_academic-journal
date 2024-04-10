import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from 'react-i18next';

export default function SelectLabels() {
  const { t, i18n } = useTranslation();
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
          <MenuItem value={10}>{t('status.10')}</MenuItem>
          <MenuItem value={20}>{t('status.20')}</MenuItem>
          <MenuItem value={40}>{t('status.40')}</MenuItem>
          <MenuItem value={30}>{t('status.30')}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
