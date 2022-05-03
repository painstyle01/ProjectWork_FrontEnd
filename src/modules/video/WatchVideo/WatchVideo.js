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

function WatchVideo() {

  let links = ['franko-vdoma', 'miy-izmaragd', 'intelektualna-biografiya', 'filosofski-snidanky', 'semper-tiro', 'miy-franko',
'frankustyka', 'podiyi-poza-seriyamy']

  /*eslint no-unused-vars: "error"*/
  const [category, getCategory] = useState([]);
  const [videos, getVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({id: 1, title: 'Яке улюблене вино Івана Франка? Франко вдома #1', video_file: null, youtube_link: 'https://www.youtube.com/watch?v=EOf0R9lj3dU&feature=emb_title', link_video: 1});
  const [pageToReturn, setPageToReturn] = useState(window.location.pathname.split('/watch')[0]);

  useEffect(() => {
    (async () => {
      try {
        var response1 = await fetch('http://frankos-museum-backend.azurewebsites.net/video');
        var categories = await response1.json()
        var url = window.location.pathname
        var thisPage = ''
        links.map(function(link){
          if((url.search(link))!==-1){
            return(
              thisPage = link
            )
          }
        })
        var cat = categories.filter(c => c.id === links.indexOf(thisPage)+1)[0]
        getCategory(cat)
        var response2 = await fetch('http://frankos-museum-backend.azurewebsites.net/video/1');
        var allVideos = await (response2.json())
        var currentVideos = allVideos.filter(video => video.link_video === cat.id)
        getVideos(currentVideos)
      } catch (e) {
      }
    })();
  }, []);

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false)};

  return (
    <div>
      <div style={{margin: '4% 7% 7% 7%'}}>
        <div style={{fontSize: '60px', lineHeight: '60px', fontWeight: 'bold'}}>{selectedVideo.title}</div>
        <ReactPlayer url={selectedVideo.youtube_link} controls style={{marginTop: '30px'}} width='85vw' height='48vw'>
        </ReactPlayer>
        <Typography variant="h4" component="div" color='primary' style={{fontWeight: 'bold', lineHeight: '80px'}}>
          Опис
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
                <NavLink to={pageToReturn} className='closeButton'>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon style={{float: 'right!important'}}/>
                </IconButton>
                </NavLink>
              </Toolbar>
            </AppBar>
            {videos.reverse().map(function(video) {
              return (
                <Grid container>
                  <Grid item xs={0} sm={2}></Grid>
                  <Grid item xs={12} sm={8}>
                      <div className="videoCard" style={{backgroundColor: 'black', padding: '20px'}} onClick={function(){setSelectedVideo(video); handleClose(); setPageToReturn(window.location.pathname)}}>
                        <Stack direction="row" spacing={2}>
                          <ReactPlayer url={video.youtube_link} controls width='320px' height='180px'></ReactPlayer>
                          <Stack spacing={2} sx={{alignSelf: 'center', color: 'white'}}>
                            <div style={{fontSize: '20px', lineHeight: '20px', fontWeight: 'bold'}}>{video.title}</div>
                            <p>{video.description}</p>
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