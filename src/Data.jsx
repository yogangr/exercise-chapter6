// eslint-disable-next-line no-unused-vars
import React from "react";
import Car from "./Car";
import { useState, useEffect } from "react";
import axios from "axios";

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
      return data.filter((item) => item.available === true && item.capacity.toString().includes(query));
    } else if (value === "false") {
      return data.filter((item) => item.available === false && item.capacity.toString().includes(query));
    } else {
      return data;
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cari..."
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="dropdown">
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="true">Dengan Sopir</option>
          <option value="false">Tanpa Sopir</option>
        </select>
      </div>
      <Car data={filter(cars)} />
    </div>
  );
}

export default Data;
