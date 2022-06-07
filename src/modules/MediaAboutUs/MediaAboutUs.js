import React from 'react';
import './MediaAboutUs.css';
import Grid from '@mui/material/Grid'
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import MAUNewsList from "../../components/MAUNewsList/MAUNewsList";

function MediaAboutUs() {
    
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div style={{padding: '0 7% 7% 7%'}}>
            <Grid container>
                <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px', margin: 'auto', width: '450px',
                        paddingBottom: '40px'}}>ЗМІ про нас</div>
                        <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="standard"
                        fullWidth
                        label="Пошук"
                        style={{marginBottom: '30px'}}
                        />
                        <MAUNewsList input={inputText} />
                    </Grid>
                <Grid item xs={0} sm={2}></Grid>
            </Grid>
        </div>
    )
}

export default MediaAboutUs;
