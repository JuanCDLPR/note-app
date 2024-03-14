import { IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col } from "react-bootstrap";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import GetAppIcon from "@mui/icons-material/GetApp";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function NoteItem() {
  return (
    <Col xs={6} md={3} className="p-3">
      <div className=" target-task d-flex flex-column p-2 align-items-center">
        <Typography className=" title-task">Titulo</Typography>
        <p>
          ñasdkljaklsdas lkasjdlkajsd lakjdalskdj l kajsd laksj lkajsd laksjd
          alkjlaksjdlaksd
        </p>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Tooltip title="Eliminar" placement="top-start">
            <IconButton>
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
            Creacion:{` 2024-10-02`}
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
            }}
          >
            Ultima Edicion:{` 2024-10-02`}
          </Typography>
        </div>
      </div>
    </Col>
  );
}
