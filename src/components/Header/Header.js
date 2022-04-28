import './Header.css';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import Group from '../../images/Group.png'
import Vector from '../../images/Vector.png'
import Group2 from '../../images/logo.png'
import Vector2 from '../../images/Vector2.png'
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom" ;



function Header() {

    const [backgroundColor, setBackgroundColor] = useState();
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [textColor, setTextColor] = useState();
    
    const { pathname } = useLocation();

    useEffect(() => {
        (async () => {
            if (pathname=='/') {
                setBackgroundColor('rgba(0,0,0,0.6)')
                setImage1(Group2)
                setImage2(Vector2)
                setImage2(Vector2)
                setTextColor('secondary')
            }
            else{
                if (pathname.match(/video\/[^\/]+$/)!=null || pathname.match(/audio\/[^\/]+$/)!=null ) {
                    setBackgroundColor('rgba(28,28,28,0.5)')
                    setImage1(Group2)
                    setImage2(Vector2)
                    setTextColor('secondary')
                }
                else{
                    setBackgroundColor('white')
                    setImage1(Group)
                    setImage2(Vector)
                    setTextColor('primary')
                }
            }
        })();
    }, [pathname]);

    return (
        <div className='GMenu'>
            <Grid container spacing={0} backgroundColor={backgroundColor} height='120px'>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={8} alignSelf='center' id='menuN'>
                    <Grid container spacing={0} alignItems="center">
                        <Grid item xs={4} md={4} id='foto'>
                            <img src={image1} alt={"Group"}/>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>Музей</Typography>
                        </Grid>  
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>Онлайн</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>Іван Франко</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>Освіта</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>Про нас</Typography>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>Крамниця</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={2} alignSelf='center'>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={1} id='foto1'>
                            <img src={image2} alt={"Vector"}/>
                        </Grid>
                        <Grid item xs={1} id='foto1'>
                            <Typography color={textColor}>
                                <div className='lng'>UKR/ENG</div>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
