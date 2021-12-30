import React from 'react';
import './VAmenu.css';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const setActive = ({isActive}) => (isActive ? "active": "not-active")

const VAmenu = () => (
  <Container maxWidth="lg" style={{backgroundColor: '#ef7f16'}}>
      <Toolbar>
        <Typography variant="h6" className="it">
          <NavLink className={setActive} to="/video" style={{padding: '20px'}} >Video</NavLink>
        </Typography>
        <Typography variant="h6">
          <NavLink className={setActive} to="/audio" style={{padding: '20px'}} >Audio</NavLink>
        </Typography>
      </Toolbar>
  </Container>
);

VAmenu.propTypes = {};

VAmenu.defaultProps = {};

export default VAmenu;
