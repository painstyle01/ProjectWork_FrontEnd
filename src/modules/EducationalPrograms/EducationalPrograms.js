import React from 'react';
import './EducationalPrograms.css';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import newsImage from '../../images/news.png'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import franko from '../../images/image 12.png'
import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



function EducationalPrograms() {

    let links = ['franko-vdoma', 'miy-izmaragd', 'intelektualna-biografiya', 'filosofski-snidanky', 'semper-tiro', 'miy-franko',
  'frankustyka', 'podiyi-poza-seriyamy']
    
    let prog = [
        {'title': 'Франко вдома', 'image': newsImage, 'link_detail': 'dim-franka', 'subtitle': 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'},
        {'title': 'Франко вдома', 'image': newsImage, 'link_detail': 'dim-franka', 'subtitle': 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'},
        {'title': 'Франко вдома', 'image': newsImage, 'link_detail': 'dim-franka', 'subtitle': 'Відео-блог, у якому фахівці розповідають цікаві історії про письменника, його родину та сам Музей.'}
    ]

    const [programs, getPrograms] = useState([]);

    const [open, setOpen] = useState(false);
    const [errorText, setErrorText] = useState('');
    const handleOpen = () => [setOpen(true), setErrorText('')];
    const handleClose = () => {setOpen(false)};

    const confirmBtn = () => {
        var nameContainer = document.getElementById("name");
        var name = nameContainer.value;
        var emailContainer = document.getElementById("email");
        var email = emailContainer.value;
        var phoneContainer = document.getElementById("phone");
        var phone = phoneContainer.value;
        var commentContainer = document.getElementById("comment");
        var comment = commentContainer.value;

        if(name!==""&&email!==""){
            const order = 
            `
            Користувач на ім'я ${name} зробив замовлення лекції. 
            Інформація щодо замовника:
            email: ${email}
            Номер телефону: ${phone}
            Комантар до замовлення: ${comment}
            `
            const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "to_email": "emma12022002@gmail.com", "order": order })
            };

            fetch('https://frankos-museum-backend.azurewebsites.net/lecture/news', requestOptions)
                .then(response => {if (response.status == 200) {
                    alert("Замовлення успішно відправлено")
                    return response.text();
            } else {throw new Error();}})
        }

        else{
            alert("Будь ласка, заповніть усі необхідні поля")
        }
    };
  
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://frankos-museum-backend.azurewebsites.net/api/program-educational');
                getPrograms(await response.json())
                var url = window.location.pathname
                var thisPage = ''
                links.map(function(link){
                if((url.search(link))!==-1){
                    thisPage = link
                }
                })
            } catch (e) {
            }
        })();
    }, [errorText]);

    return (
        <div>
            <div className="bottom">
                <div className="bottom_content" style={{paddingTop: '50px'}}>
                    <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px', marginBottom: '30px'}}>Освітні програми</div>
                    <Grid container spacing={3} marginBottom='80px'>
                        <Grid item sm={12} md={8}>
                            <img src={franko} alt="" width="100%" style={{minWidth: '397px'}}></img>
                        </Grid>
                        <Grid item sm={12} md={4} sx={{alignSelf: 'center'}}>
                            <div className="igraSans"  style={{fontSize: '71px', lineHeight: '71px', marginBottom: '30px'}}>Хочеш замовити власну лекцію?</div>
                            <Typography variant="body2" color="primary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                            <Button className='orderLecture' onClick={handleOpen}>Замовити лекцію</Button>
                        </Grid>
                    </Grid>
                    <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px'}}>Актуальні програми</div>
                    <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '15px 30px'}} />
                    <Grid container spacing={3}>
                    {programs.map(function(item) {
                        return (
                            <Grid item xs={12} sm={6} md={4}>
                            <NavLink to={'/video/'+item.link_detail} className="no_underlines">
                            <Card>
                                <CardActionArea>
                                <CardMedia component="img" image={'http://frankos-museum-backend.azurewebsites.net'+item.image}/>
                                <CardContent>
                                    <Stack direction="row" spacing={1}>
                                    <Typography variant="body2" color="primary" style={{fontSize: '25px', textDecoration: 'none'}}>{item.title}</Typography>
                                    <ArrowForwardIcon style={{fontSize: '25px', marginTop: '10px', transform: 'rotate(-45deg)'}}/>
                                    </Stack>
                                    <Typography variant="body2" color="#a3a3a3">{item.subtitle}</Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </NavLink>
                            </Grid>
                        )
                    })}
                    </Grid>
                </div>
            </div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                height="200px"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "700px",
                            padding: '20px 70px 70px 70px'
                        },
                    },
                }}
            >
                <Stack direction='row' justifyContent="space-between" width="100%" height={0}>
                    <div></div>
                    <IconButton
                    edge="start"
                    onClick={handleClose}
                    aria-label="close"
                    style={{color: 'black', height: '40px', marginTop: '10px', marginRight: '-40px'}}
                    >
                        <CloseIcon style={{float: 'right!important'}}/>
                    </IconButton>
                </Stack>
                <div className="igraSans" style={{fontSize: '50px', lineHeight: '50px', marginInline: 'auto', marginBlock: '40px 30px', textAlign: 'center'}}>Замовити лекцію</div>
                <div style={{color: "red"}}>{errorText}</div>
                <TextField id="name" label="Ваше ім'я" variant="standard"/>
                <TextField id="email" label="Ваш E-mail" variant="standard"/>
                <TextField id="phone" label="Ваш номер телефону (необов’язково)" variant="standard"/>
                <TextField id="comment" label="Коментар (необов’язково)" variant="standard"/>
                <Button className='orderLecture' onClick={confirmBtn}>Підтвердити замовлення</Button>
            </Dialog>
        </div>
    )
}

export default EducationalPrograms;