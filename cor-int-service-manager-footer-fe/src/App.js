import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function App(props) {
  const [value, setValue] = React.useState(0);
  const [logged, setLogged] = React.useState(props.getLoggin());
  // console.log("footer", props.registerLoggedIn)
  props.registerLoggedIn((param) => setLogged(param));

  return (
    <ScopedCssBaseline>
      <Grid container
        alignItems="center">
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            style={{ bottom: 0 }}
          >

            <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => history.pushState(null, null, '/')} />
            <BottomNavigationAction label={!logged ? 'Login' : 'Logout'} icon={!logged ? <VpnKeyIcon /> : <ExitToAppIcon />} onClick={() => {
              props.callLogedOut();
              history.pushState(null, null, '/login')
            }} />
          </BottomNavigation>
        </Grid>
        <Grid item xs={1}>
          <Typography>Version 0.0.1</Typography>
        </Grid>
      </Grid>
    </ScopedCssBaseline>
  );
}

export default App;
