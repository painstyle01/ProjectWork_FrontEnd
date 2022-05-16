import React from 'react';
import './TeamPage.css'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

function WorkerCard(props){
    return(
        <Grid sx={3} className="workerCard">
            <Card>
                <img className="workerPhoto" src={"https://frankos-museum-backend.azurewebsites.net"+props.worker.image} alt="not found"></img>
                <div className="workerName">{props.worker.name}</div>
                <div className="workerPosition">{props.worker.position}</div>
                <div className="workerInfo">{props.worker.phone}</div>
            </Card>
        </Grid>
    )
}

export default WorkerCard;