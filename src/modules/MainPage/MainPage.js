import React from 'react';
import './MainPage.css';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import newsImage from '../../images/news.png'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import family from '../../images/image 14.png'
import room from '../../images/image 9.png'
import franko from '../../images/image 12.png'
import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'
import '../fonts/fonts/Igrasans.ttf';



function MainPage() {
    
    let news = [
        {'title': 'Легенда про вічне життя', 'date': '12 Червня 2021'},
        {'title': 'Легенда про вічне життя', 'date': '12 Червня 2021'},
        {'title': 'Легенда про вічне життя', 'date': '12 Червня 2021'}
    ]

    const [background, getBackground] = useState();
  
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://frankos-museum-backend.azurewebsites.net');
                getBackground('http://frankos-museum-backend.azurewebsites.net'+(await response.json())[0].backgrounds);
            } catch (e) {
            }
        })();
    }, []);

    return (
        <div>
            <div className="mainBackground" style={{backgroundImage: "url("+background+")"}}>
                <div className="mainBackground2"></div>
            </div>            
            <div>
                <div className="top_content">
                    <div className="mainTitle">ДІМ ФРАНКА</div>
                    <Typography variant="body2" color="secondary" marginBlock={'30px 40px'} sx={{textAlign: 'center'}}>Ласкаво просимо до музею Франка!</Typography>
                    <Stack direction="row" spacing={2} sx={{width: '100%', justifyContent: 'center'}}>
                        <NavLink to={'/support'}>
                            <Button variant="text" color="secondary" id='but'>
                                Підтримай нас
                            </Button>
                        </NavLink>
                        <Button variant="text" color="secondary" id='but' className='b2'>
                            Спланувати візит
                        </Button>
                    </Stack>
                </div>
            </div>
            <div className="middle">
                <div className="middle_content">
                    <Typography variant="body2" color="secondary" style={{fontSize: '3vw', width: '80%'}}>Дім Франка – це не просто Музей. Це також Дім Муз, де вирує багатогранне мистецьке життя; Дім Науки, що є осередком франкознавчих та музеологічних студій;</Typography>
                    <Stack direction="row" spacing={2} marginTop={'3vw'} justifyContent={'space-between'}>
                        <Stack marginTop={'1vw'}>
                            <a className="white_link" href='https://www.youtube.com/channel/UC6UeOsivTNCowjVt3Hg5G0g'><Typography variant="body2" color="secondary">YouTube</Typography></a>
                            <a className="white_link" href='https://www.instagram.com/dim_franka/'><Typography variant="body2" color="secondary">Instagram</Typography></a>
                        </Stack>
                        <Typography variant="body2" color="secondary" style={{fontSize: '3vw', width: '80%'}}>Дім Діалогу, де відбувається чесна дискусія та пошук порозуміння; Дім Родини, де по-домашньому затишно і тепло. А ще це справжнє Місце Сили. Ласкаво просимо в гості до живого творця і "цілого чоловіка"! Тут ФРАНКОВО!</Typography>
                    </Stack>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom_content" style={{paddingBottom: '0'}}>
                    <Stack direction="row" spacing={2}>
                        <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px'}}>Останні новини</div>
                        <ArrowCircleUpIcon sx={{fontSize: '75px', transform: 'rotate(45deg)', paddingTop: '15px'}}/>
                    </Stack>
                    <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '15px 30px'}} />
                    <Grid container spacing={3}>
                        {news.map(function(item) {
                            return (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card>
                                        <CardActionArea>
                                        <CardMedia component="img" image={newsImage}/>
                                        <CardContent>
                                            <Stack direction="row" spacing={1}>
                                            <Typography variant="body2" color="primary" style={{fontSize: '25px', textDecoration: 'none'}}>{item.title}</Typography>
                                            <ArrowForwardIcon style={{fontSize: '25px', marginTop: '10px', transform: 'rotate(-45deg)'}}/>
                                            </Stack>
                                            <Typography variant="body2" color="#a3a3a3">{item.date}</Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '30px'}} />
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={8}>
                            <img src={family} alt="" width="100%" style={{minWidth: '397px'}}></img>
                        </Grid>
                        <Grid item sm={12} md={4} sx={{alignSelf: 'center'}}>
                            <NavLink to={'/history'} className="menuNavLink">
                                <Stack direction="row" spacing={2}>
                                    <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px', marginBottom: '50px'}}>Історія</div>
                                    <ArrowCircleUpIcon sx={{fontSize: '75px', transform: 'rotate(45deg)', paddingTop: '15px'}}/>
                                </Stack>
                            </NavLink>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                        </Grid>
                    </Grid>
                    <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '25px 30px'}} />
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={4} sx={{alignSelf: 'center'}}>
                            <Stack direction="row" spacing={2}>
                                <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px', marginBottom: '50px'}}>Колекції</div>
                                <ArrowCircleUpIcon sx={{fontSize: '75px', transform: 'rotate(45deg)', paddingTop: '15px'}}/>
                            </Stack>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <img src={room} alt="" width="100%" style={{minWidth: '397px'}}></img>
                        </Grid>
                    </Grid>
                </div>
                <div className="bottom_grey_content">
                    <Grid container spacing={3} sx={{alignSelf: 'center', marginTop: '25px', paddingBlock: '50px'}}>
                        <Grid item sm={12} md={6}>
                            <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px', marginTop: '20px'}}>Підтримай нас</div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                            <NavLink to={'/support'} className="menuNavLink">
                                <Stack direction="row" spacing={2} sx={{marginBottom: '20px'}}>
                                    <Typography variant="body2" color="primary" fontWeight={'bold'} marginTop={'20px'} style={{fontSize: '20px', textDecoration: 'underline'}}>Пожертвування</Typography>
                                    <ArrowForwardIcon style={{fontSize: '25px', marginTop: '25px', transform: 'rotate(-45deg)'}}/>
                                </Stack>
                            </NavLink>
                        </Grid>
                    </Grid>
                </div>
                <div className="bottom_content" style={{paddingTop: '30px'}}>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={8}>
                            <img src={franko} alt="" width="100%" style={{minWidth: '397px'}}></img>
                        </Grid>
                        <Grid item sm={12} md={4} sx={{alignSelf: 'center'}}>
                            <div style={{fontSize: '71px', lineHeight: '71px', marginBottom: '50px', fontWeight: 'bold'}}>Наші програми</div>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                            <div style={{marginTop: '50px'}}>
                                <NavLink to={'/intellectual-programs'}>
                                    <Button className='orderLecture' sx={{width: '300px!important', margin: '0!important'}} variant="text" color="secondary">
                                        Інтелектуальні програми
                                    </Button>
                                </NavLink>
                                <NavLink to={'/art-programs'}>
                                    <Button className='orderLecture' sx={{width: '300px!important', margin: '0!important'}} variant="text" color="secondary">
                                        Мистецькі програми
                                    </Button>
                                </NavLink>
                                <NavLink to={'/educational-programs'}>
                                    <Button className='orderLecture' sx={{width: '300px!important', margin: '0!important'}} variant="text" color="secondary">
                                        Освітні програми
                                    </Button>
                                </NavLink>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default MainPage;