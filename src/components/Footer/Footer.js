import React from 'react';
import './Footer.css';
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../../images/logo.png'
import logo2 from '../../images/logo3.png'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';




function Footer() {
        return (
        <AppBar position="static" color="primary" className="footer" >
        <Container maxWidth="lg" sx={{marginY: '50px'}}>
        <Grid container spacing={2}>
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
        </Grid>
        </Container>
        </AppBar>
        )
}

export default Footer;