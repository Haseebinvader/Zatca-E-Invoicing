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
import { Fragment, useState } from 'react';
import Client from './client/Client';
import Payment from './payment/Payment';
import Request from './request/Request';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { Menu, MenuItem, Tooltip } from '@mui/material';
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
export default function Admin() {
    const [open, setOpen] = useState(false);
    const [isClient, setisClient] = useState(false)
    const [isPayment, setisPayment] = useState(false)
    const [isRequest, setisRequest] = useState(false)
    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
    const settings = ['Notification 1', 'Notification 2', 'Notification 3', 'This is a longer notification text'];

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
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Typography variant="h6" noWrap component="div">
                                Admin
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                            <Box>
                                <Typography
                                    sx={{
                                        color: 'green',
                                        textShadow: '0 0 5px rgba(0, 255, 0, 0.7)',
                                        animation: 'glow 1s infinite',
                                        '@keyframes glow': {
                                            '0%': { textShadow: '0 0 5px rgba(0, 255, 0, 0.7)' },
                                            '50%': { textShadow: '0 0 20px rgba(0, 255, 0, 0.7)' },
                                            '100%': { textShadow: '0 0 5px rgba(0, 255, 0, 0.7)' },
                                        },
                                    }}
                                >
                                    Active
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'red',
                                        textShadow: '0 0 5px rgba(255, 0, 0, 0.7)',
                                        animation: 'glow 1s infinite',
                                        '@keyframes glow': {
                                            '0%': { textShadow: '0 0 5px rgba(255, 0, 0, 0.7)' },
                                            '50%': { textShadow: '0 0 20px rgba(255, 0, 0, 0.7)' },
                                            '100%': { textShadow: '0 0 5px rgba(255, 0, 0, 0.7)' },
                                        },
                                    }}
                                >
                                    Not Active
                                </Typography>
                            </Box>
                            <Box>
                                <Tooltip title="Open notifications">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: '#fff' }}>
                                        <Badge badgeContent={4} color="primary">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting, index) => (
                                        <Fragment key={setting}>
                                            <MenuItem onClick={handleCloseUserMenu} sx={{ gap: '1rem', py: 0.01 }}>
                                                <Avatar>{setting.charAt(0)}</Avatar>
                                                <Typography
                                                    textAlign="center"
                                                    sx={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                                >
                                                    {setting.length > 20 ? `${setting.slice(0, 20)}...` : setting}
                                                </Typography>
                                            </MenuItem>
                                            {index < settings.length - 1 && <Divider />}
                                        </Fragment>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>
                    </Box>
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
                                <Typography sx={{ fontSize: '16px' }} onClick={toggleClient}>Opt 1</Typography>
                            </Box>

                        ) : (
                            <SupervisedUserCircleIcon onClick={toggleClient} />
                        )}
                    </ListItem>
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <SupervisedUserCircleIcon />
                                <Typography sx={{ fontSize: '16px' }} onClick={toggleClient}>Opt 2</Typography>
                            </Box>

                        ) : (
                            <SupervisedUserCircleIcon onClick={toggleClient} />
                        )}
                    </ListItem>
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <SupervisedUserCircleIcon />
                                <Typography sx={{ fontSize: '16px' }} onClick={toggleClient}>Opt 3</Typography>
                            </Box>

                        ) : (
                            <SupervisedUserCircleIcon onClick={toggleClient} />
                        )}
                    </ListItem>
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <PaymentIcon />
                                <Typography sx={{ fontSize: '16px' }} onClick={togglePayment}>Opt 4</Typography>
                            </Box>
                        ) : (
                            <PaymentIcon onClick={togglePayment} />
                        )}
                    </ListItem>
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <QuestionAnswerIcon />
                                <Typography sx={{ fontSize: '16px' }} onClick={toggleRequest}>Opt 5</Typography>
                            </Box>
                        ) : (
                            <QuestionAnswerIcon onClick={toggleRequest} />
                        )}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        {open ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <Link to='/' style={{ color: '#000', textDecoration: 'none' }}>
                                    <LogoutIcon />
                                </Link>
                                <Link to='/' style={{ color: '#000', textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '16px' }} onClick={toggleRequest}> Logout</Typography>
                                </Link>
                            </Box>
                        ) : (
                            <Link to='/' style={{ color: '#000', textDecoration: 'none' }}>
                                <LogoutIcon />
                            </Link>
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