import { createTheme } from '@material-ui/core/styles';
import Raleway from './Raleway';

const MedilineTheme = createTheme({
  palette: {
    secondary: {
      main: '#DA2037'
    }
  },
  btnNext: {
    backgroundColor: 'red !important',
  },
  typography: {
    button:{
      textTransform:'none'
    },
    fontFamily: 'Raleway, Arial',
  },

  overrides: {
    MuiButtonRoot: {},
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Raleway],
      },
    },
  },
});

export default MedilineTheme;
