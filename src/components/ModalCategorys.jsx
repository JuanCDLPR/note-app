import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Row } from "react-bootstrap";

import { useEffect } from "react";
import { useLocalStorage } from "../context/useLocalStorage";

export default function ModalCategorys({ onClose = () => {}, action = "" }) {
  const { AddCategory } = useLocalStorage();

  const [Values, setValues] = useState({
    name: "",
    color: "#bb1185",
  });
  const [intervalo, setIntervalo] = React.useState("");

  const [Errores, setErrores] = useState({
    name: false,
    color: false,
  });

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    //console.log(value, " ", name);

    setValues({ ...Values, [name]: value });

    setErrores({ ...Errores, [name]: false });
  };

  const handleChangeColor = (event) => {
    const { name, value } = event.target;

    if (intervalo) clearTimeout(intervalo);

    const newIntervalo = setTimeout(() => {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
      console.log(value, " ", name);
    }, 1000); // Debounce de 1 segundo

    setIntervalo(newIntervalo);
  };

  useEffect(() => {
    return () => {
      if (intervalo) clearTimeout(intervalo);
    };
  }, [intervalo]);

  const AddRem = () => {
    if (action === "add") {
      if (Values.name == "") {
        setErrores({ ...Errores, name: true });
        return;
      }
      AddCategory(Values.name, Values.color);
      onClose();
    } else {
    }
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
          <h5 className="fw-bolder f-12 mt-2">
            {action === "add" ? "Agregar " : "Eliminar "} Categoria
          </h5>
        </DialogTitle>
        <DialogContent>
          <div className="px-1 py-2">
            <Row>
              <Col xs={12} className="p-3">
                <TextField
                  label="Nombre"
                  value={Values.name}
                  error={Errores.name}
                  onChange={handleInputChange}
                  name="name"
                  size="small"
                  fullWidth
                  helperText={Errores.titulo ? "Llenar el nombre" : ""}
                />
              </Col>
              <Col xs={12} className="p-3">
                <div className="d-flex justify-content-start align-items-center">
                  <Typography className="me-3">Elija el color:</Typography>
                  <input
                    type="color"
                    name="color"
                    onChange={handleChangeColor}
                    value={Values.color}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => AddRem()} className="btn btn-s">
            {action === "add" ? "Agregar " : "Eliminar "}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
