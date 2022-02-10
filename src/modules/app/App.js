import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import ShopPage from '../ShopPage/MainShopPage/Shop'
import Footer from '../../components/Footer/Footer'

function App() {
  return (
    <ThemeProvider theme={MainTheme}>

    </ThemeProvider>
    
  );
}

export default App;