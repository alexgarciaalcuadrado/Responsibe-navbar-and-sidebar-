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
      id: "12",
      patient: "Amelia Gimenez",
      alta: "12/1/2023",
      plan: "Premium",
      consults: "13",
      state: "Activo",
      nextPayment: "12/05/2023",
    },
    {
      id: "13",
      patient: "Mauro Gastón",
      alta: "1/2/2023",
      plan: "Base",
      consults: "3",
      state: "Activo",
      nextPayment: "1/05/2023",
    },
    {
      id: "14",
      patient: "Eugenia Amarante",
      alta: "17/3/2023",
      plan: "Premium",
      consults: "10",
      state: "No Activo",
      nextPayment: "-",
    },
    {
      id: "15",
      patient: "Lucio Fernandez",
      alta: "20/1/2023",
      plan: "Premium",
      consults: "5",
      state: "Activo",
      nextPayment: "20/05/2023",
    },
    {
      id: "12",
      patient: "Juan Carloz Festiña",
      alta: "2/2/2023",
      plan: "Base",
      consults: "4",
      state: "Activo",
      nextPayment: "2/05/2023",
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
            Listado de pacientes
          </Typography>
        </Box>
        <TableContainer
          sx={{ width: "98%", marginBottom: "10px" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#d1ffcb" }}>
                <TableCell>ID</TableCell>
                <TableCell align="center">Paciente</TableCell>
                <TableCell align="center">Alta</TableCell>
                <TableCell align="center">Plan</TableCell>
                <TableCell align="center">Consultas</TableCell>
                <TableCell align="center">Estado</TableCell>
                <TableCell align="center">Próximo cobro</TableCell>
                <TableCell align="center">Acciones</TableCell>
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
                    {row.patient}
                  </TableCell>
                  <TableCell align="center">{row.alta}</TableCell>
                  <TableCell align="center">{row.plan}</TableCell>
                  <TableCell align="center">{row.consults}</TableCell>
                  <TableCell align="center">{row.state}</TableCell>
                  <TableCell align="center">{row.nextPayment}</TableCell>
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
