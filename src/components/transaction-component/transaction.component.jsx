import React from 'react';
import './transaction.component.css';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import User from '@material-ui/icons/PersonOutlineOutlined';
import Settings from '@material-ui/icons/SettingsOutlined';
import { mainListItems, secondaryListItems } from '../list-items/list-items';
import RecentTransactions from '../recent-transactions/recent-transaction';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: 'white',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
   
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: '#00c158',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


export default function Transaction() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* desktop version of the navbar*/}

      <Hidden xsDown>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon style={{color: 'black'}} />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
              <Settings style={{marginRight:'30px', color:'black'}} />
          </IconButton>
          <IconButton color="inherit">
          <User style={{marginRight:'30px', color: '#00c158'}} />
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <Drawer 
        variant="permanent"
       
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), 
        }}
        open={open} 
       
      >
        <div className={classes.toolbarIcon}  style={{backgroundColor: 'white'}}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <h4 style={{textAlign: 'left', marginLeft: '20px', marginTop: '70px', marginBottom: '50px', color: 'white'}}>Hi,<br/>
            Merchant Name
          </h4>
        {mainListItems}</List>
        
        <List>{secondaryListItems}</List>
      </Drawer>
      </Hidden>

       {/* End of desktop version of the navbar*/}

        {/* mobile version of the navbar*/}

        <Hidden smUp>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon style={{color: 'black'}} />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
            <IconButton color="inherit">
                <Settings style={{marginRight:'30px', color:'black'}} />
            </IconButton>
            <IconButton color="inherit">
            <User style={{marginRight:'30px', color: '#00c158'}} />
            </IconButton>
          </Toolbar>
        </AppBar>
       
        <Drawer 
          
         
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), 
          }}
          open={open} 
         
        >
          <div className={classes.toolbarIcon}  style={{backgroundColor: 'white'}}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <h4 style={{textAlign: 'left', marginLeft: '20px', marginTop: '70px', marginBottom: '50px', color: 'white'}}>Hi,<br/>
              Merchant Name
            </h4>
          {mainListItems}</List>
          
          <List>{secondaryListItems}</List>
        </Drawer>
        </Hidden>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={5}>
               <h3 className="trans">Transactions</h3>
               <div className="total-kwuo inline">
             <div>
              <h4>Total kwuo received</h4>
              <h5>1000.00</h5>
             </div>
             
            </div>
            <div className="received-kwuo-overlay"></div>
          
              
            </Grid>
            <Grid item xs={12} md={2} lg={2}></Grid>
            <Grid item xs={12} md={5} lg={5}>
            <br/><br/>
                <div className="sent-kwuo inline">
                <div>
                <h4>Total kwuo sent</h4>
                <h5>1000.00</h5>
                </div>
            </div>
            <div className="sent-kwuo-overlay"></div>
            </Grid>
          </Grid>
          {/*<Box pt={4}>
            <Copyright />
      </Box>*/}

      <Grid container spacing={3}>
        
            <Grid item xs={12} md={5} lg={5}>
              
                <div className="table1">
                <h3>Transaction Breakdown</h3>
                <table className="kwuo-table">
                <tr>
                    <td>Today</td>
                    <td>This week</td>
                    <td>This month</td>
                </tr>
                <tr>
                    <td><b>2000</b></td>
                    <td><b>2000</b></td>
                    <td><b>2000</b></td>
                </tr>
                </table>
            </div>
                
            </Grid>
            <Grid item xs={12} md={2} lg={2}></Grid>
            
            <Grid item xs={12} md={5} lg={5}></Grid>

        <Grid item xs={12} md={12} lg={12}>
        <RecentTransactions/>
        </Grid>
        
          </Grid>
        </Container>
      </main>
    </div>
  );
}