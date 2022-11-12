import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import MySelect from "./UI/my-select";
import MyButton from "./UI/my-button";
import MyInput from "./UI/my-input";

const Filter = (props) => {
  const { organizations, prices, filter, setFilter } = props;

  const [organization, setOrganization] = useState("");
  const [priceType, setPriceType] = useState(1);
  const priceTypes = [
    { name: "Joriy narx bo'yicha", id: 1 },
    { name: "Narxlar nisbati bo'yicha", id: 2 },
  ];

  return (
    <div style={{ backgroundColor: "white" }} className="rounded p-4">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <label>
                Tashkilotlar <span style={{ color: "red" }}>*</span>
              </label>
              <MySelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter.organization}
                label="name"
                val="_id"
                onChange={(e) =>
                  setFilter((old) => {
                    return { ...old, organization: e.target.value };
                  })
                }
                options={organizations}
              ></MySelect>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="mt-2">
          <Grid item xs={priceType === 1 ? 6 : 3}>
            <FormControl fullWidth>
              <label>Narxni o'zgartirish turi</label>
              <MySelect
                id="price-type"
                value={filter.priceType}
                label="name"
                val="id"
                onChange={(e) =>
                  setFilter((old) => {
                    return { ...old, priceType: e.target.value };
                  })
                }
                options={priceTypes}
              ></MySelect>
            </FormControl>
          </Grid>
          {priceType !== 1 ? (
            <Grid item xs={3}>
              <FormControl fullWidth>
                <label>Narxni o'zgaritirish turi</label>
                <MySelect
                  id="price-type"
                  value={filter.selectedPrice}
                  label="name"
                  val="_id"
                  onChange={(e) =>
                    setFilter((old) => {
                      return { ...old, selectedPrice: e.target.value };
                    })
                  }
                  options={prices}
                ></MySelect>
              </FormControl>
            </Grid>
          ) : null}
          {priceType !== 1 ? (
            <Grid item xs={3}>
              <FormControl fullWidth>
                <label>Konvertatsiya</label>
                <MyInput
                  helperText="Must be filled"
                  type="number"
                  min="0"
                  value={filter.conversion}
                  onChange={(e) =>
                    setFilter((old) => {
                      return { ...old, organization: e.target.value };
                    })
                  }
                />
              </FormControl>
            </Grid>
          ) : null}
          <Grid item xs={priceType === 1 ? 6 : 3}>
            <FormControl fullWidth>
              <label>Margin (%)</label>
              <MyInput
                type="number"
                min="0"
                value={filter.margin}
                onChange={(e) =>
                  setFilter((old) => {
                    return { ...old, organization: e.target.value };
                  })
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <MyButton variant="contained" className="mt-4">
          Narxlarni Biriktirish
        </MyButton>
      </Box>
    </div>
  );
};

export default Filter;
