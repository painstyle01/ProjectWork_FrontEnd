import './Header.css';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import Group from '../../images/Group.png'
import Vector from '../../images/Vector.png'
import Group2 from '../../images/logo.png'
import Vector2 from '../../images/Vector2.png'
import { useState, useEffect } from 'react';
import {NavLink, useLocation} from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import cart from '../../images/cart.png'
import cart2 from '../../images/cart2.png'



function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorE2, setAnchorE2] = useState(null);
    const [anchorE3, setAnchorE3] = useState(null);
    const [anchorE4, setAnchorE4] = useState(null);
    const [anchorE5, setAnchorE5] = useState(null);

    const openE1 = Boolean(anchorEl);
    const openE2 = Boolean(anchorE2);
    const openE3 = Boolean(anchorE3);
    const openE4 = Boolean(anchorE4);
    const openE5 = Boolean(anchorE5);

    var lang = "uk";

    const [backgroundColor, setBackgroundColor] = useState();
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [textColor, setTextColor] = useState();
    const [buttonTextColor, setButtonTextColor] = useState();
    const [currentSectionId, setCurrentSectionId] = useState('');
    const [previousSectionId, setPreviousSectionId] = useState('');
    
    const { pathname } = useLocation();

    const handleClick = (event) => {
        if (event.currentTarget.id === "button1") {
            setAnchorEl(event.currentTarget);
        } else if (event.currentTarget.id === "button2") {
            setAnchorE2(event.currentTarget);
        } else if (event.currentTarget.id === "button3") {
            setAnchorE3(event.currentTarget);
        } else if (event.currentTarget.id === "button4") {
            setAnchorE4(event.currentTarget);
        } else if (event.currentTarget.id === "button5") {
            setAnchorE5(event.currentTarget);
        } else if (event.currentTarget.id === "button6") {
            setPreviousSectionId(currentSectionId)
            setCurrentSectionId(event.currentTarget.id)
        }

    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorE2(null);
        setAnchorE3(null);
        setAnchorE4(null);
        setAnchorE5(null);
    };

    const chooseOption = (event) => {
        setAnchorEl(null);
        setAnchorE2(null);
        setAnchorE3(null);
        setAnchorE4(null);
        setAnchorE5(null);
        setPreviousSectionId(currentSectionId)
        if(event.target.parentNode.parentNode.parentNode.id!==''){
            setCurrentSectionId(event.target.parentNode.parentNode.parentNode.id.replace('menu', 'button'))
        }
        else if(event.target.parentNode.parentNode.parentNode.parentNode.id!==''){
            setCurrentSectionId(event.target.parentNode.parentNode.parentNode.parentNode.id.replace('menu', 'button'))
        }
        else{
            setCurrentSectionId('')
        }
    };

    useEffect(() => {
        (async () => {
            window.scrollTo(0, 0);
            if (pathname==='/' || pathname==='/3Dtour' || window.location.href.indexOf("book") > -1) {
                setBackgroundColor('rgba(0,0,0,0.6)')
                setImage1(Group2)
                setImage2(Vector2)
                setImage3(cart2)
                setTextColor('secondary')
                setButtonTextColor('buttonMenu2')
            }
            else{
                // eslint-disable-next-line
                if (pathname.match(/video\/[^\/]+$/)!==null || pathname.match(/audio\/[^\/]+$/)!==null ) {
                    setBackgroundColor('rgba(28,28,28,0.5)')
                    setImage1(Group2)
                    setImage2(Vector2)
                    setImage3(cart2)
                    setTextColor('secondary')
                    setButtonTextColor('buttonMenu2')
                }
                else{
                    setBackgroundColor('white')
                    setImage1(Group)
                    setImage2(Vector)
                    setImage3(cart)
                    setTextColor('primary')
                    setButtonTextColor('buttonMenu')
                }
            }
            if(previousSectionId!==''){
                var previousSection = document.getElementById(previousSectionId);
                previousSection.style.backgroundColor=''
            }
            if(currentSectionId!==''){
                if (pathname==='/support') {
                    previousSection = document.getElementById(currentSectionId);
                    previousSection.style.backgroundColor=''
                }
                else{
                    var currentSection = document.getElementById(currentSectionId);
                    currentSection.style.backgroundColor='rgba(0,0,0,0.5)'
                }
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, currentSectionId]);

    return (
        <div className='GMenu'>
            <Grid container spacing={0} backgroundColor={backgroundColor} height='120px'>
                <Grid item xs={3} alignSelf='center' id='menuN'>
                    <NavLink to={'/'} onClick={chooseOption}>
                    <img src={image1} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt={"Group"}/>
                    </NavLink>
                </Grid>
                <Grid item xs={6} alignSelf='center' id='menuN'>
                    <Grid container spacing={0} alignItems="center">
                        <Grid item xs={6} sm={4} md={2}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>
                                <Button
                                    id="button1"
                                    className={buttonTextColor}
                                    aria-controls={openE1 ? 'menu1' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openE1 ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{border: 'none', borderRadius: 0, height: '100%', width: '100%'}}
                                >
                                {lang==="uk" ? "Музей" : "Museum"}
                                </Button>
                                <Menu
                                    id="menu1"
                                    MenuListProps={{
                                    'aria-labelledby': 'button1',
                                    }}
                                    anchorEl={anchorEl}
                                    open={openE1}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Про музей" : "About the museum"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Актуальні новини" : "Current news"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Спланувати візит" : "Plan a visit"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Експозиція" : "Exposition"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Проекти" : "Projects"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Архів подій" : "Event archive"}</MenuItem>
                                    <NavLink to={'/media-about-us'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "ЗМІ про нас" : "Media about us"}</MenuItem></NavLink>
                                </Menu>
                            </Typography>
                        </Grid>  
                        <Grid item xs={6} sm={4} md={2}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>
                                <Button
                                    id="button2"
                                    className={buttonTextColor}
                                    aria-controls={openE2 ? 'menu2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openE2 ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{border: 'none', borderRadius: 0, height: '100%', width: '100%'}}
                                >
                                {lang==="uk" ? "Онлайн" : "Online"}
                                </Button>
                                <Menu
                                    id="menu2"
                                    MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorE2}
                                    open={openE2}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <NavLink to={'/3Dtour'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Віртуальний тур" : "Virtual tour"}</MenuItem></NavLink>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Онлайн колекція" : "Online collection"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Каталог бібліотеки" : "Library catalogue"}</MenuItem>
                                    <NavLink to={'/video'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Відео" : "Video"}</MenuItem></NavLink>
                                    <NavLink to={'/audio'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Аудіо" : "Audio"}</MenuItem></NavLink>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Ігри" : "Games"}</MenuItem>
                                </Menu>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>
                                <Button
                                    id="button3"
                                    className={buttonTextColor}
                                    aria-controls={openE3 ? 'menu3' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openE3 ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{border: 'none', borderRadius: 0, height: '100%', width: '100%'}}
                                >
                                {lang==="uk" ? "Іван Франко" : "Ivan Franko"}
                                </Button>
                                <Menu
                                    id="menu3"
                                    MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorE3}
                                    open={openE3}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <NavLink to={'/biography'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Хто такий Франко?" : "Who Franko is?"}</MenuItem></NavLink>
                                    <NavLink to={'/history'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Історія Дому" : "The house's history"}</MenuItem></NavLink>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Франчата" : "Franchildren"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Франко наживо" : "Franko in person"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Франко від А до Я" : "Franko from A to Z"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "TimeLine" : "TimeLine"}</MenuItem>
                                </Menu>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>
                                <Button
                                    id="button4"
                                    className={buttonTextColor}
                                    aria-controls={openE4 ? 'menu4' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openE4 ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{border: 'none', borderRadius: 0, height: '100%', width: '100%'}}
                                >
                                {lang==="uk" ? "Освіта" : "Edu\u00ADcation"}
                                </Button>
                                <Menu
                                    id="menu4"
                                    MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorE4}
                                    open={openE4}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <NavLink to={'/excursion'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Екскурсії" : "Excursions"}</MenuItem></NavLink>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Освітні програми" : "Educational programs"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Програми" : "Programs"}</MenuItem>
                                </Menu>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>
                                <Button
                                    id="button5"
                                    className={buttonTextColor}
                                    aria-controls={openE5 ? 'menu5' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openE5 ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{border: 'none', borderRadius: 0, height: '100%', width: '100%'}}
                                >
                                {lang==="uk" ? "Про нас" : "About us"}
                                </Button>
                                <Menu
                                    id="menu5"
                                    MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorE5}
                                    open={openE5}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >

                                    <NavLink to={'/team'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Команда" : "Team"}</MenuItem></NavLink>
                                    <NavLink to={'/contact'} className="menuNavLink"><MenuItem onClick={chooseOption}>{lang==="uk" ? "Контакти" : "Contacts"}</MenuItem></NavLink>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Для преси" : "For press"}</MenuItem>
                                    <MenuItem onClick={chooseOption}>{lang==="uk" ? "Допомога" : "Help"}</MenuItem>
                                </Menu>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Typography className='nameMenu' variant="body2" color={textColor}>
                                <NavLink to={'/shop'} className="menuNavLink">
                                <Button
                                    id="button6"
                                    className={buttonTextColor}
                                    onClick={handleClick}
                                    style={{border: 'none', borderRadius: 0, height: '100%', width: '100%'}}
                                >
                                {lang==="uk" ? "Крам\u00ADниця" : "Shop"}
                                </Button>
                                </NavLink>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} sm={0.5}></Grid>
                <Grid item xs={2} alignSelf='center'>
                    <Grid container spacing={0}>
                        <Grid item xs={6} md={3} alignSelf='center' id='menuN'>
                            <NavLink to={'/cart'} onClick={chooseOption}>
                                <img src={image3} alt={"cart"}/>
                            </NavLink>
                        </Grid>
                        <Grid item xs={6} md={3} alignSelf='center' id='menuN'>
                                <img src={image2} alt={"Vector"}/>
                        </Grid>
                        <Grid item xs={12} md={3} alignSelf='center' id='menuN'>
                            <Typography color={textColor}>
                                <div className='lng'>UKR/ENG</div>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
