import { IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col } from "react-bootstrap";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import GetAppIcon from "@mui/icons-material/GetApp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import useLocalStorage from "../context/useLocalStorage";

export default function NoteItem({ note, index, setNotes, notes }) {
  const { DeleteNote } = useLocalStorage();

  const del = () => {
    DeleteNote(index);

    const newNotes = notes.filter((item, idx) => {
      if (idx != index) {
        return item;
      }
    });

    setNotes(newNotes);
  };
  return (
    <Col xs={6} md={3} className="p-3">
      <div className=" target-task d-flex flex-column p-2 align-items-center">
        <Typography className=" title-task">{note.title}</Typography>
        <p>{note.desc}</p>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Tooltip title="Eliminar" placement="top-start">
            <IconButton onClick={() => del()}>
              <DeleteOutlineIcon
                style={{
                  color: "#000000",
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Descargar" placement="top-start">
            <IconButton>
              <GetAppIcon
                style={{
                  color: "#000000",
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Editar" placement="top-start">
            <IconButton>
              <BorderColorIcon
                style={{
                  color: "#000000",
                  fontSize: "19px",
                }}
              />
            </IconButton>
          </Tooltip>
        </div>
        <div className="d-flex flex-column align-items-start mt-4">
          <Typography
            style={{
              fontSize: "10px",
            }}
          >
            Creacion:{` ${note.create}`}
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
            }}
          >
            Ultima Edicion:{` ${note.modify}`}
          </Typography>
        </div>
      </div>
    </Col>
  );
}