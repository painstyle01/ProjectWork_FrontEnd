import React from 'react';
import './ListenAudio.css';
import Typography from '@mui/material/Typography';
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
import ReactAudioPlayer from 'react-audio-player';

function ListenAudio() {

  let links = ['miy-franko', 'filosofski-snidanky', 'semper-tiro', 'intelektualna-biografiya', 'miy-izmaragd', 'dim-poeta',
  'frankustyka', 'podiyi-poza-seriyamy']

  const [audios, getAudios] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState({id: 1, title: 'Мій Франко з Миколою Ільницьким', subtitle: 'by Миколою Ільницьким', audio_file: '/media/audio/my_franko.mp3', link_audio: 1});
  const [pageToReturn, setPageToReturn] = useState(window.location.pathname.split('/listen')[0]);

  useEffect(() => {
    (async () => {
      try {
        var response1 = await fetch('http://frankos-museum-backend.azurewebsites.net/audio');
        var categories = await response1.json()
        var url = window.location.pathname
        var thisPage = ''
        links.map(function(link){
          if((url.search(link))!==-1){
            return(
              thisPage = link
            )
          }
          else{
            return(0)
          }
        })
        var category = categories.filter(c => c.id === links.indexOf(thisPage)+1)[0]
        var response2 = await fetch('http://frankos-museum-backend.azurewebsites.net/audio/1');
        var allAudios = await (response2.json())
        var currentAudios = allAudios.filter(audio => audio.link_audio === category.id)
        getAudios(currentAudios)
      } catch (e) {
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false)};

  return (
    <div>
      <div style={{margin: '4% 7% 7% 7%'}}>          
        <Stack spacing={2}>
        <div style={{fontSize: '60px', lineHeight: '60px', fontWeight: 'bold'}}>{selectedAudio.title}</div>
        <div style={{fontSize: '40px', lineHeight: '40px'}}>{selectedAudio.subtitle}</div>
          <ReactAudioPlayer
            src={'http://frankos-museum-backend.azurewebsites.net'+selectedAudio.audio_file}
            controls
            style={{width: '100%', alignSelf: 'center', marginTop: '30px'}}
          />
        </Stack>
        <Typography variant="h4" component="div" color='primary' style={{fontWeight: 'bold', lineHeight: '80px'}}>
          Опис
        </Typography>
      </div>
      <div style={{margin:'auto', width: '274px'}}>
        <Button className='openAudioListButton' variant="outlined" onClick={handleOpen}>
          <Stack direction="row" spacing={1} padding='10px 50px'>
            <MenuIcon/>
            <div style={{fontWeight: 'bold'}}>Список аудіо</div>
          </Stack>
        </Button>
        <Dialog
          fullScreen
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className='chooseAudio'>
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
            {audios.reverse().map(function(audio) {
              return (
                <Grid container>
                  <Grid item xs={0} sm={2}></Grid>
                  <Grid item xs={12} sm={8}>
                    <div className="audioCard" style={{backgroundColor: 'black', padding: '20px'}} onClick={function(){setSelectedAudio(audio); handleClose(); setPageToReturn(window.location.pathname)}}>
                      <Stack spacing={2} sx={{alignSelf: 'center', color: 'white'}}>
                        <div style={{fontSize: '20px', lineHeight: '20px', fontWeight: 'bold'}}>{audio.title}</div>
                        <p>{audio.subtitle}</p>
                        <ReactAudioPlayer
                          src={'http://frankos-museum-backend.azurewebsites.net'+audio.audio_file}
                          controls
                          style={{width: '100%', alignSelf: 'center'}}
                        />
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

export default ListenAudio;