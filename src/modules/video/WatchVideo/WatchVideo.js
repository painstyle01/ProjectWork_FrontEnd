import React from 'react';
import './WatchVideo.css';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player'
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import img1 from '../../../images/fv.jpg'
import img2 from '../../../images/fv1.jpg'

function WatchVideo(thisPage) {

  let links = ['franko-vdoma', 'miy-izmaragd', 'intelektualna-biografiya', 'filosofski-snidanky', 'semper-tiro', 'miy-franko',
'frankustyka', 'podiyi-poza-seriyamy']
  
  const [videos, getVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({id: 1, title: 'Яке улюблене вино Івана Франка? Франко вдома #1', video_file: null, youtube_link: 'https://www.youtube.com/embed/EOf0R9lj3dU', slug: 'franko-vdoma', description: "Богдан Тихолоз про вино з далмацьких лоз."});
  const [pageToReturn, setPageToReturn] = useState(window.location.pathname.split('/watch')[0]);
  const page = useParams()

  useEffect(() => {
    (async () => {
      try {
        // var response1 = await fetch('http://frankos-museum-backend.azurewebsites.net/video');
        // var categories = await response1.json()
        var categories = [{'title': 'Франко вдома', 'picture': img1, 'inner_picture': img2, 'slug': 'franko-vdoma', 'description': 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'}]
        var url = window.location.pathname
        var thisPage = ''
        categories.map(function(cat){
          if((url.search(cat.slug))!=-1){
            thisPage = cat.slug
          }
        })
        // var response2 = await fetch('http://frankos-museum-backend.azurewebsites.net/video/1');
        // var allVideos = await (response2.json())
        var allVideos = [
          {id: 1, title: 'Яке улюблене вино Івана Франка? Франко вдома #1', video_file: null, youtube_link: 'https://www.youtube.com/embed/EOf0R9lj3dU', slug: 'franko-vdoma', description: "Богдан Тихолоз про вино з далмацьких лоз."},
          {id: 1, title: 'Що то за Лис, що Микитою зветься? Франко вдома #2', video_file: null, youtube_link: 'https://www.youtube.com/embed/wjUeR6hv5XA', slug: 'franko-vdoma', description: "Галя Мазур про хвостатого друга Франчат."}
        ]
        var currentVideos = allVideos.filter(video => video.slug == thisPage)
        getVideos(currentVideos)
      } catch (e) {
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false)};

  return (
    <div>
      <div style={{margin: '4% 7% 7% 7%'}}>
        <div style={{fontSize: '60px', lineHeight: '60px', fontWeight: 'bold'}}>{selectedVideo.title}</div>
        <iframe src={selectedVideo.youtube_link} controls style={{marginTop: '30px', width: '85vw', height: '48vw'}}>
        </iframe>
        <Typography variant="h4" component="div" color='primary' style={{fontWeight: 'bold', lineHeight: '80px'}}>
          Опис
        </Typography>
        <Typography variant="body2" component="div" color='primary'>
          {selectedVideo.description}
        </Typography>
      </div>
      <div style={{margin:'auto', width: '274px'}}>
        <Button className='openVideoListButton' variant="outlined" onClick={handleOpen}>
          <Stack direction="row" spacing={1} padding='10px 50px'>
            <MenuIcon/>
            <div style={{fontWeight: 'bold'}}>Список відео</div>
          </Stack>
        </Button>
        <Dialog
          fullScreen
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className='chooseVideo'>
            <AppBar elevation={0} sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
              <Toolbar>
                <Stack direction='row' justifyContent="space-between" width='100%' marginTop='40px'>
                  <div></div>
                  <NavLink to={pageToReturn} className='closeButton'>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon/>
                  </IconButton>
                  </NavLink>
                </Stack>
              </Toolbar>
            </AppBar>
            {videos.reverse().map(function(video) {
              return (
                <Grid container>
                  <Grid item xs={0} sm={2}></Grid>
                  <Grid item xs={12} sm={8}>
                      <div className="videoCard" style={{backgroundColor: 'black', padding: '20px'}} onClick={function(){setSelectedVideo(video); handleClose(); setPageToReturn(window.location.pathname)}}>
                        <Stack direction="row" spacing={2}>
                          <iframe src={video.youtube_link} controls style={{width: '320px', height: '180px'}}/>
                          <Stack spacing={2} sx={{alignSelf: 'center', color: 'white'}}>
                            <div style={{fontSize: '20px', lineHeight: '20px', fontWeight: 'bold'}}>{video.title}</div>
                            <Typography variant="body2" height="25px" width="35vw" style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{video.description}</Typography>
                          </Stack>
                        </Stack>
                      </div>
                  </Grid>
                  <Grid item xs={0} sm={2}></Grid>
                </Grid>
              )
            })}
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default WatchVideo;