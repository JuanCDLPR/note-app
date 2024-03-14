import React from "react";
import {
  MenuItem,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import CircleIconCat from "./CircleIconCat";

export default function SelectCategoria({
  ValueSelect,
  handleChange = () => {},
  IsAdd = false,
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ValueSelect}
        label="Categoria"
        onChange={handleChange}
      >
        {!IsAdd && <MenuItem value={0}>Todo</MenuItem>}
        <MenuItem value={1}>
          Idea <CircleIconCat cat={1} />
        </MenuItem>
        <MenuItem value={2}>
          Tarea <CircleIconCat cat={2} />
        </MenuItem>
        <MenuItem value={3}>
          Recordatorio <CircleIconCat cat={3} />
        </MenuItem>
        <MenuItem value={4}>
          Borrador <CircleIconCat cat={4} />
        </MenuItem>
        <MenuItem value={5} className="d-flex align-items-center">
          S/C <CircleIconCat cat={5} />
        </MenuItem>
      </Select>
    </FormControl>
  );
}
