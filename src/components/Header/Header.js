import './Header.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../../modules/themes/mainThemes'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import Group from '../../images/Group.jpg'
import Vector from '../../images/Vector.jpg'






function Header() {
  return (
    <div className='GMenu'>
    <Grid container spacing={0}>
        <Grid item xs={1}></Grid>
        <Grid item xs={8} id='menuN'>
            <Grid container spacing={0}
                  
                  alignItems="center">
                <Grid item xs={1}></Grid>  
                <Grid item xs={2} id='foto'>
                  <img src={Group} alt={"Group"}/> 
                </Grid>
                <Grid item xs={1}></Grid>  
                <Grid item xs={1}>
                    <div className='nameMenu'>Музей</div>
                </Grid>  
                <Grid item xs={1}>
                    <div className='nameMenu'>Онлайн</div>
                </Grid>
                <Grid item xs={1}>
                    <div className='nameMenu'>Іван Франко</div>
                </Grid>
                <Grid item xs={1}>
                    <div className='nameMenu'>Освіта</div>
                </Grid>
                <Grid item xs={1}>
                    <div className='nameMenu'>Про нас</div>
                </Grid>
                <Grid item xs={1}>
                    <div className='nameMenu'>Крамниця</div>
                </Grid>
            </Grid>
        </Grid>
    <Grid item xs={3}> 
        <Grid container spacing={0}
              alignItems="center">
 
            <Grid item xs={1} id='foto1'>
                <img src={Vector} alt={"Vector"}/>      
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} id='foto1'>
                <div className='lng'>UKR/ENG</div>
            </Grid>
        </Grid>
      
     </Grid> 
    </Grid>
    
</div>

  );
}

export default Header;
