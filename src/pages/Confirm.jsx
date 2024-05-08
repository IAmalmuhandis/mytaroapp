import { Container, Paper, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back_Avater from '../component/Back_Avater';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  return (
    <Container maxWidth="none" sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <Back_Avater onClick={handleBack} />
        <Container maxWidth="none" sx={{minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
            <Stack direction={isLargeScreen ? 'row' : 'column'}>
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={3}>
                    <Paper  elevation={4}>1 paper</Paper>
                    <Paper elevation={4}>1 paper</Paper>
                </Stack>
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={3}>
                    <Paper elevation={4}>2 paper</Paper>
                    <Paper elevation={4}>2 paper</Paper>
                </Stack>
                <Stack direction={isLargeScreen ? 'column' : 'row'} spacing={3}>
                    <Paper elevation={4}>3 paper</Paper>
                    <Paper elevation={4}>3 paper</Paper>
                </Stack>
            </Stack>
        </Container>
    </Container>
  )
}

export default Confirm