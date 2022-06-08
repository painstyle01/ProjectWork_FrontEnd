import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './CollectionPage.css'
import '../fonts/fonts/Igrasans.ttf';
import smallArrow from '../../images/comonArrow.png'
import { useState } from 'react'


fetch('http://frankos-museum-backend.azurewebsites.net/api/collections/')
    .then(response => response.json())
    .then(data =>(localStorage.setItem('collections', JSON.stringify(data))));

    const data = JSON.parse(localStorage.getItem('collections'))

function CollectionPage(){

    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className="collectionMainContainer">
            <span className="collectionTitle">Онлайн колекція</span>
            <p><TextField className="collectionsearch" 
                          id="standard-basic" 
                          label="Пошук" 
                          variant="standard"
                          onChange={event => {setSearchTerm(event.target.value)}} />
            </p>

            <Grid container spacing="3">
                {data.filter((val)=>{
                    if(searchTerm == ''){
                        return val;
                    } else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val;
                    }
                }).map((element)=>{
                    let shorter = element.description.slice(0, 30) + "..."
                    return(
                        <Grid item key={element.id} xs={12} sm={6} md={4} lg={3} className="collectionCard">
                            <img src={element.image} className="collectionCardImg" alt="not found"/>
                            <div className="collectionCardTitle">{element.title} <img src={smallArrow} alt="not found"/></div>
                            <div className="collectionCardDate">{shorter}</div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default CollectionPage;