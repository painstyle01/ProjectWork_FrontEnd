import React from 'react';
import './AudioCategory.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AudioCategory(thisPage) {

  let links = ['miy-franko', 'filosofski-snidanky', 'semper-tiro', 'intelektualna-biografiya', 'miy-izmaragd', 'dim-poeta',
  'frankustyka', 'podiyi-poza-seriyamy']

  const [category, getCategory] = useState([]);
  const [description, getDescription] = useState([]);
  const page = useParams()
    
  useEffect(() => {
    (async () => {
      try {
        var response = await fetch('http://frankos-museum-backend.azurewebsites.net/api/list-audio');
        var categories = await response.json()
        var fullUrl = window.location.pathname
        var split = fullUrl.split('/')
        var thisPage = split[split.length-1]
        var category = categories.filter(category => category.id == links.indexOf(thisPage)+1)[0]
        category.description=category.description.split("\r\n")
        getCategory(category)
        getDescription(category.description)
      } catch (e) {
      }
    })();
  }, []);

    return (
      <div>
        <div className="audioTopImage" style={{backgroundImage: `url(http://frankos-museum-backend.azurewebsites.net${category.inner_picture})`}}>
        </div>
          <div className="audioTopImage2">
            <Typography className="igraSans" variant="h2" color="white" fontSize="80px" alignSelf='flex-end'>{category.title}</Typography>
          </div>
        <div style={{backgroundColor: 'white', padding: '7%'}}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className="igraSans" variant="h4" component="div" color='primary' style={{marginBottom: '20px'}}>
                Опис
              </Typography>
              {description.map(function(item) {
                return (
                  <Typography variant="body2" component="div" color='primary' marginBottom='10px'>
                    {item}
                  </Typography>
                )
              })}
            </Grid>
            <Grid item xs={6}>
              <img src={'http://frankos-museum-backend.azurewebsites.net'+category.inner_picture} alt='' width='100%'></img>
            </Grid>
          </Grid>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div style={{margin:'auto', width: '274px'}}>
            <NavLink to={window.location.pathname+'/listen'}>
              <Button className='openAudioListButton' variant="outlined">
                <Stack direction="row" spacing={1} padding='10px 50px'>
                  <MenuIcon/>
                  <div style={{fontWeight: 'bold'}}>Список аудіо</div>
                </Stack>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }

export default AudioCategory;