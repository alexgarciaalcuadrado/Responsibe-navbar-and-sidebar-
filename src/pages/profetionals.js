import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//icons
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Users = () => {
  const rows = [
    {
      id: "1",
      doctor: "Joaquín Altamirano",
      alta: "12/1/2023",
      consults: "100",
      state: "Activo",
      matricula: "98943",
    },
    {
      id: "3",
      doctor: "Maia Rodriguez",
      alta: "1/2/2023",
      consults: "30",
      state: "Activo",
      matricula: "88732",
    },
    {
      id: "4",
      doctor: "Marta Lachio",
      alta: "17/3/2023",
      consults: "36",
      state: "Activo",
      matricula: "88450",
    },
    {
      id: "5",
      doctor: "Jorge Fernandez",
      alta: "20/1/2023",
      consults: "50",
      state: "Activo",
      matricula: "13244",
    },
  ];

  return (
    <div className="users">
      <div className="users-table-container">
        <Box
          sx={{
            background: "linear-gradient(195deg, #49a3f1, #1A73E8)",
            padding: "10px",
            borderRadius: "15px",
            color: "white",
            height: "80px",
            display: "flex",
            alignItems: "center",
            width: "90%",
            position: "relative",
            bottom: "25px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: " 700",
              letterSpacing: " 1px",
            }}
          >
            Listado de profesionales
          </Typography>
        </Box>
        <TableContainer
          sx={{ width: "98%", marginBottom: "10px" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#d1ffcb" }}>
                <>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Doctor</TableCell>
                  <TableCell align="center">Alta</TableCell>
                  <TableCell align="center">Consultas</TableCell>
                  <TableCell align="center">Estado</TableCell>
                  <TableCell align="center">Matrícula</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    border: 0,
                  }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {" "}
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {" "}
                    {row.doctor}
                  </TableCell>
                  <TableCell align="center">{row.alta}</TableCell>
                  <TableCell align="center">{row.consults}</TableCell>
                  <TableCell align="center">{row.state}</TableCell>
                  <TableCell align="center">{row.matricula}</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#002c54",
                    }}
                  >
                    <SearchIcon
                      style={{ cursor: "pointer", margin: "0 3px" }}
                    />
                    <EditIcon style={{ cursor: "pointer", margin: "0 3px" }} />
                    <DeleteIcon
                      style={{ cursor: "pointer", margin: "0 3px" }}
                    />
                    <AttachMoneyIcon
                      style={{ cursor: "pointer", margin: "0 3px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Users;
