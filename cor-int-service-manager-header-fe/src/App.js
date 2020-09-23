import React from 'react';
import {
   AppBar,
   Toolbar,
   Typography,
   IconButton,
   MenuItem,
   Badge,
   Menu,
   Button,
   Grid,
   ListItemText,
   List,
   ListItem
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

function MenuItemEnv(props) {
   return <MenuItem onClick={props.handleOnClose}>{props.env}</MenuItem>
}

function MenuEnv(props) {
   return (
      <Menu
         anchorEl={props.anchorEl}
         open={props.isMenuOpen}
         anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
         id={props.menuId}
         keepMounted
         transformOrigin={{ vertical: 'top', horizontal: 'left' }}
         onClose={props.handleOnClose}
      >
         {props.menuItens.map(item => (
            <MenuItem key={Math.round(Math.random() * 100000000)} onClick={() => props.handleOnClose(item)}>{item.name}</MenuItem>
         ))}
      </Menu>
   )
}

function MenuNotification(props) {
   return (
      <Menu
         elevation={0}
         anchorEl={props.anchorEl}
         getContentAnchorEl={null}
         open={props.isMenuOpen}
         id={props.menuId}
         keepMounted
         onClose={props.handleOnClose}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
         }}
         transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
         }}
         style={{ border: '1px solid' }}
      >
         <List>
            {props.menuItens.map(item => (
               <ListItem key={Math.round(Math.random() * 100000000)}>
                  <ListItemText key={Math.round(Math.random() * 100000000)} primary={item.content} />
               </ListItem>
            ))}
         </List>
      </Menu>
   )
}

function ButtonEnv(props) {
   return (
      <Button
         disabled={!props.enable}
         edge="end"
         aria-label="account of current user"
         aria-controls={props.menuId}
         aria-haspopup="true"
         onClick={props.handleChangeEnviroment}
         color="inherit"
      >{props.enviroment.name}</Button>

   )
}

class App extends React.Component {
   constructor(props) {
      super();

      this.state = {
         notification: props.getNotifications(),
         isMenuOpen: false,
         anchorEl: undefined,
         notificationAnchorEl: undefined,
         isNotificationMenuOpen: false,
         enable: !!props.getLoggin()
      }
      console.log("props.getLoggin()", !!props.getLoggin())

      props.setNotificationHeaderAdd(notification => {
         this.setState({ notification: notification })
      });

      props.registerLoggedIn(logged => {
         this.setState({ enable: logged })
      });
   }

   render() {
      return (
         <ScopedCssBaseline>
            <AppBar position="relative" style={{zIndex: 1200}} >
               <Toolbar variant="dense">
                  <Grid item xs={3}>
                     <Typography noWrap>HDI Seguros Portal Dev</Typography>
                  </Grid>
                  <Grid item xs={3} sm={3}>
                     <ButtonEnv
                        enable={this.props.getLoggin()}
                        enviroment={this.props.getEnv()}
                        menuId='primary-menu'
                        handleChangeEnviroment={(event) => this.setState({ anchorEl: event.currentTarget })} />
                  </Grid>
                  {/* <div style={{ flexGrow: 1 }} /> */}
                  <Grid container justify="flex-end">
                     <IconButton aria-label={`show ${this.state.notification.length} new notifications`} color="inherit"
                        disabled={!this.state.enable}
                        size="small"
                        onClick={(event) => this.setState({ notificationAnchorEl: event.currentTarget })}>
                        <Badge badgeContent={this.state.notification.length} color="secondary">
                           <NotificationsIcon />
                        </Badge>
                     </IconButton>
                  </Grid>
               </Toolbar>
               <MenuEnv
                  anchorEl={this.state.anchorEl}
                  isMenuOpen={Boolean(this.state.anchorEl)}
                  menuId='primary-menu'
                  menuItens={this.props.envs}
                  handleOnClose={(ev) => {
                     console.log(typeof ev)
                     if (typeof ev.name == 'string') {
                        this.props.setEnv(ev);
                        console.log(this.props.getEnv());
                     }
                     this.setState({ anchorEl: null })
                  }} />

               <MenuNotification
                  anchorEl={this.state.notificationAnchorEl}
                  isMenuOpen={Boolean(this.state.notificationAnchorEl)}
                  menuId='notification-menu'
                  menuItens={this.state.notification}
                  style={{ border: '1px solid' }}
                  handleOnClose={(ev) => {
                     console.log(typeof ev)
                     if (typeof ev.name == 'string') {
                        this.props.setEnv(ev);
                        console.log(this.props.getEnv());
                     }
                     this.setState({ notificationAnchorEl: null })
                  }} />
            </AppBar>
         </ScopedCssBaseline>
      );
   }
}

export default App;
