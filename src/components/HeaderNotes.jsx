import React from "react";

import { IconButton, Typography } from "@mui/material";
import Navbar from "react-bootstrap/Navbar";

import LOGO from "../assets/diary-icon.png";

import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function HeaderNotes({ notes, setNotes, setShowModal }) {
  return (
    <header
      className=" p-2 bg-warning d-flex justify-content-start align-items-center w-100"
      style={{
        position: "fixed",
        zIndex: 2,
        height: "3.5rem",
      }}
    >
      <img src={LOGO} alt="" height={35} width={25} />
      <Typography
        className="ms-5"
        style={{
          fontWeight: "bold",
        }}
      >
        Notes APP
      </Typography>

      <IconButton
        className="ms-auto me-5 me-md-2"
        onClick={() => setShowModal(true)}
      >
        <AddCircleIcon className="size-icon" />
      </IconButton>
      <Typography className="d-none d-sm-block me-5">Agregar Nota</Typography>
    </header>
  );
}
