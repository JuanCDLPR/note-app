import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormGroup,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Row } from "react-bootstrap";

import { useEffect } from "react";
import useLocalStorage from "../context/useLocalStorage";
import { getDateFormat } from "../lib/generals";
import SelectCategoria from "./SelectCategoria";

export default function ModalModNote({
  onClose = () => {},
  setNotes = () => {},
  notes = [],
  indice,
}) {
  const { ModifyNote } = useLocalStorage();

  const [Values, setValues] = useState({
    titulo: notes[indice].title,
    desc: notes[indice].desc,
  });

  const [Errores, setErrores] = useState({
    titulo: false,
    desc: false,
  });
  const [ValueSelect, setValueSelect] = useState(notes[indice].cat ?? 5);

  const handleChange = ({ target }) => {
    setValueSelect(target.value);
  };

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setValues({ ...Values, [name]: value });

    setErrores({ ...Errores, [name]: false });
  };

  const Guardar = () => {
    if (Values.titulo == "") {
      setErrores({ ...Errores, titulo: true });
      return;
    }

    if (Values.desc == "") {
      setErrores({ ...Errores, desc: true });
      return;
    }

    const newNotes = JSON.parse(JSON.stringify(notes));
    const date = getDateFormat();

    const newItem = {
      title: Values.titulo,
      desc: Values.desc,
      cat: ValueSelect,
      create: newNotes[indice].create,
      modify: date,
    };

    newNotes[indice] = newItem;

    setNotes(newNotes);
    ModifyNote(Values.titulo, Values.desc, date, indice, ValueSelect);

    onClose();
  };

  return (
    <>
      <Dialog fullWidth maxWidth="sm" open={true}>
        <IconButton
          aria-label="Close"
          className="m-2"
          style={{ position: "absolute", right: "0%" }}
          onClick={() => {
            onClose();
          }}
        >
          <CloseIcon style={{ width: "30px", height: "30px" }} />
        </IconButton>
        <DialogTitle>
          <h5 className="fw-bolder f-12 mt-2">Editar Nota</h5>
        </DialogTitle>
        <DialogContent>
          <div className="px-1 py-2">
            <Row>
              <Col xs={12} className="p-3">
                <SelectCategoria
                  ValueSelect={ValueSelect}
                  handleChange={handleChange}
                  IsAdd
                />
              </Col>
              <Col xs={12} className="p-3">
                <TextField
                  label="Titulo"
                  value={Values.titulo}
                  error={Errores.titulo}
                  onChange={handleInputChange}
                  name="titulo"
                  size="small"
                  fullWidth
                  helperText={Errores.titulo ? "Llenar el titulo" : ""}
                />
              </Col>

              <Col xs={12} className="p-3">
                <TextField
                  label="Descricion"
                  value={Values.desc}
                  error={Errores.desc}
                  onChange={handleInputChange}
                  name="desc"
                  rows={6}
                  multiline
                  fullWidth
                  helperText={Errores.desc ? "Llenar la descripcion" : ""}
                />
              </Col>
            </Row>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={Guardar}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
