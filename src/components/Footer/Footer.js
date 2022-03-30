import React from 'react';
import './Footer.css'
import Grid from '@mui/material/Grid'

class Footer extends React.Component {
    render(){
        return(
            <Grid container spacing={3} className="footer">
                    <Grid item xs={3}>
                        <div className="DimFranka">
                            ДІМ<p>ФРА<p>НКА</p></p>
                        </div>
                    </Grid>

                    <Grid item xs={4} className="footerItem">
                        <Grid container spacing={2} className="info">
                            <Grid item xs={6}>
                                <ul>
                                    <li>Події</li>
                                    <li>Програми</li>
                                    <li>Колекція</li>
                                    <li>Експозиція</li>
                                    <li>Експонати</li>
                                </ul>
                            </Grid>

                            <Grid item xs={6} className="info">
                                <ul>
                                    <li>Магазини</li>
                                    <li>Про музей</li>
                                    <li>Про Франка</li>
                                    <li>Мультимедія</li>
                                    <li>3Д Тур</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} className="footerItem">
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div className="socials">
                                    <div>
                                        <img className="icons" src="https://i.yapx.ru/Qjn1P.png" alt=""/>
                                        <img className="icons" src="https://i.yapx.ru/Qjn3q.png" alt=""/>
                                        <img className="icons" src="https://i.yapx.ru/QjoBR.png" alt=""/>
                                    </div>
                                </div>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <b>Час відкриття</b>
                                        <p>Всі дні окрім вівторка
                                            <p>з 10:00 до 17:00</p></p> 
                                    </Grid>

                                    <Grid item xs={6}>
                                        <b>Локація</b>
                                        <p>вул. Івана Франка, 150-152б
                                            <p>м. Львів 79011, Україна</p></p> 
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        )
    }
}

export default Footer;