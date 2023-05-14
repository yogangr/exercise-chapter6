// eslint-disable-next-line no-unused-vars
import React from "react";
import Car from "./Car";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Form from "react-bootstrap/Form";

function Data() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const cars = await axios.get(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );
    const data = await cars.data;
    setCars(data);
  };

  const [query, setQuery] = useState([]);
  const [value, setValue] = useState("0");

  const filter = (data) => {
    if (value === "true") {
      return data.filter(
        (item) =>
          item.available === true && item.capacity.toString().includes(query)
      );
    } else if (value === "false") {
      return data.filter(
        (item) =>
          item.available === false && item.capacity.toString().includes(query)
      );
    } else {
      return data;
    }
  };

  return (
    <div>
      <div className="dropdown">
        <Form.Select
          className="w-auto"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="true">Dengan Sopir</option>
          <option value="false">Tanpa Sopir</option>
          <option value="0">Dengan Sopir/Tanpa Sopir</option>
        </Form.Select>
      </div>
      <input
        className="form-control w-auto"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <Car data={filter(cars)} />
    </div>
  );
}

export default Data;
