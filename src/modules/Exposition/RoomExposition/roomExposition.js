import { Grid } from '@mui/material';
import './roomExposition.css'
import { useState, useEffect } from 'react';



async function readData(getRoom, thisPageID) {
    var response = await fetch('http://frankos-museum-backend.azurewebsites.net/api/expositions/'+thisPageID)
    getRoom(await response.json())
}

function LibraryEx() { 

    var fullUrl = window.location.pathname
    var split = fullUrl.split('/')
    var thisPageID = split[split.length-1]

    const [room, getRoom] = useState([]);

    readData(getRoom, thisPageID)


    return (
        
        <Grid>
        <img src={room.image}></img>
        <h2>{room.title}</h2>
        <h2>{room.description}</h2>
        </Grid>

        


);
}
export default LibraryEx;
