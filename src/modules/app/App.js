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
        <Route key={1} exact path="/" element={<MainPage/>}/>
        <Route key={2} exact path="/shop" element={<ShopPage/>}/>
        <Route key={3} exact path="/video" element={<VideoPage/>}/>
        <Route key={4} path={"/video/:page"} element={<VideoCategory/>}/>
        <Route key={5} path={"/video/:page/watch"} element={<WatchVideo/>}/>
        <Route key={6} exact path="/audio" element={<AudioPage/>}/>
        <Route key={7} path={"/audio/:page"} element={<AudioCategory/>}/>
        <Route key={8} path={"/audio/:page/listen"} element={<ListenAudio/>}/>
        <Route key={9} exact path="/media-about-us" element={<MediaAboutUs/>}/>
        <Route key={10} exact path="/contact" element={<Contact/>}/>
        <Route key={11} exact path="/support" element={<Support/>}/>
        <Route key={12} exact path="/3Dtour" element={<ThreeDTour/>}/>
        <Route key={13} exact path="/products/:id" element={<Product/>}/>
        <Route key={14} exact path="/cart" element={<Cart/>}/>
        <Route key={15} exact path="/order" element={<Order/>}/>
        <Route key={16} exact path="/team" element={<Team/>}/>
        <Route key={17} exact path="/excursion" element={<Excursion/>}/>
        <Route key={18} exact path="/biography" element={<Biography/>}/>
        <Route key={19} exact path="/history" element={<History/>}/>
        <Route key={20} exact path="/library" element={<Library/>}/>
        <Route key={21} exact path="/book/:id" element={<BookPage/>}/>
        <Route key={22} exact path="/projects" element={<Projects/>}/>
      </Routes>
      {<Footer/>}
    </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App;
