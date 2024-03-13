import React from "react";
import Chip from "@mui/material/Chip";

const ChipComponent = ({ label }) => {
  return (
    <>
      <Chip label={label} />
    </>
  );
};

export default ChipComponent;
