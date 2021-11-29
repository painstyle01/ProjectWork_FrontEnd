import {createMuiTheme} from '@mui/material/styles'

const MainTheme = createMuiTheme({
    components: {
      MuiButton:{
        styleOverrides: {
          root: {
            boxSizing: 'border-box',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 1000,
            fontsize: '1rem',
            display: 'inline-block',
            padding: '1rem 2.9rem',
            lineheight: 1,
            textalign: 'center',
            textdecoration: 'none',
            background: 'transparent',
            color: '#ef7f16',
            border: '2px solid #ef7f16',
            transition: 'background-color 0.2s ease',
            borderRadius: '0px',
            '&:hover': {
              background: '#ef7f16',
              color: 'white'
            }
          },
        },
      }
    }
  })


  export default MainTheme;
