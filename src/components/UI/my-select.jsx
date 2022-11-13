import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const MySelect = (props) => {
  const { title, options, label, val, ...rest } = props;

  return (
    <Select {...rest}>
      {options.map((option, ind) => (
        <MenuItem value={val === "full" ? option : option[val]} key={ind}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MySelect;
