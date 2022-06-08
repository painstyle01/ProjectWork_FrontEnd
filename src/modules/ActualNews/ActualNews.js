import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './ActualNews.css'
import '../fonts/fonts/Igrasans.ttf';
import { useState, useEffect } from 'react'
import newsImage from '../../images/news.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ActualNews(){

    const [searchTerm, setSearchTerm] = useState('');
    const [news, getNews] = useState([]);
  
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://frankos-museum-backend.azurewebsites.net/api/actualnews');
                getNews(await response.json());
            } catch (e) {
            }
        })();
    }, []);

    return(
        <div className="archiveMainContainer">
            <span className="archiveTitle">Актуальні новини</span>
            <p><TextField className="archivesearch" 
                          id="standard-basic" 
                          label="Пошук" 
                          variant="standard"
                          onChange={event => {setSearchTerm(event.target.value)}} />
            </p>

            <Grid container spacing="3">
                {news.filter((val)=>{
                    if(searchTerm == ''){
                        return val;
                    } else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val;
                    }
                }).map((element)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia component="img" image={newsImage}/>
                                <CardContent>
                                    <Stack direction="row" spacing={1} marginBlock='-5px'>
                                        <Typography variant="body2" color="primary" style={{fontSize: '25px', fontWeight: 'bold', textDecoration: 'none'}}>{element.title}</Typography>
                                        <ArrowForwardIcon style={{fontSize: '25px', marginTop: '10px', transform: 'rotate(-45deg)'}}/>
                                    </Stack>
                                    <Typography variant="body2" color="primary" style={{textDecoration: 'none', fontWeight: 'bold'}}>{element.author}</Typography>
                                    <Typography variant="body2" color="primary" style={{textDecoration: 'none'}}>{element.text}</Typography>
                                    <Typography variant="body2" color="#a3a3a3">{element.date}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ActualNews;