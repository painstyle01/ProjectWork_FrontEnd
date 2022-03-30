import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'







function App() {
  return (
    <ThemeProvider theme={MainTheme}>
   

    </ThemeProvider>

  );
}

export default App;
