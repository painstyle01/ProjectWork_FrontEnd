import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './ArchivePage.css'
import '../fonts/fonts/Igrasans.ttf';
import arrow from '../../images/blackArrov.png';
import smallArrow from '../../images/comonArrow.png'
import { useState } from 'react'
import {NavLink} from "react-router-dom";

fetch('http://frankos-museum-backend.azurewebsites.net/api/archive/')
    .then(response => response.json())
    .then(data =>(localStorage.setItem('archive', JSON.stringify(data))));

let data = JSON.parse(localStorage.getItem('archive'))

function ArchivePage(){

    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className="archiveMainContainer">
            <span className="archiveTitle">Архів Подій</span>
            <NavLink to={'/actual-news'} className="menuNavLink">
            <span className="archiveNews">Актуальні новини <img src={arrow} alt="not found"/></span>
            </NavLink>
            <p><TextField className="archivesearch" 
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
                    return(
                        <Grid item key={element.id} xs={12} sm={6} md={4} className="archiveCard">
                            <img src={element.photo} className="archiveCardImg" alt="not found"/>
                            <div className="archiveCardTitle">{element.title} <img src={smallArrow} alt="not found"/></div>
                            <div className="archiveCardDate">{element.date}</div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ArchivePage;