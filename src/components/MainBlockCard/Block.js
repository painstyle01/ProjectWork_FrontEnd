import './Block.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../../modules/themes/mainThemes'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';







function Card() {
  return (
    <ThemeProvider theme={MainTheme}>
    <Grid container spacing={-2}> 
    
      <Grid item xs={2}></Grid> 
      <Grid item xs={4} spacing={-2}>
        <div className='leftBlock'>
          <Grid 
            container
            justifyContent="space-between">
          <p><Typography variant="h2" color="black"  background-color='white'>Welcome to the Freud Museum</Typography></p>
          <p><Typography variant="body1" color="initial">The final home of Sigmund Freud, the founder of psychoanalysis, and his daughter Anna Freud, a pioneering child psychoanalyst.</Typography></p>
          <p><Typography variant="h5" color="initial">The Freud Museum is now open!</Typography></p>
          <p><Typography variant="body1" color="initial">If you’ve been to Sigmund and Anna Freud’s home before, you will see that we have made a few changes designed for your safety, and the safety of our staff.</Typography></p>
          <p><Typography variant="h5" color="black">Please note all visitors must book tickets in advance.</Typography></p>
          <p><Typography variant="h6" color="black">BOOK YOUR TICKETS AND PLAN YOUR VISIT </Typography></p>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='rightBlock'>
          <Grid container spacing={4}>
            <Grid item xs={6}>
          <div className='leftLBlock'>
          <Typography variant="body1">
            <Typography variant="h6">OPENING TIMES</Typography>
          
              <li>OPENING TIMES</li>
              <li>Wednesday 10:30 – 17:00</li>
              <li>Saturday 10:30 – 17:00</li>
              <li>Sunday 10:30 – 17:00</li>
         </Typography>
          <Button>
            VISIT US
          </Button>
         
           </div>
           </Grid>
           <Grid item xs={6}>
          <div className='rightRBlock'>
          <Typography variant="body1">
            <li>ADMISSION</li>
            <li>Adults: £14.00</li>
            <li>Concessions: £12.00</li>
            <li>Young Persons (12 – 16): £9.00</li>
            <li>Children under 12: free</li>
          </Typography>
            <Button>
              BOOK TICKETS
            </Button>
          </div>
          </Grid> 
        </Grid>
        <Grid container>
          <Grid item xs={6}>
          <Typography variant="body1">
          <Typography variant="h6">FIND US</Typography>
            <li>20 Maresfield Gardens</li>
            <li>London</li>
            <li>NW3 5SX</li>
          </Typography>
          </Grid>
        </Grid>
          
        </div>
      </Grid>
      
    </Grid>
    </ThemeProvider>

  );
}

export default Card;
