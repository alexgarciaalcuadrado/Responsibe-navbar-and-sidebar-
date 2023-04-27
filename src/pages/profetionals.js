import { Box, Typography } from "@mui/material";

//icons
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { ThemeProvider } from '@mui/material/styles';
import { MuiTheme } from '../styles/MuiDataTableStyle';
import MUIDataTable from "mui-datatables";

import {
  textLabels,
  downloadOptions,
  sortFunction,
} from "../utils/muiTableOptions";

const columns = [
  {
    name: "id",
    label: "Id",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "doctor",
    label: "Profesional",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "alta",
    label: "Fecha de alta",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "consults",
    label: "Consultas",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "state",
    label: "Activo",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "matricula",
    label: "Matricula",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "acciones",
    label: "Acciones",
    options: {
      customBodyRenderLite: (dataIndex, rowIndex) => {
        return (
          <>
            <SearchIcon style={{ cursor: "pointer", margin: "0 3px" }} />
            <EditIcon style={{ cursor: "pointer", margin: "0 3px" }} />
            <DeleteIcon style={{ cursor: "pointer", margin: "0 3px" }} />
            <AttachMoneyIcon style={{ cursor: "pointer", margin: "0 3px" }} />
          </>
        );
      },
    },
    filter: false,
    sort: false,
  },
];

const options = {
  textLabels,
  downloadOptions,
  filter: true,
  selectableRows: "none",
  fixedHeader: false,
  filterType: "dropdown",
  responsive: "standard",
  customSort: sortFunction,
  draggableColumns: { enabled: true },
};

const Users = () => {
  const rows = [
    {
      id: 1,
      doctor: "Joaquín Altamirano",
      alta: "12/1/2023",
      consults: 100,
      state: "Activo",
      matricula: 98943,
    },
    {
      id: 3,
      doctor: "Maia Rodriguez",
      alta: "1/2/2023",
      consults: 30,
      state: "Activo",
      matricula: 88732,
    },
    {
      id: 4,
      doctor: "Marta Lachio",
      alta: "17/3/2023",
      consults: 36,
      state: "Activo",
      matricula: 88450,
    },
    {
      id: 5,
      doctor: "Jorge Fernandez",
      alta: "20/1/2023",
      consults: 50,
      state: "Activo",
      matricula:1324,
    },
  ];

  return (
    <ThemeProvider theme={MuiTheme}>
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
        <MUIDataTable
          title={""}
          data={rows}
          columns={columns}
          options={options}
        />
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Users;
