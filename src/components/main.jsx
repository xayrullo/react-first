import React, { useState } from "react";
import Box from "@mui/material/Box";
import MyButton from "./UI/my-button";
import MySelect from "./UI/my-select";
import MyInput from "./UI/my-input";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { FormControl } from "@mui/material";

const Main = ({ products, ...props }) => {
  const [product, setProduct] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  function pushToSelectedProducts(product) {
    let index = selectedProducts.findIndex((prod) => prod._id === product._id);
    if (index > -1) return;
    setSelectedProducts((oldArray) => [...oldArray, product]);
  }
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="rounded p-4"
      {...props}
    >
      <Box>
        <MyButton variant="text" className="mt-2">
          Avtomatik To'ldirish
        </MyButton>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  key="name"
                  align="left"
                  style={{ minWidth: 100 }}
                  className=""
                >
                  Nomi
                </TableCell>
                <TableCell key="unit" align="left" className="">
                  O'lchov Birligi
                </TableCell>
                <TableCell
                  key="price"
                  align="right"
                  style={{ width: 150 }}
                  className=""
                >
                  Narxi
                </TableCell>
                <TableCell
                  key="selectedPrice"
                  align="right"
                  style={{ width: 150 }}
                  className=""
                >
                  Belgilangan Narx
                </TableCell>
                <TableCell
                  key="sellPrice"
                  align="right"
                  style={{ width: 200 }}
                  className=""
                >
                  Sotish Narxi
                </TableCell>
                <TableCell
                  key="action"
                  align="left"
                  style={{ width: 40 }}
                  className=""
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedProducts.slice(0, 6).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left" style={{ width: 100 }}>
                      {row.measure}
                    </TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell>
                      <FormControl fullWidth className="p-2">
                        <MyInput
                          error
                          helperText="Must be filled"
                          type="number"
                          size="small"
                          min="0"
                          value={row.amount}
                        />
                      </FormControl>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteOutlinedIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <FormControl fullWidth className="mt-4">
          <MySelect
            value={product}
            label="Name"
            val="full"
            onChange={(e) => {
              pushToSelectedProducts({
                _id: e.target.value._id,
                name: e.target.value.name,
                measure: e.target.value.measure.name,
                prices: e.target.value.prices,
              });
            }}
            options={products}
          ></MySelect>
        </FormControl>
      </Box>
    </div>
  );
};

export default Main;
