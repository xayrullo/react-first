import React from "react";
import TextField from "@mui/material/TextField";
const MySelect = (props) => {
  const { title, options, label, ...rest } = props;
  return <TextField {...rest} />;
};

export default MySelect;
