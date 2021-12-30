import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import ShopPage from '../ShopPage/MainShopPage/Shop'

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <ShopPage> </ShopPage>
    </ThemeProvider>
    
  );
}

export default App;