/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Table from "react-bootstrap/Table";

// eslint-disable-next-line react/prop-types
const Car = ({ data }) => {
  return (
    <Table striped bordered hover className="mb-1">
      <thead>
        <tr>
          <th>Model</th>
          <th>Kapasitas</th>
          <th>Dengan Sopir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.manufacture}</td>
            <td>{item.capacity}</td>
            <td>{item.available.toString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Car;
