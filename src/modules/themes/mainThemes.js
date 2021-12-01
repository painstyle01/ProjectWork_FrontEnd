import {createMuiTheme} from '@mui/material/styles'

const palette = {
  mainColor: '#ef7f16',
  TextColor: '#ffffff',
}

const MainTheme = createMuiTheme({
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
    }
  },
  
    components: {
      MuiButton:{
        styleOverrides: {
          root: {
            boxSizing: 'border-box',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 1000,
            fontSize: '1rem',
            display: 'inline-block',
            padding: '1rem 2.9rem',
            lineheight: 1,
            textalign: 'center',
            textdecoration: 'none',
            background: 'transparent',
            border: '2px solid',
            borderColor: palette.mainColor,
            transition: 'background-color 0.2s ease',
            borderRadius: '0px',
            '&:hover': {
              background: palette.mainColor,
              color: palette.TextColor
            }
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
