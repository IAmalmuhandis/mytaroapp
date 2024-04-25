import { Container, Stack, Typography, TextField, InputAdornment } from '@mui/material'
import React from 'react'
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';
import { ReactComponent as Illustration } from '../assets/svg/createAccount.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue, red } from '../utils/colors';
import Signin_SignupBtn from '../component/sigin_signupBtn';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen

  const typeSomtingStyle = {
    backgroundColor: '#E7E7E7',
    borderRadius: isLargeScreen ? '50px' : '25px',
    fontWeight: '8.77px',
    '& .MuiOutlinedInput-root': {
      height: isLargeScreen ? '70px' : '43px', 
      width: isLargeScreen ? '450px' : '244px',
      fontSize: isLargeScreen ? '18px' : '12px',
      '& fieldset': {
        border: 'none', 
      },
    },
  }

  return (
    <Container maxWidth="none" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Stack mt={3} sx={{justifyContent: 'center', alignItems: 'center'}} spacing={1}>
            <Logo width={isLargeScreen ? 187 : 57} height={isLargeScreen ? 109 : 57}/>
            <Typography sx={{ 
                fontFamily: 'Montserrat', 
                fontSize: isLargeScreen ? '46px' : '19.13px', 
                lineHeight: isLargeScreen ? '54.3px' : '23.19px', 
                color: blue, 
                fontWeight: '600', 
                letterSpacing: '1%', 
                textAlign: 'center' 
                }}
                >
                Create New Account
            </Typography>
        </Stack>
        <Stack mt={5} sx={{justifyContent: 'space-around', alignItems: 'center'}} spacing={isDesktopScreen ? 10 : 4} direction={isDesktopScreen ? 'row' : 'column'}>
            <Illustration width={isLargeScreen ? 509 : 168.82} height={isLargeScreen ? 509 : 168.82} />
            <Stack spacing={3}>
                <Stack spacing={3}>
                    <TextField
                        sx={typeSomtingStyle}
                        placeholder="Full Name"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircleIcon   sx={{fontSize: isLargeScreen ? '35px' : '20px'}}/>
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        sx={typeSomtingStyle}
                        placeholder="Email Address"
                        type='email'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <EmailIcon   sx={{fontSize: isLargeScreen ? '35px' : '20px'}}/>
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        sx={typeSomtingStyle}
                        placeholder="Phone Number"
                        type='number'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <PhoneIcon   sx={{fontSize: isLargeScreen ? '35px' : '20px'}}/>
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        sx={typeSomtingStyle}
                        placeholder="Password"
                        type='password'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <LockIcon   sx={{fontSize: isLargeScreen ? '35px' : '20px'}}/>
                            </InputAdornment>
                        ),
                        }}
                    />
                </Stack>
                <Stack mb={5} sx={{justifyContent: 'center', alignItems: 'center'}} spacing={2}>
                    <Signin_SignupBtn title='Sign in' />
                    <Typography sx={{ 
                        fontFamily: 'Montserrat', 
                        fontSize: isLargeScreen ? '16.3px' : '11px', 
                        lineHeight: isLargeScreen ? '19.9px' : '13.45px', 
                        color: blue, 
                        fontWeight: '400', 
                        letterSpacing: '1%', 
                        textAlign: 'center' 
                        }}
                        >
                        Already have an account? <Link style={{color: red}}>Sign in</Link>
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    </Container>
  )
}

export default SignUp