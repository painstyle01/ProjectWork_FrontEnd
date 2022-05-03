import React from 'react';
import './Footer.css';
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";



function Footer() {

    const [logos, getLogos] = useState([]);
  
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://frankos-museum-backend.azurewebsites.net/footer');
                getLogos(await response.json());
            } catch (e) {
            }
        })();
    }, []);

    return (
        <div className="footer">
            <NavLink to={'/contact'} className="menuNavLink">
                <Stack direction="row" spacing={2}>
                    <div style={{fontSize: '71px', lineHeight: '50px', fontWeight: 'bold'}}>Спланувати візит</div>
                    <ArrowCircleUpIcon sx={{fontSize: '65px', transform: 'rotate(45deg)'}}/>
                </Stack>
            </NavLink>
            <Divider color='black' style={{borderBottomWidth: 4, marginBlock: '30px'}}/>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} lg={2} sx={{color: 'black'}}>
                    <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '10px'}}>
                        Локація
                    </Typography>
                    <Typography variant="body2" component="div" color='primary'>
                        вул. Івана Франка, 150-152, м. Львів 79011, Україна
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
                    <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '10px'}}>
                        Зв'язок з нами
                    </Typography>
                    <Typography variant="body2" component="div" color='primary'>
                        +38 096 15 84 606<br/>lviv_franko@ukr.net
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
                    <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '10px'}}>
                        Час роботи
                    </Typography>
                    <Typography variant="body2" component="div" color='primary'>
                        Чекаємо на Вас щодня, крім вівторка, з 10:00 до 17:00
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
                    <Typography variant="h5" component="div" color='primary' style={{fontWeight: 'bold', marginBottom: '10px'}}>
                        Соцмережі
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <a className="linkIcon" href="https://www.instagram.com/dim_franka/"><InstagramIcon sx={{fontSize: '50px'}}/></a>
                        <a className="linkIcon" href="https://www.youtube.com/channel/UC6UeOsivTNCowjVt3Hg5G0g"><YouTubeIcon sx={{fontSize: '50px'}}/></a>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={8} lg={4} sx={{alignSelf: 'center'}}>
                    <NavLink to={'/support'} className="menuNavLink">
                        <Stack direction="row" spacing={2} sx={{float: 'right'}} id='pdtrm'>
                            <Typography variant="h4" component="div" color='primary' style={{fontWeight: 'bold'}}>
                                Підтримай нас
                            </Typography>
                            <ArrowCircleUpIcon sx={{fontSize: '45px', transform: 'rotate(45deg)'}}/>
                        </Stack>
                    </NavLink>
                </Grid>
            </Grid>
            <Divider color='black' style={{borderBottomWidth: 4, marginBlock: '30px'}}/>
            <Stack direction="row" spacing={5}>
                {logos.map(function(item) {
                    return(<a href={item.link_partners} className="linkLogo"><img src={'http://frankos-museum-backend.azurewebsites.net'+item.logotype} alt=""></img></a>)
                })}
            </Stack>
        </div>
    )
}

export default Footer;