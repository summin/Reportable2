import * as React from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import { updateScreen } from '../_store/content/actions'

// @ts-ignore
import Logo from '../media/images/Logo.png'


import clsx from 'clsx';
import {
    createStyles,
    makeStyles,
    Theme,
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BuildIcon from '@material-ui/icons/Build';
import SettingsIcon from '@material-ui/icons/Settings';
import WarningIcon from '@material-ui/icons/Warning';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SpeedIcon from '@material-ui/icons/Speed';
import { white } from 'material-ui/styles/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        icon: {
            color: 'rgb(255, 155, 255)'
        },
        appBar: {
            background: '#37474f',
            color: 'rgb(255, 155, 255)',
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
            color: 'rgb(255, 155, 255)',
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',

        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                background: '#37474f',
                color: 'rgb(255, 155, 255)'
            },
        },
        MuiButton: {
            outlined: {
                color: 'rgb(255, 155, 155)'
            }
        }
    }
})

const Nav = ({ ...props }) => {
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onDrawerLinkClick = (e: string): void => {
        props.updateScreen(e);
    }

    const useStylesSelected = makeStyles((theme: Theme) =>
        createStyles({
            icon: {
                color: 'rgb(255, 155, 155)'
            },
        })
    );

    const iconClass = useStylesSelected(theme);

    return (
        <Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar variant="dense">
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                        <Box display="flex" justifyContent="space-between" width="100%">
                            <img src={Logo} height='30' />
                            <Box>
                                {props.navButtons.map((text: string) =>
                                    <Button size='small' variant="outlined"> {text} </Button>
                                )}
                            </Box>
                        </Box>
                    </Toolbar>

                </AppBar>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.icon} /> : <ChevronLeftIcon className={classes.icon} />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {['Alerts', 'Dashboard', 'Metrics'].map((text, index) => (
                            <ListItem button key={text} onClick={() => onDrawerLinkClick(text.toLowerCase())}>
                                <ListItemIcon className={(props.screen == text.toLowerCase()) ? iconClass.icon : classes.icon}>
                                    {text == "Alerts" && <WarningIcon />
                                        || text == "Dashboard" && <AssessmentIcon />
                                        || text == "Metrics" && <SpeedIcon />}
                                </ListItemIcon>
                                <ListItemText className={(props.screen == text.toLowerCase()) ? iconClass.icon : classes.icon} primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Build'].map((text, index) => (
                            <ListItem button key={text} onClick={() => onDrawerLinkClick(text.toLowerCase())}>
                                <ListItemIcon className={(props.screen == text.toLowerCase()) ? iconClass.icon : classes.icon}>
                                    {text == "Build" && <BuildIcon />}
                                </ListItemIcon>
                                <ListItemText className={(props.screen == text.toLowerCase()) ? iconClass.icon : classes.icon}primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Settings'].map((text, index) => (
                            <ListItem button key={text} onClick={() => onDrawerLinkClick(text.toLowerCase())}>
                                <ListItemIcon className={(props.screen == text.toLowerCase()) ? iconClass.icon : classes.icon}>
                                    {text == "Settings" && <SettingsIcon />}
                                </ListItemIcon>
                                <ListItemText className={(props.screen == text.toLowerCase()) ? iconClass.icon : classes.icon} primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </ThemeProvider>
        </Fragment>
    );
}

const mapState = (state: any) => ({
    screen: state.content.screen.screen,
    navButtons: state.content.nav.buttons
})

const actionCreators = {
    updateScreen
};

const connectedNav = connect(mapState, actionCreators)(Nav);
export default connectedNav;