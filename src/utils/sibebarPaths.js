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