import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import NoteItem from "./components/NoteItem";
import HeaderNotes from "./components/HeaderNotes";
import ModalAddNote from "./components/ModalAddNote";
import useLocalStorage from "./context/useLocalStorage";
import ModalModNote from "./components/ModalModNote";

function App() {
  const { LoadNotes } = useLocalStorage();

  const [notes, setNotes] = useState(LoadNotes());
  const [showAddNote, setShowAddNote] = useState(false);
  const [idxMod, setIdxMod] = useState(null);
  const [showModNote, setShowModNote] = useState(false);

  useEffect(() => {
    if (idxMod != null) {
      setShowModNote(true);
    }
  }, [idxMod]);

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
                setIdxEdit={setIdxMod}
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

      {showModNote && (
        <ModalModNote
          onClose={() => {
            setShowModNote(false);
            setIdxMod(null);
          }}
          notes={notes}
          setNotes={setNotes}
          indice={idxMod}
        />
      )}
    </div>
  );
}

export default App;
