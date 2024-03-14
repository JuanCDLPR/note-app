import React from "react";
import { useState } from "react";

import { useContext } from "react";
import { createContext } from "react";

import {
  getCategorysLocaStorage,
  getNotesLocaStorage,
  setCategorysLocalStorage,
  setNotesLocalStorage,
  setlastValueCategory,
  lastValueCategory,
} from "./storaje";

const LocalStorageContext = createContext();

const StorageProvider = ({ children }) => {
  const [Categorys, setCategorys] = useState(getCategorysLocaStorage());

  const [Notes, setNotes] = useState(getNotesLocaStorage());

  const AddNote = (title, desc, create, cat) => {
    const newNotes = getNotesLocaStorage();

    newNotes.push({
      title: title,
      desc: desc,
      cat: cat,
      create: create,
      modify: create,
    });

    setNotesLocalStorage(newNotes);

    setNotes(newNotes);
  };

  const DeleteNote = (index) => {
    const newNotes = getNotesLocaStorage();
    newNotes.splice(index, 1);
    setNotesLocalStorage(newNotes);
    setNotes(newNotes);
  };

  const ModifyNote = (title, desc, modify, index, cat) => {
    const newNotes = getNotesLocaStorage();

    const newItem = {
      title: title,
      desc: desc,
      cat: cat,
      create: newNotes[index].create,
      modify: modify,
    };

    newNotes[index] = newItem;
    setNotesLocalStorage(newNotes);
    setNotes(newNotes);
  };

  const AddCategory = (name, color) => {
    const lasValue = lastValueCategory();

    const newCategorys = getCategorysLocaStorage();

    newCategorys.push({
      name: name,
      color: color,
      value: lasValue,
    });
    setlastValueCategory(lasValue);
    setCategorysLocalStorage(newCategorys);
    setCategorys(newCategorys);
  };

  const DeleteCategory = (index) => {
    const newCat = getCategorysLocaStorage();
    newCat.splice(index, 1);
    setCategorysLocalStorage(newCat);
    setCategorys(newCat);
  };

  return (
    <LocalStorageContext.Provider
      value={{
        AddNote,
        DeleteNote,
        ModifyNote,
        AddCategory,
        Categorys,
        Notes,
        DeleteCategory,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};

export { StorageProvider, useLocalStorage };
