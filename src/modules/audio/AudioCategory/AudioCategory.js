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
import img1 from '../../../images/mf.jpg'
import img2 from '../../../images/mf1.jpg'

function AudioCategory(thisPage) {

  const [category, getCategory] = useState([]);
  const page = useParams()
    
  useEffect(() => {
    (async () => {
      try {
        // var response = await fetch('http://frankos-museum-backend.azurewebsites.net/video');
        // var categories = await response.json()
        var categories = [{'title': 'Мій Франко', 'picture': img1, 'inner_picture': img2, 'slug': 'miy-franko', 'description': 'Кожен українець рано чи пізно стикається з постаттю Івана Франка. Для декого він залишається назвою вулиці в рідному місті, для інших – напівзабутим іменем зі шкільного підручника, для ще інших – визначним діячем давно минулих часів. Але є ті, для кого така зустріч стає початком довгого діалогу з великою живою людиною – почасти вчителем, почасти другом, – діалогу не завжди легкого, але незмінно цікавого. Саме такі люди є героями циклу зустрічей «Мій Франко» у Домі Франка.'}]
        var fullUrl = window.location.pathname
        var split = fullUrl.split('/')
        var thisPage = split[split.length-1]
        var category = categories.filter(category => category.slug == thisPage)[0]
        getCategory(category)
      } catch (e) {
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <div>
        {/* <div className="audioTopImage" style={{backgroundImage: `url(http://frankos-museum-backend.azurewebsites.net${category.inner_picture})`}}> */}
        <div className="audioTopImage" style={{backgroundImage: `url(${category.inner_picture})`}}>
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
              <Typography variant="body2" component="div" color='primary'>
                {category.description}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* <img src={'http://frankos-museum-backend.azurewebsites.net'+category.picture} alt='' width='100%'></img> */}
              <img src={category.inner_picture} alt='' width='100%'></img>
            </Grid>
          </Grid>
        </div>
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
    )
  }

export default AudioCategory;