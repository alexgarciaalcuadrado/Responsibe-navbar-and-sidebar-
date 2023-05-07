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

export const items = [
    { title: "Dashboard", icon: <ViewQuiltIcon />, path:"/" },
    { title: "Workers", icon: <PeopleAltIcon />, subItems:[
      {
        title: "Patients", path:"/"
      },
      {
        title: "Professionals", path:"/"
      }]
    },
    { title: "Consultations", icon: <HandshakeIcon />, subItems:[
      {
        title: "Emergencies"
      },
      {
        title: "Programated"
      }] 
    },
    { title: "Relations", icon: <HandshakeIcon />, subItems:[
      {
        title: "Companies"
      },
      {
        title: "Investors"
      }] 
    },
    { title: "Comunication", icon: <SellIcon />,
    subItems:[
      {
        title: "Direct"
      },
      {
        title: "Intermediaries"
      }]  
    },
    { title: "Payment", icon: <MonetizationOnIcon />},
    { title: "Comissions", icon: <ReceiptLongIcon />},
    { title: "Sales", icon: <MoveToInboxIcon /> },
    { title: "Reports", icon: <AssessmentIcon /> },
    { title: "Configuration", icon: <BuildCircleIcon /> },
    { title: "Log out", icon: <LogoutIcon /> },
  ]