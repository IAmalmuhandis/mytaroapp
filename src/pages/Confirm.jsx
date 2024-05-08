import { Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back_Avater from '../component/Back_Avater';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { blue } from '../utils/colors';


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
        width: isLargeScreen ? '200px' : '150px',
        height: isLargeScreen ? '180px' : '150px'
    }
  return (
    <Container maxWidth="none" sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <Back_Avater onClick={handleBack} />
        <Container maxWidth="none" sx={{minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
            <div>
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
            Please Confirm Your Details!
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'center' }}
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
            </div>
            <Stack mt={2} direction={isLargeScreen ? 'row' : 'column'} spacing={3} sx={{justifyContent: 'center', alignItems: 'center'}}>  
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={3}>
                    <Paper sx={paperStyle} elevation={4}><Typography variant='body2'>paper 1</Typography></Paper>
                    <Paper sx={paperStyle} elevation={4}><Typography variant='body2'>paper 1</Typography></Paper>
                </Stack>
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={3}>
                    <Paper sx={paperStyle} elevation={4}><Typography variant='body2'>paper 2</Typography></Paper>
                    <Paper sx={paperStyle} elevation={4}><Typography variant='body2'>paper 2</Typography></Paper>
                </Stack>
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={3}>
                    <Paper sx={paperStyle} elevation={4}><Typography variant='body2'>paper 3</Typography></Paper>
                    <Paper sx={paperStyle} elevation={4}><Typography variant='body2'>paper 3</Typography></Paper>
                </Stack>
            </Stack>
        </Container>
    </Container>
  )
}

export default Confirm