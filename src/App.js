import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import NoteItem from "./components/NoteItem";
import HeaderNotes from "./components/HeaderNotes";
import ModalAddNote from "./components/ModalAddNote";
import useLocalStorage from "./context/useLocalStorage";
import ModalModNote from "./components/ModalModNote";
import SelectCategoria from "./components/SelectCategoria";

function App() {
  const { LoadNotes } = useLocalStorage();

  const [notes, setNotes] = useState(LoadNotes());
  const [showAddNote, setShowAddNote] = useState(false);
  const [idxMod, setIdxMod] = useState(null);
  const [showModNote, setShowModNote] = useState(false);
  const [ValueSelect, setValueSelect] = useState(0);

  const handleChange = ({ target }) => {
    setValueSelect(target.value);
  };

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
        <div className="w-select p-3 ">
          <SelectCategoria
            ValueSelect={ValueSelect}
            handleChange={handleChange}
          />
        </div>

        <Row className="p-0 m-0">
          {notes.map((item, idx) => {
            if (ValueSelect !== 0) {
              return ValueSelect === item?.cat ? (
                <NoteItem
                  note={item}
                  index={idx}
                  setNotes={setNotes}
                  notes={notes}
                  setIdxEdit={setIdxMod}
                />
              ) : (
                <></>
              );
            } else {
              return (
                <NoteItem
                  note={item}
                  index={idx}
                  setNotes={setNotes}
                  notes={notes}
                  setIdxEdit={setIdxMod}
                />
              );
            }
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
