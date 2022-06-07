import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './CollectionPage.css'
import '../fonts/fonts/Igrasans.ttf';
import smallArrow from '../../components/img/comonArrow.png'
import { useState } from 'react'


const TempData=[
    {
        id: '1',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Франко вдома',
        info: 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'
    },
    {
        id: '2',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Франко вдома',
        info: 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'
    },
    {
        id: '3',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Франко вдома',
        info: 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'
    },
    {
        id: '4',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Іван Франко у світі',
        info: 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'
    },
    {
        id: '5',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Науковий Форум',
        info: 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'
    },
    {
        id: '6',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Науковий театр',
        info: 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'
    },
    {
        id: '7',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Легенда про вічне життя',
        info: 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'
    },
    
]

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
                {TempData.filter((val)=>{
                    if(searchTerm == ''){
                        return val;
                    } else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val;
                    }
                }).map((element)=>{
                    return(
                        <Grid item key={element.id} xs={3} className="collectionCard">
                            <img src={element.photo} className="collectionCardImg" alt="not found"/>
                            <div className="collectionCardTitle">{element.title} <img src={smallArrow} alt="not found"/></div>
                            <div className="collectionCardDate">{element.info}</div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default CollectionPage;