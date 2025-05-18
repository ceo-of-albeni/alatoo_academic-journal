import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import { articlesContext } from "../../contexts/articleContext";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export default function BasicTextFields() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams(); 
  const { fetchByParams } = React.useContext(articlesContext);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "300px" },
      }}
      noValidate
      autoComplete="off">
      {/* <TextField id="outlined-basic" label="Search" variant="outlined" /> */}
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: "22px",
        }}>
        <InputBase
          onChange={e => fetchByParams("type", e.target.value)}
          sx={{ ml: 1, flex: 1, fontSize: "14px" }}
          placeholder={t('search.ph')}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
