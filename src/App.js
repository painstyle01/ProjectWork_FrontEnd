import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from './themes/mainThemes'
import Typography from '@mui/material/Typography'










function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      
    </ThemeProvider>
    
  );
}

export default App;
