import React from 'react';
import './MainPage.css';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import newsImage from '../../images/news.png'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function MainPage() {
    let news = [
        {'title': 'Легенда про вічне життя', 'text': 'У рамках реалізації проєкту Франко. Re:volution Львівського національного літературно-меморіального музею...'},
        {'title': 'Легенда про вічне життя', 'text': 'У рамках реалізації проєкту Франко. Re:volution Львівського національного літературно-меморіального музею...'},
        {'title': 'Легенда про вічне життя', 'text': 'У рамках реалізації проєкту Франко. Re:volution Львівського національного літературно-меморіального музею...'},
    ]
        return (
            <div className="main">
                <div className="top">
                    {/* <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
                        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video> */}
                    <div className="top_content">
                        <div className="mainTitle">Дім Франка</div>
                        {/* <Typography variant="test" color="secondary">Дім Франка</Typography> */}
                        <Stack direction="row" justifyContent='space-between' marginBlock={'1vw'} spacing={2}>
                        <Typography variant="body2" color="secondary" width="110px">Музей Франка і не тільки...</Typography>
                            <Stack direction="row" spacing={2}>
                            <Button variant="text" color="secondary" id='but' className='b2'>
                                Спланувати візит
                            </Button>
                            <Button variant="text" color="secondary" id='but'>
                                Підтримати нас
                            </Button>
                            </Stack>
                        </Stack>
                        <Divider color='white' sx={{borderBottomWidth: 4, marginBottom: '1vw'}} />
                        <Stack direction="row">
                        <WatchLaterIcon sx={{color: 'white', marginRight: '10px'}}/>
                        <Typography variant="body2" color="secondary" fontWeight="bold">Чекаємо на Вас щодня, крім вівторка, з 10:00 до 17:00</Typography>
                        </Stack>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom_content">
                        <div style={{fontSize: '71px', lineHeight: '50px'}}>Останні новини</div>
                        <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '30px'}} />
                        <Grid container spacing={3}>
                            {news.map(function(item) {
                                return (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div>
                                            <img src={newsImage} width="100%"></img>
                                            <Stack direction="row">
                                                <Typography variant="body2" color="primary" style={{fontSize: '28px'}}>{item.title}</Typography>
                                                <ArrowForwardIcon style={{fontSize: '45px'}}/>
                                            </Stack>
                                            <Typography variant="body2" color="primary">12/12/2021</Typography>
                                            <Typography variant="body2" color="primary" sx={{marginTop: '15px'}}>{item.text}</Typography>
                                            <Divider color='black' sx={{borderBottomWidth: 4, marginTop: '10px'}} />
                                        </div>
                                    </Grid>
                                )})}
                        </Grid>
                    </div>
                </div>
            </div>
        )
}

export default MainPage;