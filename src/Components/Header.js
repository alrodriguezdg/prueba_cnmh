import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import GestureIcon from "@material-ui/icons/Gesture";

const Header = () => {
  return (
    <AppBar position="static" style={{background: '#000'}}>
      <Toolbar>
        <GestureIcon/>
        <Typography variant="h6">Prueba Centro Nacional de Memoria Histórica</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header
