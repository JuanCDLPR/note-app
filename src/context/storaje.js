export const getNotesLocaStorage = () => {
  const notes =
    window.localStorage.getItem("NOTES") != null &&
    window.localStorage.getItem("NOTES") != ""
      ? JSON.parse(window.localStorage.getItem("NOTES"))
      : [];
  return notes;
};

export const setNotesLocalStorage = (notes) => {
  window.localStorage.setItem("NOTES", JSON.stringify(notes));
};

export const lastValueCategory = () => {
  const value =
    window.localStorage.getItem("VALUE_CAT") != null &&
    window.localStorage.getItem("VALUE_CAT") != ""
      ? Number(window.localStorage.getItem("VALUE_CAT")) + 1
      : 6;
  return value;
};

export const getCategorysLocaStorage = () => {
  const notes =
    window.localStorage.getItem("CATEGORYS") != null &&
    window.localStorage.getItem("CATEGORYS") != ""
      ? JSON.parse(window.localStorage.getItem("CATEGORYS"))
      : [];
  return notes;
};

export const setCategorysLocalStorage = (cat) => {
  window.localStorage.setItem("CATEGORYS", JSON.stringify(cat));
};

export const setlastValueCategory = (val) => {
  window.localStorage.setItem("VALUE_CAT", JSON.stringify(val));
};
