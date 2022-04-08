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

function App() {
  return (
    <div>
    <ThemeProvider theme={MainTheme}>
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route key={1} exact path="/" element={<MainPage/>}/>
        <Route key={2} exact path="/shop" element={<ShopPage/>}/>
        <Route key={3} exact path="/video" element={<VideoPage/>}/>
        {['/franko-vdoma', '/miy-izmaragd', '/intelektualna-biografiya', '/filosofski-snidanky', '/semper-tiro', '/miy-franko',
        '/frankustyka', '/podiyi-poza-seriyamy'].map((path) => 
            <Route key={4} path={"/video"+path} element={<VideoCategory/>} />
        )}
        <Route key={5} exact path="/audio" element={<AudioPage/>}/>
        {['/dim-poeta', '/miy-izmaragd', '/intelektualna-biografiya', '/filosofski-snidanky', '/semper-tiro', '/miy-franko',
        '/frankustyka', '/podiyi-poza-seriyamy'].map((path) => 
            <Route key={6} path={"/audio"+path} element={<AudioCategory/>} />
        )}
      </Routes>
      {<Footer/>}
    </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App;
