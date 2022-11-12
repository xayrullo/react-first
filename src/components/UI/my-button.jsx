import * as React from "react";
import Button from "@mui/material/Button";

export default function MyButton(props) {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
}
