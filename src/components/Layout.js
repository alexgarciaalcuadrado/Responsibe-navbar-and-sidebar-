import { memo, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, ListItem, Typography, ListItemText, List } from "@mui/material";
import { Link } from "react-router-dom";

import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import LogoutIcon from '@mui/icons-material/Logout';
import SellIcon from '@mui/icons-material/Sell';
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HandshakeIcon from '@mui/icons-material/Handshake';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssessmentIcon from '@mui/icons-material/Assessment';
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import Logo from "../assets/images/logo.png";


const Item = memo(({ title, to, icon, selected, setSelected, subItems }) => {
  let size = subItems ? Object.keys(subItems).length : 0;

  return size !== 0 ? (
    <SubMenu
      label={title}
      key={title}
      active={selected === title}
      className="menu-item"
      onClick={() => setSelected(title)}
      icon={icon}
    >
      {subItems?.map((subItem) => (
        <Box sx={{
          "& .MuiTypography-root ": {
            fontSize: "13px",
          },
          "& .ps-menu-button ": {
            marginRight: "5px",
          },
          "& .ps-menu-button:hover ": {
            background: `#002c54 !important`,
          },
          "& .ps-menu-button:active ": {
            background: `#002c54 !important`,
          },
          }}>
         <MenuItem key={subItem.title}>
            <ListItemText sx={{ 
              textAlign: "end"
              }} className="underline-grow">{subItem.title}</ListItemText>
         </MenuItem>
         </Box>

       ))}
    </SubMenu>
  ) :(
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

const items = [
  { title: "Dashboard", icon: <ViewQuiltIcon /> },
  { title: "Personas", icon: <PeopleAltIcon />, subItems:[
    {
      title: "Pacientes"
    },
    {
      title: "Profesionales"
    }]
  },
  { title: "Consultas", icon: <HandshakeIcon />, subItems:[
    {
      title: "Guardia Virtual"
    },
    {
      title: "Turnos programados"
    }] 
  },
  { title: "Convenios", icon: <HandshakeIcon />, subItems:[
    {
      title: "Empresa"
    },
    {
      title: "Gobierno"
    },
    {
      title: "Prestadores"
    }] 
  },
  { title: "Ventas", icon: <SellIcon />,
  subItems:[
    {
      title: "Directa"
    },
    {
      title: "Intermediarios"
    }]  
  },
  { title: "Cobranzas", icon: <MonetizationOnIcon />,
  subItems:[
    {
      title: "Entidades de Cobranzas"
    }]  
  },
  { title: "Comisiones", icon: <ReceiptLongIcon />,
  subItems:[
    {
      title: "Liquidación"
    },
    {
      title: "Esquemas Comisionales"
    }]  
   },
  { title: "Altas", icon: <MoveToInboxIcon /> },
  { title: "Reportes", icon: <AssessmentIcon /> },
  { title: "Configuración", icon: <BuildCircleIcon /> },
  { title: "Cerrar Sesión", icon: <LogoutIcon /> },
]

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
            background: `#6d6d6d !important`,
          },
          "& .ps-menu-button:active ": {
            background: `linear-gradient(195deg, #49a3f1, #1A73E8) !important`,
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
            {items.map((item) => {
              return (<Item
                title={item.title}
                to="/"
                icon={item.icon}
                subItems={item.subItems}
                selected={selected}
                setSelected={setSelected}
              />)
            })}
          </Menu>
        </Sidebar>
      </Box>

      <div className="container">{children}</div>
    </div>
  );
};

export default SidebarLayout;
