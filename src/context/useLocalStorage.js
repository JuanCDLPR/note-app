const useLocalStorage = () => {
  const AddNote = (title, desc, create) => {
    const notes =
      window.localStorage.getItem("NOTES") != null &&
      window.localStorage.getItem("NOTES") != ""
        ? JSON.parse(window.localStorage.getItem("NOTES"))
        : [];

    const newNotes = JSON.parse(JSON.stringify(notes));

    newNotes.push({
      title: title,
      desc: desc,
      create: create,
      modify: create,
    });

    window.localStorage.setItem("NOTES", JSON.stringify(newNotes));
  };

  const LoadNotes = () => {
    const notes =
      window.localStorage.getItem("NOTES") != null &&
      window.localStorage.getItem("NOTES") != ""
        ? JSON.parse(window.localStorage.getItem("NOTES"))
        : [];
    return notes;
  };

  const DeleteNote = (index) => {
    const notes =
      window.localStorage.getItem("NOTES") != null &&
      window.localStorage.getItem("NOTES") != ""
        ? JSON.parse(window.localStorage.getItem("NOTES"))
        : [];

    const newNotes = notes.filter((item, idx) => {
      if (idx != index) {
        return item;
      }
    });
    //newNotes.splice(idx, 1);
    window.localStorage.setItem("NOTES", JSON.stringify(newNotes));
  };

  return {
    AddNote,
    LoadNotes,
    DeleteNote,
  };
};

export default useLocalStorage;
