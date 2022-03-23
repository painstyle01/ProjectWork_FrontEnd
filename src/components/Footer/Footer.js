import React from 'react';
import './Footer.css';
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import az from '../../images/logo2.png'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function Footer() {
        return (
        <div className="footer">
          <Stack direction="row" spacing={2}>
            <div style={{fontSize: '71px', lineHeight: '50px'}}>Спланувати візит</div>
            <ArrowCircleUpIcon sx={{fontSize: '65px', transform: 'rotate(45deg)'}}/>
          </Stack>
          <Divider color='black' style={{borderBottomWidth: 4, marginBlock: '30px'}}/>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} lg={2} sx={{color: 'black'}}>
              <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '5px'}}>
                Локація
              </Typography>
              <Typography variant="body2" component="div" color='primary'>
                вул. Івана Франка, 150-152, м. Львів 79011, Україна
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '5px'}}>
                Зв'язок з нами
              </Typography>
              <Typography variant="body2" component="div" color='primary'>
                +38 096 15 84 606<br/>lviv_franko@ukr.net
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '5px'}}>
                Час роботи
              </Typography>
              <Typography variant="body2" component="div" color='primary'>
                Чекаємо на Вас щодня, крім вівторка, з 10:00 до 17:00
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '5px'}}>
                Соцмережі
              </Typography>
              <Stack direction="row" spacing={2}>
                <a className="linkIcon" href="https://www.instagram.com/dim_franka/"><InstagramIcon sx={{fontSize: '50px'}}/></a>
                <a className="linkIcon" href="https://www.youtube.com/channel/UC6UeOsivTNCowjVt3Hg5G0g"><YouTubeIcon sx={{fontSize: '50px'}}/></a>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8} lg={4} sx={{alignSelf: 'center'}}>
              <Stack direction="row" spacing={2} sx={{float: 'right'}} id='pdtrm'>
              <Typography variant="h4" component="div" color='primary' style={{fontWeight: 'bold'}}>
                Підтримай нас
              </Typography>
              <ArrowCircleUpIcon sx={{fontSize: '45px', transform: 'rotate(45deg)'}}/>
              </Stack>
            </Grid>
          </Grid>
          <Divider color='black' style={{borderBottomWidth: 4, marginBlock: '30px'}}/>
          <img src={az}></img>
          
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} sx={{marginBottom: '50px'}}>
            <Box>
            <Typography variant="h6" component="div">
              <p>Блог</p>
              <p>Про музей</p>
              <p>Контакти</p>
              <p>Новини</p>
              <a href='#'>Медіа</a>
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{marginBottom: '50px'}}>
            <Box>
            <Typography variant="h6" component="div">
              <p>Твій візит</p>
            </Typography>
            <Typography variant="h3" component="div">
              <p>Середа &#8212; Понеділок</p>
              <p>з 10.00 до 17.00</p>
              <p>купити квитки</p>
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{marginBottom: '50px'}}>
            <Box>
            <Typography variant="h6" component="div">
              <p>Зв'язатися з нами</p>
            </Typography>
            <Typography variant="h3" component="div">
              <p>+38 096 15 84 606</p>
              <a href='#'>lviv_franko@ukr.net</a>
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{marginBottom: '50px'}}>
            <Box>
            <Typography variant="h6" component="div">
              <p>Наша локація</p>
            </Typography>
            <Typography variant="h3" component="div">
              <p>вул. Івана Франка, 150-152,</p>
              <p>м. Львів, 79011, Україна</p>
              <a href='#'>Переглянути мапу</a>
            </Typography>
            </Box>
          </Grid>
          
                  
          <Grid item xs={12} sm={6}>
            <Box>
              <Stack direction="row" spacing={2}>
              <img src={logo} height='80px'></img>
              <img src={logo2} height='80px'></img>
              </Stack>
              <Typography variant="h6" component="div">
              <p>Дім Франка &#8212; Franko House 2020</p>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box id='icons'>
              <Typography variant="h6" component="div">
                <a href="https://www.facebook.com/dimfranka/"><FacebookIcon sx={{ fontSize: '50px' }} className="icon" /></a>
                <a href="https://www.instagram.com/dim_franka/"><InstagramIcon sx={{ fontSize: '50px' }} className="icon" /></a>
                <a href="https://www.youtube.com/channel/UC6UeOsivTNCowjVt3Hg5G0g"><YouTubeIcon sx={{ fontSize: '50px' }} className="icon" /></a>
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
        </div>
        )
}

export default Footer;