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
import { useParams } from 'react-router-dom';
import img1 from '../../../images/mf.jpg'
import img2 from '../../../images/mf1.jpg'

function ListenAudio(thisPage) {

  let links = ['miy-franko', 'filosofski-snidanky', 'semper-tiro', 'intelektualna-biografiya', 'miy-izmaragd', 'dim-poeta',
  'frankustyka', 'podiyi-poza-seriyamy']

  const [audios, getAudios] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState({id: 1, title: 'Мій Франко з Миколою Ільницьким', subtitle: 'by Віктор Мартинюк', audio_file: 'https://frankos-museum-backend.azurewebsites.net/static/audio.mp3', slug: 'miy-franko', description: 'Перша бесіда з циклу "Мій Франко". Розповідає літературознавиця, доктор філологічних наук, професорка, завідувачка кафедри філології гуманітарного факультету УКУ лауреатка Міжнародної премії імені Івана Франка Ярослава Мельник.'});
  const [pageToReturn, setPageToReturn] = useState(window.location.pathname.split('/listen')[0]);
  const page = useParams()

  useEffect(() => {
    (async () => {
      try {
        // var response1 = await fetch('http://frankos-museum-backend.azurewebsites.net/audio');
        // var categories = await response1.json()
        var categories = [{'title': 'Мій Франко', 'picture': img1, 'inner_picture': img2, 'slug': 'miy-franko', 'description': 'Кожен українець рано чи пізно стикається з постаттю Івана Франка. Для декого він залишається назвою вулиці в рідному місті, для інших – напівзабутим іменем зі шкільного підручника, для ще інших – визначним діячем давно минулих часів. Але є ті, для кого така зустріч стає початком довгого діалогу з великою живою людиною – почасти вчителем, почасти другом, – діалогу не завжди легкого, але незмінно цікавого. Саме такі люди є героями циклу зустрічей «Мій Франко» у Домі Франка.'}]
        var url = window.location.pathname
        var thisPage = ''
        categories.map(function(cat){
          if((url.search(cat.slug))!=-1){
            thisPage = cat.slug
          }
        })
        // var response2 = await fetch('http://frankos-museum-backend.azurewebsites.net/audio/1');
        // var allAudios = await (response2.json())
        var allAudios = [{id: 1, title: 'Мій Франко з Миколою Ільницьким', subtitle: 'by Віктор Мартинюк', audio_file: 'https://frankos-museum-backend.azurewebsites.net/static/audio.mp3', slug: 'miy-franko', description: 'Перша бесіда з циклу "Мій Франко". Розповідає літературознавиця, доктор філологічних наук, професорка, завідувачка кафедри філології гуманітарного факультету УКУ лауреатка Міжнародної премії імені Івана Франка Ярослава Мельник.'}]
        var currentAudios = allAudios.filter(audio => audio.slug === thisPage)
        getAudios(currentAudios)
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
        <Stack spacing={2}>
        <div className="igraSans" style={{fontSize: '60px', lineHeight: '60px'}}>{selectedAudio.title}</div>
        <div className="igraSans" style={{fontSize: '40px', lineHeight: '40px'}}>{selectedAudio.subtitle}</div>
          <ReactAudioPlayer
            // src={'http://frankos-museum-backend.azurewebsites.net'+audio.audio_file}
            src={selectedAudio.audio_file}
            controls
            style={{width: '100%', alignSelf: 'center', marginTop: '30px'}}
          />
        </Stack>
        <Typography className="igraSans" variant="h4" component="div" color='primary' style={{lineHeight: '80px', marginTop: '50px'}}>
          Опис
        </Typography>
        <Typography variant="body2" component="div" color='primary'>
          {selectedAudio.description}
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
                          // src={'http://frankos-museum-backend.azurewebsites.net'+audio.audio_file}
                          src={audio.audio_file}
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