import './Support.css'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from "react";

function Support() {
    var donationValue = 0;

    const [pressed, setPressed] = React.useState(false);

    const myDonationBtn = (event) => {
        var anotherContainer = document.getElementById("anotherContainer");
        if (anotherContainer.style.display === "block") {
            anotherContainer.style.display = "none";
        } else {
            anotherContainer.style.display = "block";
        }
        changeColor(event.currentTarget)
    };

    const setDonation = (event) => {
        setPressed(false)

        var buttonM1 = document.getElementById("buttonM1")
        buttonM1.style.setProperty("background-color", "#ffffff", "important");
        buttonM1.style.setProperty("color", "#1C1C1C", "important");

        var anotherContainer = document.getElementById("anotherContainer");
        anotherContainer.style.display = "none";

        donationValue = event.currentTarget.getAttribute('donationValue');

    };

    const updateDonationValue = (event) => {
        donationValue = event.currentTarget.value;

    }

    const changeColor = (button) => {
        if (pressed) {
            button.style.setProperty("background-color", "#ffffff", "important");
            button.style.setProperty("color", "#1C1C1C", "important")
        } else {
            button.style.setProperty("background-color", "#1C1C1C", "important");
            button.style.setProperty("color", "#ffffff", "important")
        }
        setPressed(!pressed)
    }

    const confirmBtn = () => {
        var nameContainer = document.getElementById("name");
        var name = nameContainer.value;
        var mailContainer = document.getElementById("mail");
        var mail = mailContainer.value;
        var phoneContainer = document.getElementById("phone");
        var phone = phoneContainer.value;
        var commentContainer = document.getElementById("comment");
        var comment = commentContainer.value;


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "money": donationValue })
        };

        fetch('https://frankos-museum-backend.azurewebsites.net/api/donate', requestOptions)
            .then(response => {if (response.status === 200) {return response.text();} else {throw new Error();}})
            .then(data => {
                document.getElementById("payButton").style.setProperty("background-color", "white", "important");
                document.getElementById("payButton").innerHTML = data;
            })
            .catch(error => {console.log("Data required")})

    };

    return (
        <div className='supportWin' id='supportWin'>
            <Grid container spacing={0}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6} id='menuN'>
                    <div className='igraSans' style={{fontSize: '71px', lineHeight: '71px', marginInline: 'auto', marginTop: '30px', textAlign: 'center'}}>Підтримати нас</div>
                    <p className='text1'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <div className='boxS1'>
                        <div style={{fontSize: '25px', lineHeight: '25px', marginInline: 'auto', marginTop: '30px', fontWeight: 'bold', textAlign: 'center'}}>Вибери суму, яку готовий пожертвувати</div>
                        <div className='supportButtons'>
                            <Button
                                className='buttonM'
                                id='button1'
                                donationValue={50}
                                onClick={setDonation}
                            >
                            50 грн
                            </Button>
                            <Button
                                className='buttonM'
                                id='button2'
                                donationValue={150}
                                onClick={setDonation}
                            >
                            150 грн
                            </Button>
                            <Button
                                className='buttonM'
                                id='button3'
                                donationValue={250}
                                onClick={setDonation}
                            >
                            250 грн
                            </Button>
                            <Button
                                className='buttonM'
                                id='button4'
                                donationValue={500}
                                onClick={setDonation}
                            >
                            500 грн
                            </Button>
                            <Button
                                id='buttonM1'
                                className='buttonM1'
                                onClick={myDonationBtn}
                            >
                            Інша сума
                            </Button>
                        </div>                    
                        <Grid container spacing={0}>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <div className='another' id='anotherContainer'>
                                    <div className='line'></div>
                                    <div id='money3'>
                                        <p style={{"margin": "16px 0 0 0"}}>Моя сума пожертви:</p>
                                        <p className='money2'>
                                            <TextField  id="money2"
                                                        defaultValue={"0"}
                                                        label="грн" 
                                                        variant="standard"
                                                        onChange={updateDonationValue} />
                                        </p>
                                    </div>
                                    <div className='line1'></div>
                                </div>
                                <div className='boxS2'>Залиши інформацію про себе, щоб ми могли подякувати тобі за твою підтримку</div>
                                <TextField id="name" className='textF' label="Ваше ім'я" variant="standard" />
                                <TextField id="mail" className='textF' label="Ваш E-mail " variant="standard" />
                                <TextField id="phone" className='textF' label="Ваш номер телефону (необов’язково)" variant="standard" />
                                <TextField id="comment" className='textF' label="Коментар (необов’язково)" variant="standard" />
                                <Button
                                    className='buttonM2'
                                    id='payButton'
                                    onClick={confirmBtn}
                                >
                                Зробити пожертву
                                </Button>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        
        </div>

);
}


export default Support;
