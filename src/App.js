import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import NoteItem from "./components/NoteItem";
import HeaderNotes from "./components/HeaderNotes";
import ModalAddNote from "./components/ModalAddNote";
import { useLocalStorage } from "./context/useLocalStorage";
import ModalModNote from "./components/ModalModNote";
import SelectCategoria from "./components/SelectCategoria";
import ModalCategorys from "./components/ModalCategorys";

function App() {
  const { Notes } = useLocalStorage();

  const [showAddNote, setShowAddNote] = useState(false);
  const [idxMod, setIdxMod] = useState(null);
  const [showModNote, setShowModNote] = useState(false);
  const [ValueSelect, setValueSelect] = useState(0);
  const [AddRemCat, setAddRemCat] = useState({
    open: false,
    action: "",
  });

  const handleChange = ({ target }) => {
    //console.log(target.value);
    if (target.value === "add" || target.value === "rem") {
      setAddRemCat({ ...AddRemCat, open: true, action: target.value });
    } else {
      setValueSelect(target.value);
    }
  };

  useEffect(() => {
    if (idxMod != null) {
      setShowModNote(true);
    }
  }, [idxMod]);

  return (
    <div className="">
      <HeaderNotes setShowModal={setShowAddNote} />

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
          {Notes.map((item, idx) => {
            if (ValueSelect !== 0) {
              return ValueSelect === item?.cat ? (
                <NoteItem note={item} index={idx} setIdxEdit={setIdxMod} />
              ) : (
                <></>
              );
            } else {
              return (
                <NoteItem note={item} index={idx} setIdxEdit={setIdxMod} />
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
        />
      )}

      {showModNote && (
        <ModalModNote
          onClose={() => {
            setShowModNote(false);
            setIdxMod(null);
          }}
          indice={idxMod}
        />
      )}

      {AddRemCat.open && (
        <ModalCategorys
          onClose={() => {
            setAddRemCat({ ...AddRemCat, open: false, action: "" });
          }}
          action={AddRemCat.action}
        />
      )}
    </div>
  );
}

export default App;
