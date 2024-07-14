import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { blue } from '../../utils/colors';
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../../assets/svg/Address-cuate 1.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../assets/css/btnAnimation.css'

const customTheme = createTheme({
    palette: {
      primary: {
        main: blue, 
      },
    },
});

const Btn = (props) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090
  const btnStyle = {
      width: isLargeScreen ? '230px' : '140px', 
      height: isLargeScreen ? '65px'  : '45px', 
      borderRadius: isLargeScreen ? '27px' : '14px', 
      padding: '5.6px', 
      fontSize: isLargeScreen ? '28px' : '16px',
      textTransform: 'none',
      backgroundColor: blue,
      fontFamily: 'Montserrat',
      fontWeight: '500',
      lineHeight: '19.5px',
  }
  return (
      <ThemeProvider theme={customTheme}>
        <Button className='btnAnimation' color='primary' disableElevation sx={btnStyle} variant="contained" onClick={props.onClick}>{props.title}</Button>
      </ThemeProvider>
  )
}

const Question3 = ({onNext}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024;

  const handleNext = (location) => {
    localStorage.setItem('location', JSON.stringify(location))
    onNext();
  };

  return (
    <Container maxWidth="none" justifyContent='center'>
       <Typography
            mt={3}
            fontFamily='Montserrat'
            fontSize={{xl: 30, lg: 30, md: 30, sm: 30, xs: 15 }}
            lineHeight={2}
            color={blue}
            fontWeight={800}
            textAlign={{xl: 'center', lg: 'center', md: 'center', xs: 'left', sm: 'center'}}
            ml={{sm: -5, xs: -5}}
          >
            Please Answer the Questions!
          </Typography>
          <Typography
            mt={2}
            fontFamily='Montserrat'
            fontSize={{xl: 20, lg: 20, md: 20, sm: 20, xs: 12 }}
            lineHeight={2}
            color={blue}
            fontWeight={700}
            textAlign={{xl: 'center', lg: 'center', md: 'center', xs: 'left', sm: 'center'}}
            ml={{sm: -5, xs: -5}}
          >
            What is the preferred location?
          </Typography>
          <div className='mt-1 flex items-center justify-start lg:justify-center'>
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
          <Grid className='pb-4' container>
          <Stack  sx={{width: '100%'}} alignItems='center' justifyContent='center' mt={0} spacing={{xl: 30, lg: 15, md: 2, xs: 2, sm: 2}} direction={{xl:'row', lg: 'row', md: 'column', xs: 'column', sm: 'column'}}>
             <Stack>
                <Illustration width={isLargeScreen || isSmallLaptop ? 520 : 335} height={isLargeScreen ? 390 : 335} />
             </Stack>
             <Stack spacing={3}>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Kano' onClick={() => handleNext('Kano')} />
                    <Btn title='Kaduna' onClick={() => handleNext('Kaduna')} />    
                </Stack>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Abuja' onClick={() => handleNext('Abuja')} />
                    <Btn title='Katsina' onClick={() => handleNext('Katsina')} />    
                </Stack>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Jigawa' onClick={() => handleNext('Jigawa')} />
                    <Btn title='Bauchi' onClick={() => handleNext('Bauchi')} />    
                </Stack>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Kebbi' onClick={() => handleNext('Kebbi')} />
                    <Btn title='Borno' onClick={() => handleNext('Borno')} />    
                </Stack>
             </Stack>  
          </Stack>
          </Grid>
    </Container>
  )
}

export default Question3