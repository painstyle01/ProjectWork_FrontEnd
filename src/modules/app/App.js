import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route, Link} from 'react-router-dom'
import ProductPage from '../ShopPage/ProductPage/ProductPage'
import Shop from '../ShopPage/MainShopPage/Shop'
import Cart from '../ShopPage/Cart/Cart'
import Order from '../ShopPage/OrderPage/order'


function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          
            <Link to="/shop">To Shop </Link>
            <Link to="/cart">To Cart </Link>
        </ThemeProvider>

        <Routes>
          <Route path='/products/:id' element={<ProductPage/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App;