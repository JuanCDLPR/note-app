const getNotesLocaStorage = () => {
  const notes =
    window.localStorage.getItem("NOTES") != null &&
    window.localStorage.getItem("NOTES") != ""
      ? JSON.parse(window.localStorage.getItem("NOTES"))
      : [];
  return notes;
};

const setNotesLocalStorage = (notes) => {
  window.localStorage.setItem("NOTES", JSON.stringify(notes));
};

const useLocalStorage = () => {
  const AddNote = (title, desc, create) => {
    const newNotes = getNotesLocaStorage();

    newNotes.push({
      title: title,
      desc: desc,
      create: create,
      modify: create,
    });

    setNotesLocalStorage(newNotes);
  };

  const LoadNotes = () => {
    return getNotesLocaStorage();
  };

  const DeleteNote = (index) => {
    const newNotes = getNotesLocaStorage();
    newNotes.splice(index, 1);
    setNotesLocalStorage(newNotes);
  };

  const ModifyNote = (title, desc, modify, index) => {
    const newNotes = getNotesLocaStorage();

    const newItem = {
      title: title,
      desc: desc,
      create: newNotes[index].create,
      modify: modify,
    };

    newNotes[index] = newItem;
    setNotesLocalStorage(newNotes);
  };

  return {
    AddNote,
    LoadNotes,
    DeleteNote,
    ModifyNote,
  };
};

export default useLocalStorage;
