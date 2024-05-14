import { Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back_Avater from '../component/Back_Avater';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Wedding } from '../assets/svg/building-3.svg';
import { ReactComponent as Budget } from '../assets/svg/money-recive.svg';
import { ReactComponent as Location } from '../assets/svg/location.svg';
import { ReactComponent as Calender } from '../assets/svg/calendar.svg';
import { ReactComponent as Capacity } from '../assets/svg/people.svg';
import { ReactComponent as Color } from '../assets/svg/colorfilter.svg';
import { blue } from '../utils/colors';
import ContinueBtn from '../component/continueBtn';


const Confirm = () => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090
    const navigate = useNavigate()
    const handleBack = () =>{
        navigate('/AiAssistant/stepper')
    }
    const paperStyle = {
        width: isLargeScreen ? '230px' : '130px',
        height: isLargeScreen ? '180px' : '130px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <Container maxWidth="none" sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <Back_Avater onClick={handleBack} />
        <div style={{marginTop: isLargeScreen && '-20px'}}>
            <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: isLargeScreen ? '30px' : '14px',
              lineHeight: isLargeScreen ? '70px' : '20px',
              color: blue,
              fontWeight: '800',
              textAlign: 'center',
            }}
            mt={3}
          >
            Please Confirm Your Details And Continue
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: isLargeScreen ? '22px' : '15px',
              lineHeight: isLargeScreen ? '40px' : '25px',
              color: blue,
              fontWeight: '700',
              letterSpacing: '1%',
              textAlign: 'center',
            }}
            mt={isLargeScreen ? 0 : 2}
          >
            Click to change your details
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'center' }}
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
            </div>
        <Container sx={{display: 'flex', flexDirection: 'column', maxHeight: '100vh'}}>
            <Stack mt={isLargeScreen ? 2 : 4} direction={isLargeScreen ? 'row' : 'column'} spacing={3} sx={{justifyContent: 'center', alignItems: 'center'}}>  
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={isLargeScreen ? 5 : 4}>
                    <Paper sx={paperStyle} elevation={4}>
                      <Stack spacing={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
                          <Typography
                            sx={{
                              fontFamily: 'Montserrat',
                              fontSize: isLargeScreen ? '15px' : '8px',
                              color: blue,
                              fontWeight: '600',
                              letterSpacing: '1%',
                              textAlign: 'center',
                            }}
                          >Event Type</Typography>
                          <Wedding width={isLargeScreen ? '77px' : '36px'} height={isLargeScreen ? '77px' : '36px'} />
                          <Typography
                            sx={{
                              fontFamily: 'Montserrat',
                              fontSize: isLargeScreen ? '22px' : '11px',
                              color: blue,
                              fontWeight: '700',
                              letterSpacing: '1%',
                              textAlign: 'center',
                            }}
                          >Wedding</Typography>
                      </Stack>
                    </Paper>
                    <Paper sx={paperStyle} elevation={4}>
                      <Stack spacing={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '15px' : '8px',
                                color: blue,
                                fontWeight: '600',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >Budget</Typography>
                            <Budget width={isLargeScreen ? '77px' : '36px'} height={isLargeScreen ? '77px' : '36px'} />
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '22px' : '11px',
                                color: blue,
                                fontWeight: '700',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >6,000,000</Typography>
                        </Stack>
                    </Paper>
                </Stack>
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={isLargeScreen ? 5 : 4}>
                    <Paper sx={paperStyle} elevation={4}>
                    <Stack spacing={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '15px' : '8px',
                                color: blue,
                                fontWeight: '600',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >Location</Typography>
                            <Location width={isLargeScreen ? '77px' : '36px'} height={isLargeScreen ? '77px' : '36px'} />
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '22px' : '11px',
                                color: blue,
                                fontWeight: '700',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >Kano</Typography>
                        </Stack>
                    </Paper>
                    <Paper sx={paperStyle} elevation={4}>
                    <Stack spacing={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '15px' : '8px',
                                color: blue,
                                fontWeight: '600',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >Guest</Typography>
                            <Capacity width={isLargeScreen ? '77px' : '36px'} height={isLargeScreen ? '77px' : '36px'} />
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '22px' : '11px',
                                color: blue,
                                fontWeight: '700',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >400</Typography>
                        </Stack>
                    </Paper>
                </Stack>
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={isLargeScreen ? 5 : 4}>
                    <Paper sx={paperStyle} elevation={4}>
                    <Stack spacing={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '15px' : '8px',
                                color: blue,
                                fontWeight: '600',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >Date</Typography>
                            <Calender width={isLargeScreen ? '77px' : '36px'} height={isLargeScreen ? '77px' : '36px'} />
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '20px' : '11px',
                                color: blue,
                                fontWeight: '700',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >5th March 2024 {'\n'} 12:00pm</Typography>
                        </Stack>
                    </Paper>
                    <Paper sx={paperStyle} elevation={4}>
                    <Stack spacing={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '15px' : '8px',
                                color: blue,
                                fontWeight: '600',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >Color</Typography>
                            <Color width={isLargeScreen ? '77px' : '36px'} height={isLargeScreen ? '77px' : '36px'} />
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                fontSize: isLargeScreen ? '22px' : '11px',
                                color: blue,
                                fontWeight: '700',
                                letterSpacing: '1%',
                                textAlign: 'center',
                              }}
                            >Royal Blue</Typography>
                        </Stack>
                    </Paper>
                </Stack>
            </Stack>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                <ContinueBtn />
            </div>
        </Container>
    </Container>
  )
}

export default Confirm