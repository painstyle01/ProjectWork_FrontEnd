import React from 'react';
import './VideoCategory.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function VideoCategory(thisPage) {

  let links = ['franko-vdoma', 'miy-izmaragd', 'intelektualna-biografiya', 'filosofski-snidanky', 'semper-tiro', 'miy-franko',
'frankustyka', 'podiyi-poza-seriyamy']

  const [category, getCategory] = useState([]);
  const page = useParams()
    
  useEffect(() => {
    (async () => {
      try {
        var response = await fetch('http://frankos-museum-backend.azurewebsites.net/api/list-video');
        var categories = await response.json()
        var fullUrl = window.location.pathname
        var split = fullUrl.split('/')
        var thisPage = split[split.length-1]
        var category = categories.filter(category => category.id == links.indexOf(thisPage)+1)[0]
        getCategory(category)
      } catch (e) {
      }
    })();
  }, []);
  
    return (
      <div>
        <div className="videoTopImage" style={{backgroundImage: `url(http://frankos-museum-backend.azurewebsites.net${category.inner_picture})`}}>
        </div>
          <div className="videoTopImage2">
            <Typography className="igraSans" variant="h2" color="white" fontSize="80px" alignSelf='flex-end'>{category.title}</Typography>
          </div>
        <div style={{backgroundColor: 'white', padding: '7%'}}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className="igraSans" variant="h4" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '20px'}}>
                Опис
              </Typography>
              <Typography variant="body2" component="div" color='primary'>
                {category.description}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src={'http://frankos-museum-backend.azurewebsites.net'+category.inner_picture} alt='' width='100%'></img>
            </Grid>
          </Grid>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div style={{margin:'auto', width: '274px', backgroundColor: 'white'}}>
            <NavLink to={window.location.pathname+'/watch'}>
              <Button className='openVideoListButton' variant="outlined">
                <Stack direction="row" spacing={1} padding='10px 50px'>
                  <MenuIcon/>
                  <div style={{fontWeight: 'bold'}}>Список відео</div>
                </Stack>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    )    
  }

export default VideoCategory;