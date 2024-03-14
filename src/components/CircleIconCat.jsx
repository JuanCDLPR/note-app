import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useLocalStorage } from "../context/useLocalStorage";

export default function CircleIconCat({ cat }) {
  const { LoadCategorys } = useLocalStorage();

  const [categorys, setCategorys] = useState(LoadCategorys());

  const ElementFind = () => {
    const category = categorys.find((i) => i.value === cat);

    //console.log(category);
    if (category) {
      return (
        <CircleIcon
          style={{
            marginLeft: "9px",
            fontSize: "20px",
            color: category.color,
          }}
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      {cat === 1 ? (
        <CircleIcon
          style={{
            marginLeft: "9px",
            fontSize: "20px",
            color: "#B000C4",
          }}
        />
      ) : cat === 2 ? (
        <CircleIcon
          style={{
            marginLeft: "9px",
            fontSize: "20px",
            color: "#C1CF1C",
          }}
        />
      ) : cat === 3 ? (
        <CircleIcon
          style={{
            marginLeft: "9px",
            fontSize: "20px",
            color: "#45CF1C",
          }}
        />
      ) : cat === 4 ? (
        <CircleIcon
          style={{
            marginLeft: "9px",
            fontSize: "20px",
            color: "#CF1C2A",
          }}
        />
      ) : cat === 5 ? (
        <CircleIcon
          style={{
            marginLeft: "9px",
            fontSize: "20px",
            color: "#6C6C6C",
          }}
        />
      ) : categorys.length > 0 ? (
        <ElementFind />
      ) : (
        <></>
      )}
    </>
  );
}
