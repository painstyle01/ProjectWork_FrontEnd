import React from 'react';
import './MainPage.css';
import Button from '@mui/material/Button'
import logo from '../../images/logo.png'
import Typography from '@mui/material/Typography'
import NotesIcon from '@mui/icons-material/Notes';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/system';




function MainPage() {
        return (
            <div className="main">
                <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
                    <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <div className="blackout">
                    <div className='menu2'>
                        <img src={logo} height="50"></img>
                        <Button variant="text" color="secondary" style={{float: 'right'}}>
                            <NotesIcon className="icon"/>
                        </Button>
                    </div>
                    <div className="title1">ДІМ</div>
                    <div className="title2">ФРАНКА</div>
                    <Box className='icons'>
                        <div><a href="https://www.instagram.com/dim_franka/"><InstagramIcon className="icon"/></a></div>
                        <div><a href="https://www.youtube.com/channel/UC6UeOsivTNCowjVt3Hg5G0g"><YouTubeIcon className="icon"/></a></div>
                    </Box>
                    <div className="leftBlock">
                        <div className='content'>
                            <Typography variant="body2" color="secondary" style={{marginBlock: '30px'}}>Це не просто Музей. Це також Дім Муз, де вирує багатогранне мистецьке життя; Дім Науки, що є осередком...</Typography>
                            <Button variant="text" color="secondary" id='but'>
                                Дізнатися більше
                            </Button>
                            <Button variant="text" color="secondary" className='b2' id='but'>
                                Спланувати візит
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default MainPage;