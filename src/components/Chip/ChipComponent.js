import React from "react";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";

const ChipComponent = ({ label }) => {
  return (
    <>
      <Chip label={label} />
    </>
  );
};

export default ChipComponent;
