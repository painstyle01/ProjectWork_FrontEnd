import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import MainPage from '../MainPage/MainPage'


function App() {
  return (
    <div className="background">
    <ThemeProvider theme={MainTheme}>
      <MainPage />
    </ThemeProvider>
    </div>
    
  );
}

export default App;
