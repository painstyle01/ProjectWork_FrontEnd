import './Header.css';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import Group from '../../images/Group.png'
import Vector from '../../images/Vector.png'
import Group2 from '../../images/logo.png'
import Vector2 from '../../images/Vector2.png'



function Header() {
    if (window.location.pathname=='/') {
        return (
            <div className='GMenu'>
                <Grid container spacing={0} backgroundColor='rgba(0,0,0,0.6)' height='120px'>
                    <Grid item xs={0} sm={1}></Grid>
                    <Grid item xs={8} alignSelf='center' id='menuN'>
                        <Grid container spacing={0} alignItems="center">
                            <Grid item xs={4} md={4} id='foto'>
                                <img src={Group2} alt={"Group"}/>
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <Typography className='nameMenu' variant="body2" color="secondary">Музей</Typography>
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <Typography className='nameMenu' variant="body2" color="secondary">Онлайн</Typography>
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <Typography className='nameMenu' variant="body2" color="secondary">Іван Франко</Typography>
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <Typography className='nameMenu' variant="body2" color="secondary">Освіта</Typography>
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <Typography className='nameMenu' variant="body2" color="secondary">Про нас</Typography>
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <Typography className='nameMenu' variant="body2" color="secondary">Крамниця</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={0} md={1}></Grid>
                    <Grid item xs={2} alignSelf='center'>
                        <Grid container spacing={8} alignItems="center">
                            <Grid item xs={1} id='foto1'>
                                <img src={Vector2} alt={"Vector"}/>
                            </Grid>
                            <Grid item xs={1} id='foto1'>
                                <div className='lng' style={{color: 'white'}}>UKR/ENG</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }

    if (window.location.pathname.match(/video\/[^\/]+$/)!=null) {
        return (
            <div className='GMenu'>
            <Grid container spacing={0} backgroundColor='rgba(28, 28, 28, 0.5)' height='120px'>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={8} alignSelf='center' id='menuN'>
                    <Grid container spacing={0} alignItems="center">
                        <Grid item xs={4} md={4} id='foto'>
                            <img src={Group2} alt={"Group"}/>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="secondary">Музей</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="secondary">Онлайн</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="secondary">Іван Франко</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="secondary">Освіта</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="secondary">Про нас</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="secondary">Крамниця</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={2} alignSelf='center'>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={1} id='foto1'>
                            <img src={Vector2} alt={"Vector"}/>
                        </Grid>
                        <Grid item xs={1} id='foto1'>
                            <div className='lng' style={{color: 'white'}}>UKR/ENG</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        )
    }

    return (
        <div className='GMenu'>
            <Grid container spacing={0} backgroundColor='white' height='120px'>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={8} alignSelf='center' id='menuN'>
                    <Grid container spacing={0} alignItems="center">
                        <Grid item xs={4} md={4} id='foto'>
                            <img src={Group} alt={"Group"}/>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="primary">Музей</Typography>
                        </Grid>  
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="primary">Онлайн</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="primary">Іван Франко</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="primary">Освіта</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="primary">Про нас</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color="primary">Крамниця</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={2} alignSelf='center'>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={1} id='foto1'>
                            <img src={Vector} alt={"Vector"}/>
                        </Grid>
                        <Grid item xs={1} id='foto1'>
                            <div className='lng'>UKR/ENG</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
