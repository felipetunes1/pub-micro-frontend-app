import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 240;
const drawerMinWidth = 60;

const menuResponse = [
  {
    "id": 1,
    "title": "Manutenção",
    "icon": "<InboxIcon />",
    "isopen": false,
    "submenu": [
      {
        "id": 2,
        "title": "Query Connector",
        "icon": "<InboxIcon />",
        "isopen": false,
        "submenu": [
          {
            "id": 3,
            "title": "Home",
            "icon": "<InboxIcon />",
            "href": "/query-connector",
          },
          {
            "id": 4,
            "title": "New",
            "icon": "<InboxIcon />",
            "href": "/query-connector/new",
          },
          {
            "id": 5,
            "title": "List",
            "icon": "<InboxIcon />",
            "href": "/query-connector/list",
          }
        ]
      }
    ]
  }
]

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 600,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerMin: {
    maxWidth: drawerMinWidth,
    flexShrink: 0,
  },
  drawerPaperMin: {
    maxWidth: drawerMinWidth,
    zIndex: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


function templateMenuWithClick(reduce, id, text, click, icon) {

}

function OptionMenu(props) {
  return (
    <div key={`Div${props.menu.id}`}>
      <ListItem button key={`ListItem${props.menu.id}`} onClick={props.handleExpand(props.menu)} style={{paddingLeft: props.padding + 'px'}}>
        <ListItemIcon key={`ListItemIcon${props.menu.id}`}><InboxIcon key={`InboxIcon${props.menu.id}`} /></ListItemIcon>
        <ListItemText key={`ListItemText${props.menu.id}`} primary={props.menu.title} />
        {props.menu.submenu ? (props.menu.isopen ? <ExpandLess /> : <ExpandMore />) : ""}
      </ListItem>
      {
        props.menu.submenu ?
          (
            <div>
              <Collapse key={`Collapse${props.menu.id}`} in={props.menu.isopen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding key={`SubList${props.menu.id}`}>
                  {props.menu.submenu.map((submenu) => (
                    <OptionMenu key={`OptionMenu${submenu.id}`} menu={submenu} reduced={props.reduced} handleExpand={props.handleExpand} padding={props.padding + 10} />
                  ))}
                </List>
              </Collapse>
              <Divider />
            </div>
          ) : <Divider />

      }
    </div>
  )
}

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenSubmenu = (menu) => {
    return () => {
      if (menu.submenu) {
        menu.isopen = !menu.isopen
        setMenuOpen(!menuOpen)
      }
      else {
        history.pushState(null, null, menu.href)
        handleDrawerClose();
      }
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ScopedCssBaseline>
      <Drawer
        className={classes.drawerMin}
        variant="permanent"
        classes={{
          paper: classes.drawerPaperMin,
        }}
      >
        <Toolbar variant="dense" />
        <List>
          <IconButton edge='end' onClick={handleDrawerOpen}><ChevronRightIcon /></IconButton>
        </List>
        <Divider />
        <div className={classes.drawerContainer}>
          <List>
            {menuResponse.map((menu, index) => (
              <IconButton key={`IconButton${menu.id}`} onClick={() => {
                if (menu.submenu) {
                  menu.isopen = !menu.isopen
                  setMenuOpen(menu.isopen)
                }
                else
                  history.pushState(null, null, menu.href)
              }}>
                <InboxIcon key={`MinInboxIcon${menu.id}`} />
              </IconButton>
            ))}
          </List>
        </div>
      </Drawer>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        style={{ display: (open ? 'block' : 'none') }}
      >
        <Toolbar variant="dense" />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon edge='end'><ChevronLeftIcon /></ListItemIcon>
              <ListItemText primary={'Close'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            {menuResponse.map((menu) => <OptionMenu key={`OptionMenu${menu.id}`} menu={menu} reduced={false} handleExpand={handleOpenSubmenu} padding={10} />)}
          </List>
        </div>
      </Drawer>
    </ScopedCssBaseline>
  );
}
