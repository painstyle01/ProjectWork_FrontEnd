import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'



function App() {
  return (
    <ThemeProvider theme={MainTheme}>
    </ThemeProvider>
    
  );
}

export default App;
