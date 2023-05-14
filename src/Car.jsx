/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";

// eslint-disable-next-line react/prop-types
const Car = ({ data }) => {
  return (
    <div className="container align-items-center">
      <table className="table table-bordered w-100 table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Model</th>
            <th>Kapasitas</th>
            <th>Dengan Sopir</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.manufacture}</td>
              <td>{item.capacity}</td>
              <td>{item.available.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Car;
