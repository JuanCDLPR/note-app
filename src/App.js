import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import NoteItem from "./components/NoteItem";
import HeaderNotes from "./components/HeaderNotes";

function App() {
  const [notes, setNotes] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const [showAddNote, setShowAddNote] = useState(false);

  return (
    <div className="">
      <HeaderNotes notes={notes} setNotes={setNotes} />
      <section
        style={{
          paddingTop: "3.5rem",
        }}
      >
        <Row className="p-0 m-0">
          {notes.map(() => {
            return <NoteItem />;
          })}
        </Row>
      </section>
    </div>
  );
}

export default App;
