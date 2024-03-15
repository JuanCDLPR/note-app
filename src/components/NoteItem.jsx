import { IconButton, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import html2canvas from "html2canvas";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import GetAppIcon from "@mui/icons-material/GetApp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useLocalStorage } from "../context/useLocalStorage";
import CircleIconCat from "./CircleIconCat";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

export default function NoteItem({ note, index, setIdxEdit }) {
  const { DeleteNote, GetColorShador } = useLocalStorage();

  const [showButtons, setShowButtons] = useState(true);

  const refParaImagen = React.useRef(null);

  const convertirAImagen = () => {
    setShowButtons(false);
  };

  const Eliminar = () => {
    //DeleteNote(index)

    MySwal.fire({
      title: "¿Estas seguro de eliminar esta nota?",
      text: "esta acción no se puede deshacer",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No, cancelar",
      confirmButtonText: "Si, estoy seguro",
      confirmButtonColor: "#3ABE88",
      denyButtonColor: "#65748B",
      reverseButtons: true,
    }).then(function (isConfirm) {
      if (isConfirm.isConfirmed) {
        MySwal.fire({
          title: "Exito!",
          text: "Eliminado correctamente",
          icon: "success",
        }).then(function () {
          DeleteNote(index);
        });
      }
    });
  };

  useEffect(() => {
    if (!showButtons) {
      if (refParaImagen.current) {
        html2canvas(refParaImagen.current).then((canvas) => {
          const enlace = document.createElement("a");

          enlace.href = canvas.toDataURL("image/png");
          enlace.download = `${note.title}.png`;
          document.body.appendChild(enlace);
          enlace.click();
          document.body.removeChild(enlace);
        });
        setShowButtons(true);
      } else {
        setShowButtons(true);
      }
    }
  }, [showButtons]);

  return (
    <Col xs={6} md={3} className="p-3">
      <div
        ref={refParaImagen}
        className=" target-task d-flex flex-column p-2 align-items-center"
        style={{
          boxShadow: GetColorShador(note.cat),
        }}
      >
        <div
          className="d-flex flex-wrap justify-content-center align-items-center"
          style={{ gap: "10px" }}
        >
          <Typography className=" title-task">{note.title}</Typography>{" "}
          <CircleIconCat cat={note.cat} />
        </div>
        <p>{note.desc}</p>
        {showButtons && (
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Tooltip title="Eliminar" placement="top-start">
              <IconButton onClick={() => Eliminar()}>
                <DeleteOutlineIcon
                  style={{
                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Descargar" placement="top-start">
              <IconButton onClick={() => convertirAImagen()}>
                <GetAppIcon
                  style={{
                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Editar" placement="top-start">
              <IconButton onClick={() => setIdxEdit(index)}>
                <BorderColorIcon
                  style={{
                    color: "#000000",
                    fontSize: "19px",
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
        )}
        <div className="d-flex flex-column align-items-start mt-4" id="botones">
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
