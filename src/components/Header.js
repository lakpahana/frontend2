import * as React from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/userSlice';
const Header = () => {
    const dispatch = useDispatch();

    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        PCBMart
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Features
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Enterprise
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Support
                        </Link>
                    </nav>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Register
                    </Button>
                    <Button 
                    onClick={() => {
                        window.location.href = "/signin";

                    }}
                    href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                    <Button
                    onClick={() => {
                        dispatch(logout()); 
                        window.location.href = "/signin";

                    }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

        </>
    );
}

export default Header;
<>


</>