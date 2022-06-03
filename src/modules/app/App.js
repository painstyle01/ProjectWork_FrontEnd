import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ShopPage from '../ShopPage/MainShopPage/Shop'
import MainPage from '../MainPage/MainPage'
import AudioPage from '../audio/AudioPage/AudioPage'
import VideoPage from '../video/VideoPage/VideoPage'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import VideoCategory from '../video/VideoCategory/VideoCategory';
import AudioCategory from '../audio/AudioCategory/AudioCategory';
import WatchVideo from '../video/WatchVideo/WatchVideo';
import ListenAudio from '../audio/ListenAudio/ListenAudio'
import MediaAboutUs from '../MediaAboutUs/MediaAboutUs'
import Contact from '../../components/Contact/Contact'
import Support from '../../components/Support/Support'
import ThreeDTour from '../3DTour/3DTour'
import Product from '../ShopPage/ProductPage/ProductPage'
import Cart from '../ShopPage/Cart/Cart'
import Order from '../ShopPage/OrderPage/order'
import Team from '../TeamPage/TeamPage'
import Excursion from '../ExcursionPage/ExcursionPage'
import Biography from '../FrankBiography/Biography'
import History from '../HistoryPage/HistoryPage'
import Library from '../LibraryPage/MainLibraryPage/LibraryPage'
import BookPage from '../LibraryPage/BookPaage/BookPage'
import Projects from '../Projects/Projects'

function App() {
  return (
    <div>
    <ThemeProvider theme={MainTheme}>
    <BrowserRouter>
      {<Header/>}
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/shop" element={<ShopPage/>}/>
        <Route exact path="/video" element={<VideoPage/>}/>
        <Route path={"/video/:page"} element={<VideoCategory/>}/>
        <Route path={"/video/:page/watch"} element={<WatchVideo/>}/>
        <Route exact path="/audio" element={<AudioPage/>}/>
        <Route path={"/audio/:page"} element={<AudioCategory/>}/>
        <Route path={"/audio/:page/listen"} element={<ListenAudio/>}/>
        <Route exact path="/media-about-us" element={<MediaAboutUs/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/support" element={<Support/>}/>
        <Route exact path="/3Dtour" element={<ThreeDTour/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/order" element={<Order/>}/>
        <Route exact path="/team" element={<Team/>}/>
        <Route exact path="/excursion" element={<Excursion/>}/>
        <Route exact path="/biography" element={<Biography/>}/>
        <Route exact path="/history" element={<History/>}/>
        <Route exact path="/library" element={<Library/>}/>
        <Route exact path="/book/:id" element={<BookPage/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
      </Routes>
      {<Footer/>}
    </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App;
