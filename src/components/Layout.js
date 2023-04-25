import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import Logo from "../assets/images/logo.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "white",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidebarLayout = ({ children }) => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="layout">
      <Box
        sx={{
          "& .ps-menu-button ": {
            borderRadius:"10px",
            margin:"5px"
          },
          "& .ps-menu-button:hover ": {
            background: `rgba(255, 255, 255, 0.2)`,
          },
          "& .ps-menu-button:active ": {
            background: `linear-gradient(195deg, #49a3f1, #1A73E8)`,
          },
        }}
      >
        <Sidebar className="sidebar">
          <Menu>
          <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center" style={{ margin: "20px"}}>
                <img
                  alt="brand"
                  width="100px"
                  height="100px"
                  src={Logo}
                  style={{ cursor: "pointer", height: "65px"}}
                />
              </Box>
            </Box>
            <hr className="faded-out-hr"/>
            <Item
              title="Dashboard"
              to="/"
              icon={<ViewQuiltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reportes"
              to="/"
              icon={<BackupTableIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Facturación"
              to="/"
              icon={<ReceiptLongIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Cobranzans"
              to="/"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notificaciones"
              to="/"
              icon={<NotificationsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Usuarios"
              to="/"
              icon={<PeopleAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Altas"
              to="/"
              icon={<GroupAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Configuración"
              to="/"
              icon={<BuildCircleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
        </Sidebar>
      </Box>

      <div className="container">{children}</div>
    </div>
  );
};

export default SidebarLayout;
