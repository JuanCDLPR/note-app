import React, { useEffect, useState } from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CircleIcon from "@mui/icons-material/Circle";

import CircleIconCat from "./CircleIconCat";
import { useLocalStorage } from "../context/useLocalStorage";

export default function SelectCategoria({
  ValueSelect,
  handleChange = () => {},
  IsAdd = false,
}) {
  const { Categorys } = useLocalStorage();

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={ValueSelect}
        label="Categoria"
        onChange={handleChange}
        sx={{
          "& fieldset": {
            borderColor: "black !important",
          },
        }}
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

        {Categorys.map((item) => {
          return (
            <MenuItem value={item.value} className="d-flex align-items-center">
              {item.name} <CircleIconCat cat={item.value} />
            </MenuItem>
          );
        })}

        {!IsAdd && (
          <MenuItem value={"add"} className="d-flex align-items-center">
            Agregar Categoria{" "}
            <AddCircleIcon
              style={{
                marginLeft: "9px",
                color: "#000000",
              }}
            />
          </MenuItem>
        )}
        {!IsAdd && (
          <MenuItem value={"rem"} className="d-flex align-items-center">
            Eliminar Categoria{" "}
            <RemoveCircleIcon
              style={{
                marginLeft: "9px",
                color: "#000000",
              }}
            />
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
