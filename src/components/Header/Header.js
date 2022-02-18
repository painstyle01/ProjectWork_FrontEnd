import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from '../../images/logo.png'
import logo2 from '../../images/logo2.png'
import { Box } from '@mui/system';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';



function Header() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
        return (
            <AppBar position="static" color="primary" className="menu">
                <Toolbar sx={{ justifyContent: 'space-around' }}>
                  
                  <Stack direction="row" spacing={2}>
                    <Typography variant="h6" component="div">
                      <a href='#'><img src={logo}></img></a>                    
                    </Typography>
                    <Typography variant="h6" component="div">
                      <a href='http://fromatoz.dimfranka.lviv.ua/'><img src={logo2}></img></a>
                    </Typography>
                  </Stack>
                  
                  <Stack id='sideMenu' direction="row" spacing={2}>
                    <Typography variant="h6" component="div" onClick={toggleDrawer('left', true)}>
                      <a><MenuIcon className="icon" sx={{ fontSize: '30px' }}/></a>
                    </Typography>
                    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                      <Box sx={{ width: '250px' }} onClick={toggleDrawer('left', false)}>
                      <Typography variant="h6" component="div" onClick={toggleDrawer('left', true)}>
                        <List>
                          <ListItem className='sideButton' button>
                              Візит
                          </ListItem>
                          <ListItem className='sideButton' button>
                              Події
                          </ListItem>
                          <ListItem className='sideButton' button>
                              Експозиція
                          </ListItem>
                          <ListItem className='sideButton' button>
                              Колекція
                          </ListItem>
                          <ListItem className='sideButton' button>
                              Програми
                          </ListItem>
                          <ListItem className='sideButton' button>
                              Про музей
                          </ListItem>
                          <ListItem className='sideButton' button>
                              Про Франка
                          </ListItem>
                          <ListItem className='sideButton' button>
                              Мультимедія
                          </ListItem >
                        </List>
                      </Typography>
                      </Box>
                    </Drawer>
                  </Stack>
                  
                  <Stack id='mainMenu' direction="row" spacing={2} sx={{display: 'flex', flexWrap: 'wrap'}}>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Візит</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Події</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Експозиція</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Колекція</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Програми</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Про музей</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Про Франка</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>Мультимедія</div>
                    </Typography>
                  </Stack>
                  
                  <Stack direction="row" spacing={2}>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>UA</div>
                    </Typography>
                    <Typography variant="h6" component="div" className="menuButton">
                      <div>EN</div>
                    </Typography>
                  </Stack>

                </Toolbar>
            </AppBar>
        )
}

export default Header;