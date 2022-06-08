import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './LibraryPage.css';
import smallArrow from '../../../images/smallArrow.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TempData=[
    {
        id: '1',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Франко вдома',
        date: '12 Червня 2021'
    },
    {
        id: '2',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Франко вдома',
        date: '12 Червня 2021'
    },
    {
        id: '3',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Легенда про вічне життя',
        date: '12 Червня 2021'
    },
    {
        id: '4',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Іван Франко у світі',
        date: '12 Червня 2021'
    },
    {
        id: '5',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Науковий Форум',
        date: '12 Червня 2021'
    },
    {
        id: '6',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Науковий театр',
        date: '12 Червня 2021'
    },
    {
        id: '7',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Легенда про вічне життя',
        date: '12 Червня 2021'
    },
    
]

fetch('http://frankos-museum-backend.azurewebsites.net/api/products/')
.then(response => response.json())
.then(data => {
    let temp = [];
    data.map((e)=>{
        if(e.type=='book'){
            temp.push(e)
        }
    })
    localStorage.setItem('libraryBooks', JSON.stringify(temp))
});

function LibraryPage(){


    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState(JSON.parse(localStorage.getItem('libraryBooks')))


    console.log(books);

    return(
        <div className="archiveMainContainer">
            <span className="archiveTitle">Видання</span>
            <p><TextField className="archivesearch" 
                          id="standard-basic" 
                          label="Пошук" 
                          variant="standard"
                          onChange={event => {setSearchTerm(event.target.value)}} />
            </p>

            <Grid container spacing="3">
                {books.filter((val)=>{
                    if(searchTerm == ''){
                        return val;
                    } else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val;
                    }
                }).map((element)=>{
                    return(
                        <Grid item key={element.id} xs={4} className="archiveCard">
                            <Link to={"/book/"+element.id}>
                            <Card sx={{ maxWidth: 345 }} className="bookCard">
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={element.url_to_photo}
                                    alt={element.name}
                                />
                                <CardContent>
                                <div className="archiveCardTitle">{element.name} <img src={smallArrow} alt="not found"/></div>
                                    <Typography variant="body2" color="text.secondary">
                                        {element.description}
                                    </Typography>
                                </CardContent>
                                </Card>
                                </Link>
                        </Grid>
                        
                    )
                })}
            </Grid>
        </div>
    )
}

export default LibraryPage;