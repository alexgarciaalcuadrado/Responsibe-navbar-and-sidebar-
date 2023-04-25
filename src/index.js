import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from "react-pro-sidebar";

import { MaterialUIControllerProvider } from './context/materialUiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProSidebarProvider>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </ProSidebarProvider>
  </React.StrictMode>
);

reportWebVitals();
