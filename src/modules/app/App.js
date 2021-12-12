import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import MainPage from '../MainPage/MainPage'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function App() {
  return (
    <div className="background">
    <ThemeProvider theme={MainTheme}>
      <Header/>
      <MainPage/>
      <Footer/>
    </ThemeProvider>
    </div>
    
  );
}

export default App;
