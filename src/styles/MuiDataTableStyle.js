import { createTheme } from '@mui/material/styles';

export const MuiTheme = createTheme({
    components: {
       MuiTableCell: {
         styleOverrides: {
           root: {
             textAlign: "center"
           },
         },
       }
    }
   })