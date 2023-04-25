import Colors from './Colors';
const ApplicationStyles = {
  btnBlueNext: {
    backgroundColor: Colors.AzulMediline,
    borderRadius: '25px',
    color: 'white',
    width: '165px',
    margin: '0 15px',
    '&:hover': {
      backgroundColor: '#003F77',
    },
    '&:disabled': {
      backgroundColor: Colors.Azul75,
      color: Colors.GrisClaro
    },
  },
  btnSubmitRed: {
    backgroundColor: Colors.RojoMediline,
    borderRadius: '25px',
    width: '165px',
    margin: '0 15px',
    color:'white',
    '&:hover': {
      backgroundColor: '#E84353',
    },
  },
  btnBoxCenter: {
    margin: '30px 0',
    textAlign: 'center',
  },
  btnBoxCenterM0: {
    textAlign: 'center',
    width: '100%'
  },
  btnmodalObra : {
    padding: '10px',
    float: 'right',
  },
  stepIconRed: {
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: Colors.RojoMediline,
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color: 'grey',
    },
  },
  btnSpacing: {
    margin: '30px 10px 0'
  },
  btnRedNextOutline: {
    backgroundColor: 'white',
    border: '1px solid ' + Colors.RojoMediline,
    color: Colors.RojoMediline,
    borderRadius: '25px',
    width: '165px',
    margin: '0 15px',
    '& .MuiButton-root.Mui-disabled': {
      border: '1px solid dark !important',
    },
  },
  btnBlueOutline: {
    backgroundColor: 'white',
    border: '1px solid ' + Colors.AzulMediline,
    color: Colors.AzulMediline,
    borderRadius: '25px',
    width: '165px',
    margin: '0 15px',
    '& .MuiButton-root.Mui-disabled': {
      border: '1px solid dark !important',
    },
  },
  btnRedNextOutlineDissable: {
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.26)',
    color: Colors.RojoMediline,
    borderRadius: '25px',
    width: '165px',
    margin: '0 15px',
  },
  chipAzul: {
    margin: '2px',
    backgroundColor: Colors.Azul75,
    color: 'white',
    '& .MuiChip-deleteIcon': {
      color: 'white',
    },
  },
  chkAzul: {
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: Colors.Azul75,
    },
  },
  titleRed: {
    color: Colors.RojoMediline,
    fontWeight: '800',
    fontSize: '28px',
    margin: '10px',
  },
  chipDay: {
    border: 'solid 0px #FFFFFF',
    borderRadius: '75px',
    boxShadow: '  0px 10px 9px #E0E0E0;',
    margin: '0 10px 10px 0',
    width: '85px',
    height: '45px',
    '& .MuiChip-colorPrimary ': {
      backgroundColor: 'red !import',
    },
  },
  titleBlue:{
    fontFamily: 'Raleway',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'center',
    marginBottom: '20px',
    color: Colors.AzulMediline,
  },
  subtitleBlue:{
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'center',
    marginBottom: '20px',
    color: Colors.AzulMediline,
  },
  colorPrimary: {
    color: 'white',
    backgroundColor: Colors.AzulMediline,
    '& .MuiChip-clickableColorPrimary:hover, .MuiChip-clickableColorPrimary:focus': {
      backgroundColor: Colors.AzulMediline,
    },
  },
  colorOutLinePrimary: {
    color: 'black',
    backgroundColor: 'white',
  },
  ListItemTextRed: {
    color: Colors.RojoMediline,
  },
  paper: {
    border: "1px solid",
    padding: '10px',
    backgroundColor: 'white'
  },
  listTime: {
    height: '200px',
    overflowY: 'scroll',
    width: '100%',
  },
  listItem:{
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius:' 0px 20px 20px 20px'
  },
  ToolBarButton:{
    // backgroundColor:'red',//
    padding: '10px',
    textAlign:'end'
  }
};
export default ApplicationStyles;