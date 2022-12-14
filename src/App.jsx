/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "./utils/axios";

import Filter from "./components/filter";
import Main from "./components/main";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  const [organizations, setOrganizations] = useState([]);
  const [prices, setPrices] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({});

  async function fetchData() {
    try {
      await axios.post(`settings/organization/get-all`).then((res) => {
        console.log("Organizations: ", res.data);
        setOrganizations(res.data);
      });
      await axios
        .post(`settings/price/get-paging`, {
          page: 1,
          limit: 20,
          search: "",
        })
        .then((res) => {
          console.log("res: ", res.data);
          setPrices(res.data.data);
        });
      await axios
        .post(`product/by-price/get-paging`, {
          limit: 50,
          page: 1,
          search: "",
          organization_id: "6122494eea50e3919e28ffb3",
          sell_product_in_negative: true,
        })
        .then((res) => {
          setProducts(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // console.log("Watch filter: ", filter);
  }, [filter]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ backgroundColor: "#E4E2E2", padding: "20px", height: "100%" }}
    >
      <Filter
        organizations={organizations}
        prices={prices}
        setFilter={setFilter}
        filter={filter}
      />
      <Main products={products} className="mt-4 rounded p-4" />
      <Stack spacing={2} direction="row" className="mt-4">
        <Button variant="outlined">Bekor Qilish</Button>
        <Button variant="contained">Saqlash</Button>
      </Stack>
    </div>
  );
}
export default App;
