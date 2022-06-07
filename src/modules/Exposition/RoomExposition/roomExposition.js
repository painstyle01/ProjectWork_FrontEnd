import { Grid } from '@mui/material';
import './libraryEx.css'
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
      <div>
        <img  src={room.image} className='backgroundMain'></img>
            
            <Grid container spacing={0} className='roomText'>
                <Grid item xs={1}></Grid>
                    <Grid item xs={5}> 
                    <h1 className='titleRoomName'>{room.title}</h1>  
                    <div className='discrabe'>
                        <h2 >Опис</h2> 
                        <p>{room.description}</p>
                    </div>
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
        
</div>
        


);
}
export default LibraryEx;
