import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './theme/Theme';
import SidebarLayout from "./components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './pages/dashboard';

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter>
      <SidebarLayout>
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
        </Routes> 
       </SidebarLayout>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
