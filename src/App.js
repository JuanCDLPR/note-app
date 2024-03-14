import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import NoteItem from "./components/NoteItem";
import HeaderNotes from "./components/HeaderNotes";
import ModalAddNote from "./components/ModalAddNote";
import useLocalStorage from "./context/useLocalStorage";

function App() {
  const { LoadNotes } = useLocalStorage();

  const [notes, setNotes] = useState(LoadNotes());

  const [showAddNote, setShowAddNote] = useState(false);

  return (
    <div className="">
      <HeaderNotes
        notes={notes}
        setNotes={setNotes}
        setShowModal={setShowAddNote}
      />

      <section
        style={{
          paddingTop: "3.5rem",
        }}
      >
        <Row className="p-0 m-0">
          {notes.map((item, idx) => {
            return (
              <NoteItem
                note={item}
                index={idx}
                setNotes={setNotes}
                notes={notes}
              />
            );
          })}
        </Row>
      </section>

      {showAddNote && (
        <ModalAddNote
          onClose={() => {
            setShowAddNote(false);
          }}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </div>
  );
}

export default App;
