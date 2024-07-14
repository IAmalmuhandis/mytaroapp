import React, { useState } from 'react';
import { Container, Stack, Typography, TextField, InputAdornment} from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo/Logo.svg';
import { ReactComponent as Illustration } from '../../assets/svg/signin.svg';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue, grey, red } from '../../utils/colors';
import Signin_SignupBtn from '../../component/buttons/sigin_signupBtn';
import { Link } from 'react-router-dom';
import SocialMedia from '../../component/socialmedia/SocialMedia';
import Separator from '../../component/util/separator';
import { Helmet } from 'react-helmet';

const SignIn = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)

    const onSignIn = () =>{
        if(!email.trim() || !password.trim()){
            return setErr(true)
        }
        setErr(false)
    }

    const typeSomtingStyle = {
        backgroundColor: grey,
        borderRadius: isLargeScreen ? '50px' : '25px',
        fontWeight: '8.77px',
        fontFamily: 'Montserrat',
        borderColor: blue,
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderColor: blue,
        },
        '& .MuiOutlinedInput-root': {
            height: isLargeScreen ? '70px' : '43px',
            width: isLargeScreen ? '450px' : '244px',
            fontSize: isLargeScreen ? '18px' : '12px',
            '& fieldset': {
                border: err ? 1 : 0,
                borderRadius: isLargeScreen ? '50px' : '25px',
            },
            '&:hover fieldset': {
                border: 1,
                borderColor: blue,
            },
            '&.Mui-focused fieldset': {
                border: 1,
                borderColor: blue, // Change border color when focused
            },
        },
        '& .MuiSvgIcon-root': {
            color: err ? red : 'grey', // Set initial icon color to grey
            fontSize: isLargeScreen ? '35px' : '20px', // Adjust icon size
            transition: 'color 0.3s', // Add transition for color change
        },
        '&:hover .MuiSvgIcon-root': {
            color: blue, // Change icon color on hover
        },
        '& .MuiTypography-root': {
            color: blue, // Change text color
            fontSize: isLargeScreen ? '16.3px' : '11px', // Adjust text size
            lineHeight: isLargeScreen ? '19.9px' : '13.45px', // Adjust line height
            fontWeight: '400',
            letterSpacing: '1%',
            textAlign: 'center',
        },
    };

    const inputAdornmentStyle = {
        fontSize: isLargeScreen ? '35px' : '20px',
    };

    return (
        <>
        <Helmet>
            <title>Sign in</title>
        </Helmet>
        <Container maxWidth="none" className='flex flex-col justify-center items-center'>
            <Stack mt={3} className='justify-center items-center' spacing={1}>
                <Logo width={isLargeScreen ? 187 : 57} height={isLargeScreen ? 109 : 57} />
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontSize: isLargeScreen ? '46px' : '19.13px',
                        lineHeight: isLargeScreen ? '54.3px' : '23.19px',
                        color: blue,
                        fontWeight: '600',
                        letterSpacing: '1%',
                        textAlign: 'center',
                    }}
                >
                    Sign In
                </Typography>
            </Stack>
            <Stack mt={3} className='justify-around items-center' spacing={isDesktopScreen ? 20 : 4} direction={isDesktopScreen ? 'row' : 'column'}>
                <Illustration width={isLargeScreen ? 509 : 232.8} height={isLargeScreen ? 509 : 236} />
                <Stack spacing={3}>
                    <Stack spacing={3}>
                        <TextField
                            error={err}
                            sx={typeSomtingStyle}
                            placeholder="Email Address"
                            type="email"
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon sx={inputAdornmentStyle} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            error={err}
                            sx={typeSomtingStyle}
                            placeholder="Password"
                            type="password"
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon sx={inputAdornmentStyle} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    <Stack mb={5} className='justify-center items-center' spacing={2}>
                        <Signin_SignupBtn title="Sign In" onClick={onSignIn} />
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '16.3px' : '11px',
                                lineHeight: isLargeScreen ? '19.9px' : '13.45px',
                                color: blue,
                                fontWeight: '400',
                                letterSpacing: '1%',
                                textAlign: 'center',
                            }}
                        >
                            Don't have an account? <Link to="/signup" style={{ color: red }}>Sign up</Link>
                        </Typography>
                        <Separator />
                        <div className='mt-5 mx-auto w-full flex justify-center items-center'>
                           <SocialMedia />
                       </div>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
        </>
    );
};

export default SignIn;
