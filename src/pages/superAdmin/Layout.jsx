import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItem from '@mui/material/ListItem';
import { imgData } from '../../assets';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useState } from 'react';
import Client from './client/Client';
import Payment from './payment/Payment';
import Request from './request/Request';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
export default function SuperAdmin() {
    const [open, setOpen] = useState(false);
    const [isClient, setisClient] = useState(false)
    const [isPayment, setisPayment] = useState(false)
    const [isRequest, setisRequest] = useState(false)

    const toggleClient = () => {
        setisClient(true);
        setisPayment(false);
        setisRequest(false);
    }
    const togglePayment = () => {
        setisPayment(true)
        setisClient(false);
        setisRequest(false);
    }

    const toggleRequest = () => {
        setisRequest(!isRequest)
        setisClient(false);
        setisPayment(false);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ backgroundImage: `url(${imgData.formbg})`, backgroundSize: 'cover', backgroundPosition: 'fixed' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Super Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ gap: '10px', display: 'flex' }}>
                            <DashboardIcon /><Typography sx={{ mr: '3.7rem' }}>Dashboard</Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={handleDrawerClose}>

                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <SupervisedUserCircleIcon />
                                <Typography sx={{ fontSize: '16px' }} onClick={toggleClient}>Client</Typography>
                            </Box>

                        ) : (
                            <SupervisedUserCircleIcon onClick={toggleClient} />
                        )}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <PaymentIcon />
                                <Typography sx={{ fontSize: '16px' }} onClick={togglePayment}>Payment</Typography>
                            </Box>
                        ) : (
                            <PaymentIcon onClick={togglePayment} />
                        )}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <QuestionAnswerIcon />
                                <Typography sx={{ fontSize: '16px' }} onClick={toggleRequest}> Requests</Typography>
                            </Box>
                        ) : (
                            <QuestionAnswerIcon onClick={toggleRequest} />
                        )}
                    </ListItem>
                </List>

                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                {isClient ? <Client /> : ""}

                {isPayment ? <Payment /> : ""}

                {isRequest ? <Request /> : ""}
            </Box>

        </Box>
    );
}