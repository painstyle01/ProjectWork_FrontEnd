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
                {/* <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
                    <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video> */}
                <div className="mainBackground2"></div>
            </div>            
            <div>
                <div className="top_content">
                    <div className="mainTitle">ДІМ ФРАНКА</div>
                    {/* <Typography variant="test" color="secondary">Дім Франка</Typography> */}
                    <Typography variant="body2" color="secondary" marginBlock={'30px'} sx={{textAlign: 'center'}}>Ласкаво просимо до музею Франка!</Typography>
                    <Stack direction="row" spacing={2} sx={{width: '100%', justifyContent: 'center'}}>
                    <Button variant="text" color="secondary" id='but'>
                        Підтримай нас
                    </Button>
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
                        <div style={{fontSize: '71px', lineHeight: '50px'}}>Останні новини</div>
                        <ArrowCircleUpIcon sx={{fontSize: '65px', transform: 'rotate(45deg)'}}/>
                    </Stack>
                    <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '15px 30px'}} />
                    <Grid container spacing={3}>
                        {news.map(function(item) {
                            return (
                                <Grid item xs={12} sm={6} md={4}>
                                    <div>
                                        <img src={newsImage} alt="" width="100%"></img>
                                        <Stack direction="row" spacing={1}>
                                            <Typography variant="body2" color="primary" style={{fontSize: '25px'}}>{item.title}</Typography>
                                            <ArrowForwardIcon style={{fontSize: '25px', marginTop: '10px', transform: 'rotate(-45deg)'}}/>
                                        </Stack>
                                        <Typography variant="body2" color="primary" fontWeight={'bold'}>{item.date}</Typography>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '25px 30px'}} />
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={8}>
                            <img src={family} alt="" width="100%" style={{minWidth: '397px'}}></img>
                        </Grid>
                        <Grid item sm={12} md={4} sx={{alignSelf: 'center'}}>
                            <Stack direction="row" spacing={2}>
                                <div style={{fontSize: '71px', lineHeight: '50px', marginBottom: '50px'}}>Історія</div>
                                <ArrowCircleUpIcon sx={{fontSize: '65px', transform: 'rotate(45deg)'}}/>
                            </Stack>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                        </Grid>
                    </Grid>
                    <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '25px 30px'}} />
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={4} sx={{alignSelf: 'center'}}>
                            <Stack direction="row" spacing={2}>
                                <div style={{fontSize: '71px', lineHeight: '50px', marginBottom: '50px'}}>Колекції</div>
                                <ArrowCircleUpIcon sx={{fontSize: '65px', transform: 'rotate(45deg)'}}/>
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
                            <div style={{fontSize: '71px', lineHeight: '50px', marginTop: '20px'}}>Підтримай нас</div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                            <Stack direction="row" spacing={2} sx={{marginBottom: '20px'}}>
                                <Typography variant="body2" color="primary" fontWeight={'bold'} marginTop={'20px'} style={{fontSize: '20px', textDecoration: 'underline'}}>Пожертвування</Typography>
                                <ArrowForwardIcon style={{fontSize: '25px', marginTop: '25px', transform: 'rotate(-45deg)'}}/>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
                <div className="bottom_content" style={{paddingTop: '30px'}}>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={8}>
                            <img src={franko} alt="" width="100%" style={{minWidth: '397px'}}></img>
                        </Grid>
                        <Grid item sm={12} md={4} sx={{alignSelf: 'center'}}>
                            <Stack direction="row" spacing={2}>
                                <div style={{fontSize: '71px', lineHeight: '50px', marginBottom: '50px'}}>Наші програми</div>
                                <ArrowCircleUpIcon sx={{fontSize: '65px', transform: 'rotate(45deg)'}}/>
                            </Stack>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default MainPage;