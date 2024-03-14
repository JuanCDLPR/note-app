import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

export default function CircleIconCat({ cat }) {
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
      ) : (
        <></>
      )}
    </>
  );
}
