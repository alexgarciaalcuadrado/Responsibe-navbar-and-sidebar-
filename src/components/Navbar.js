import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Input from '@mui/material/Input';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BuildIcon from '@mui/icons-material/Build';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Navbar = ({setIsSidebarOpen, isSidebarOpen}) => {
    const location = useLocation();
    const [navClass, setNavClass] = useState("navbar sticky-top navbar-expand-lg navbar-light bg-light"); 
    const pathName = location?.pathname === "/" ? "Dashboard" : ""

    const handleScroll = () => {
        const nav = document.querySelector(".navbar");
        const scrollTop = window.pageYOffset;

        if(nav){
         if (scrollTop > 30) {
            setNavClass('navbar sticky-top navbar-expand-lg navbar-light bg-light navbar-scrolled');
        } else {
            setNavClass('navbar sticky-top navbar-expand-lg navbar-light bg-light');
        }   
        }
        
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <nav className={navClass}>
      <div className=" navbar-collapse" id="navbarSupportedContent">
        <DensityMediumIcon onClick={() => {
            setIsSidebarOpen(!isSidebarOpen)
        }} className="navbar-open-sidebar"/>
        
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" style={{
                color:"#344767",
                display: "flex",
                alignItems: "flex-end"
            }}>
            <HomeIcon />
            <a className="nav-link" style={{padding:"0 3px"}} href="/">
               / {pathName} <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
          
        <div className="navbar-input">
        <Input
          sx={{
            border: "1px solid #d2d2d2",
            borderRadius: "10px",
            padding: "3px 10px",
            marginRight: "10px"
          }}
            type="search"
            placeholder="Buscar"
          />
        </div>
        
        <div className="navbar-icons">
        <AccountCircleIcon />
        <BuildIcon />
        <NotificationsIcon /> 
        </div>
         
      </div>
    </nav>
  );
};
export default Navbar;
