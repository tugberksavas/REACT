import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MUITable() {
  const rows = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 30,
    },
    {
      id: 2,
      firstName: "Gizem",
      lastName: "Doe",
      age: 25,
    },
    {
      id: 3,
      firstName: "Hilal",
      lastName: "Turk",
      age: 35,
    },
    {
      id: 4,
      firstName: "Hakan",
      lastName: "Turk",
      age: 40,
    },
  ];
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MUITable;
