import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import MedilineTheme from './theme/MedilineTheme';
import SidebarLayout from "./components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Patients from "./pages/patients";
import Profetionals from "./pages/profetionals";

const App = () => {

  return (
    <ThemeProvider theme={MedilineTheme}>
      <CssBaseline />
      <BrowserRouter>
      <SidebarLayout>
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
          <Route exact path="/personas/pacientes" element={<Patients/>}/>
          <Route exact path="/personas/profesionales" element={<Profetionals/>}/>

        </Routes> 
       </SidebarLayout>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
