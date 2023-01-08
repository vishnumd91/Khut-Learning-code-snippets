import React from "react";
import { users } from "../data/constants";

const TableComponent = () => {
  const usersData = users ?? [];
  return (
    <>
      <table className="table table-striped-columns table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>State</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            usersData?.map((user, index) => {
              const { name, gender, address } = user;

              // Bad practice of destructing nested objects
              // const {
              //   name,
              //   gender,
              //   address: { city, state },
              // } = user;

              const { state, city } = address;
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{gender}</td>
                  <td>{state}</td>
                  <td>{city}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
