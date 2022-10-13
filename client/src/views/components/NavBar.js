import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

// This will need to be passed in somehow
const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const NavBar = (props) => {
    return (
        <AppBar position="absolute" open={open}>
            <Toolbar>
            <Button 
                variant='contained'
                onClick={props.connectToXero}
                disabled={props.connectButtonIsDisabled}
                // startIcon={'client/public/assets/8b6963f7-38bb-4360-9693-8ed01584812f.jpeg'}
                sx={{
                marginRight: '24px'
                }}
                >
                {props.connectButtonText}
            </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;