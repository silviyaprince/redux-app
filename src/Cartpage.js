import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import { useSelector, useDispatch } from "react-redux";
import { multiply } from "./slices/priceSlice";

export function Cartpage({ pd }) {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const quantity = useSelector((state) => state.priceValue.quantity);
  const handleChange = (event,productId,productPrice) => {
    const newValue = parseInt(event.target.value)||0;
    setValue(newValue);
    dispatch(multiply({productId, quantity: newValue,price:productPrice}));
  };
  const [show, setShow] = useState(false);
  return (
    <div className="flex-container">
      <div className="flex-top">
        <div className="image">
          <img
            src={pd.images[0]}
            alt="product image"
            style={{ height: "200px", widht: "100px" }}
          />
        </div>
        <div className="flex-top2">
          <div className="text1">
            <h3>{pd.title} </h3>
          </div>
          <div className="product-info">
            DETAILS AND CORE
            <IconButton
              color="primary"
              aria-label="toggle"
              onClick={() => setShow(!show)}>
              {show ? <ArrowDropUpIcon /> : <ArrowDropDownOutlinedIcon />}
            </IconButton>
            {show ? (
              <p className="product-description">{pd.description}</p>
            ) : null}
          </div>
          <div className="product-info2">
            SUSTAINABILITY
            <IconButton color="primary" aria-label="toggle">
              {show ? <ArrowDropUpIcon /> : <ArrowDropDownOutlinedIcon />}
            </IconButton>
          </div>
        </div>
        <div className="numberinput-container">
          <TextField
            select
            className="textfield"
            label="Quantity"
            value={value}
            onChange={(event)=>handleChange(event,pd.id,pd.price)}
            variant="outlined">
            {[...Array(10).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>
                {num + 1}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="flextop-3">
          <div>₹{pd.price}</div>
          <div style={{ color: "red", fontWeight: "500" }}>REMOVE</div>
        </div>
      </div>
    </div>
  );
}
