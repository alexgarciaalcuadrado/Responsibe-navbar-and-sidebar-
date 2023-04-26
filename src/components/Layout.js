import { memo, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import Logo from "../assets/images/logo.png";

const Item = memo(({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      key={title}
      active={selected === title}
      className="menu-item"
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
});

const SidebarLayout = ({ children }) => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="layout">
      <Box
        sx={{
          "& .ps-menu-button ": {
            borderRadius: "10px",
            margin: "5px",
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
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ margin: "20px" }}
              >
                <img
                  alt="brand"
                  width="100px"
                  height="100px"
                  src={Logo}
                  style={{ cursor: "pointer", height: "65px" }}
                />
              </Box>
            </Box>
            <hr className="faded-out-hr" />
            {[
              { title: "Dashboard", icon: <ViewQuiltIcon /> },
              { title: "Reportes", icon: <BackupTableIcon /> },
              { title: "Facturación", icon: <ReceiptLongIcon /> },
              { title: "Cobranzans", icon: <CurrencyExchangeIcon /> },
              { title: "Notificaciones", icon: <NotificationsIcon /> },
              { title: "Usuarios", icon: <PeopleAltIcon /> },
              { title: "Altas", icon: <GroupAddIcon /> },
              { title: "Configuración", icon: <BuildCircleIcon /> },
            ].map(({ title, icon }) => (
              <Item
                title={title}
                to="/"
                icon={icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Menu>
        </Sidebar>
      </Box>

      <div className="container">{children}</div>
    </div>
  );
};

export default SidebarLayout;
