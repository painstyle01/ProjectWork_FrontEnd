import React from 'react';
import './Footer.css';
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook'
import az from '../../images/logo2.png'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useState, useEffect } from 'react';



function Footer() {

    const [socialMedias, getSocialMedias] = useState([]);
  
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://frankos-museum-backend.azurewebsites.net/footer');
                getSocialMedias(await response.json());
            } catch (e) {
            }
        })();
    }, []);

    return (
        <div className="footer">
            <Stack direction="row" spacing={2}>
                <div style={{fontSize: '71px', lineHeight: '50px'}}>Спланувати візит</div>
                <ArrowCircleUpIcon sx={{fontSize: '65px', transform: 'rotate(45deg)'}}/>
            </Stack>
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
                        {socialMedias.map(function(item) {
                            if (item.name_partners=='facebook'){
                                return (
                                    <a className="linkIcon" href={item.link_partners}><FacebookIcon sx={{fontSize: '50px'}}/></a>
                                )}
                            if (item.name_partners=='instagram'){
                                return (
                                    <a className="linkIcon" href={item.link_partners}><InstagramIcon sx={{fontSize: '50px'}}/></a>
                            )}
                            if (item.name_partners=='instagram'){
                                return (
                                    <a className="linkIcon" href={item.link_partners}><YouTubeIcon sx={{fontSize: '50px'}}/></a>
                            )}
                        })}
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
        </div>
    )
}

export default Footer;