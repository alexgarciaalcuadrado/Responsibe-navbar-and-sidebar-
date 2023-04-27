import { memo, useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Typography, ListItemText } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import { items } from "../utils/sibebarPaths";
import Logo from "../assets/images/logo.png";
import Navbar from "./Navbar";


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

          "& .ps-menu-button::after ": {
            content: '""',
            position: "absolute",
            width: "100%",
            transform: "scaleX(0)",
            height: "2px",
            bottom: 0,
            left: 0,
            backgroundColor: "#0087ca",
            transformOrigin: "bottom right",
            transition: "transform 0.25s ease-out",
          },

          "& .ps-menu-button:hover::after ": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },

          "& .ps-menu-button:active ": {
            background: `#002c54 !important`,
          },
          }}>
         <MenuItem key={subItem.title}>
            <ListItemText sx={{ 
              textAlign: "end"
              }}>{subItem.title}</ListItemText>
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


const SidebarLayout = ({ children }) => {
  const [selected, setSelected] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarClassName, setSidebarClassName] = useState("sidebar");

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 1300){
        setSidebarClassName("sidebar sidebar-is-closed")
      } else {
        setSidebarClassName("sidebar sidebar-is-open")

      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <Sidebar className={isSidebarOpen ? "sidebar  sidebar-is-open" : sidebarClassName}>
          <Menu>
            <Box mb="25px">
              <Box sx={{
                position: "absolute",
                left: "81%",
                top: "1%",
              }}>
                <ClearIcon onClick={() => {
                setIsSidebarOpen(!isSidebarOpen)
                }} className="navbar-open-sidebar"/>
              </Box>
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
      <div className="container">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
