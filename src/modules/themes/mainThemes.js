import {createTheme} from '@mui/material/styles'

const palette = {
  mainColor: '#000',
  TextColor: '#fff',
}

const MainTheme = createTheme({
  palette: {
    primary: {
      main: palette.mainColor
    },
    secondary:{
      main: palette.TextColor
    }
  },

  typography:{
    fontFamily: ['Lato', 'sans-serif'],
    h2:{
      fontFamily: ['Crimson Pro', 'serif'],
      lineHeight: '1.2',
      letterSpacing: '-0.05rem',
      fontSize: '2.1rem'
    },
    h3:{
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '12px'
    },
    body1:{
      fontWeight: 'normal',
      lineHeight: 1.6
    },
    body2:{
      fontFamily: ['Montserrat',"Helvetica Neue",'Helvetica','Arial'],
      fontWeight: 'normal',
      lineHeight: 1.6,
      fontSize: '16px'
    },
  },
  
    components: {
      MuiButton:{
        styleOverrides: {
          root: {
            boxSizing: 'border-box',
            textTransform: 'none',
            fontSize: '1rem',
            display: 'inline-block',
            lineheight: 1,
            textalign: 'center',
            textdecoration: 'none',
            background: 'transparent',
            border: '2px solid',
            transition: 'background-color 0.2s ease',
            borderRadius: '35px'
          },
        },

      },
      MuiTypography: {
        styleOverrides:{
          root:{
            color: palette.TextColor,
          }
        }
      }
    },
    shape:{
      borderRadius: '0'
    }
  })



  export default MainTheme;
