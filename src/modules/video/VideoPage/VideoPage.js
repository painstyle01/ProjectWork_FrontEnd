import React from 'react';
import './VideoPage.css';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import img1 from '../../../images/fv.jpg'
import img2 from '../../../images/fv1.jpg'

function VideoPage() {

  const [categories, getCategories] = useState([]);
    
  useEffect(() => {
      (async () => {
          try {
              // var response = await fetch('http://frankos-museum-backend.azurewebsites.net/video');
              // getCategories(await response.json());
              getCategories([{'title': 'Франко вдома', 'picture': img1, 'inner_picture': img2, 'slug': 'franko-vdoma', 'description': 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'}])
          } catch (e) {
          }
      })();
  }, []);

    return (
      <div style={{padding: '7%'}}>
        <div className="igraSans" style={{fontSize: '71px', lineHeight: '50px'}}>Відео</div>
        <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '30px'}} />
        <Grid container spacing={3}>
          {categories.map(function(category) {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <NavLink to={"/video/"+category.slug} className="no_underlines">
                  <Card>
                    <CardActionArea>
                      {/* <CardMedia component="img" image={'http://frankos-museum-backend.azurewebsites.net'+category.picture}/> */}
                      <CardMedia component="img" image={category.picture}/>
                      <CardContent>
                        <Stack direction="row" spacing={1}>
                          <Typography variant="body2" color="primary" style={{fontSize: '25px', textDecoration: 'none'}}>{category.title}</Typography>
                          <ArrowForwardIcon style={{fontSize: '25px', marginTop: '10px', transform: 'rotate(-45deg)'}}/>
                        </Stack>
                        <Typography variant="body2" color="#a3a3a3" height="25px" style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{category.description}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </NavLink>
              </Grid>
            )})}
        </Grid>
      </div>
    )
  }

export default VideoPage;