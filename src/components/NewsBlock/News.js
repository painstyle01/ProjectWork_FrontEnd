import './News.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../../modules/themes/mainThemes'
import { Grid } from '@mui/material';







function News() {
    return (
        <ThemeProvider theme={MainTheme}>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <div className='leftCont'>.</div>
                    </Grid> 
                <Grid item xs={8}>
                    <Grid container spacing={-2}>
                    <Grid item xs={6}>
                        <div className='leftBlockN'>
                            <Grid container
                                spacing={0}
                                justifyContent="space-between">
                                    <p>NEW EXHIBITION</p>
                                    <h4>Code Name Mary: The extraordinary life of Muriel Gardiner</h4>
                                    <p>We celebrate the incredible story of Muriel Gardiner’s life, through family photo albums, unpublished documents and Muriel’s own autobiography, Code Name Mary. She was an unsung heroine, saving the lives of countless individuals from the Austrian fascist, and then the Nazi, regime, though frequently in danger herself.</p>
                                    <p>18 September 2021 to 6 February 2022</p>
                                    <p></p>
                            </Grid>
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='foto'>.</div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <div className='leftCont'>.</div>
                    </Grid> 
            </Grid>
  
      </ThemeProvider>
  
    );
  }

















export default News;
