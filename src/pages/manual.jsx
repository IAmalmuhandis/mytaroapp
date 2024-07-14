import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Stack, Typography } from '@mui/material';
import Back_Avater from '../component/topNavigation/Back_Avater';
import { ReactComponent as Illustration } from '../assets/svg/Next option-pana 2.svg';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import ContinueBtn from '../component/buttons/continueBtn';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Manual = () => {
    const navigate = useNavigate()
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
    const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024  

    const onContinue = () => {
      navigate('/event_centers')
    }

  return (
    <>
    <Helmet>
      <title>Manual Organizing</title>
    </Helmet>
    <Container maxWidth="none" className='min-h-[80vh] flex flex-col justify-center overflow-hidden'>
        <Back_Avater onClick={() => navigate('/choose')} />
        <Container maxWidth="none" className='flex flex-col justify-center items-center'>
        <Stack className='justify-center items-center' spacing={isDesktopScreen ? 10 : 4} direction={isDesktopScreen ? 'row' : 'column'}>
            <Illustration width={isLargeScreen ? 700 : 281} height={isLargeScreen ? 600 : 270} />
            <Stack spacing={3}>
              <Typography
                mt={3}
                fontFamily='Montserrat'
                fontSize={{xl: 35, lg: 35, md: 35, sm: 30, xs: 25 }}
                color={blue}
                fontWeight={800}
                lineHeight={1.5}
                textAlign='center'
                >Plan Your Dream Event With Your Fingers
              </Typography>
              <div className='flex justify-center mt-0'>
                <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
              </div>
              <Stack spacing={5}>
                <Typography sx={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: isLargeScreen ? '28px' : '16px', 
                  lineHeight: isLargeScreen ? '56px' : '30px', 
                  color: blue, 
                  fontWeight: '600', 
                  letterSpacing: '1%', 
                  }}
                  mt={0}
                  >With Taro manual event organising, you will be able to organise your event with your prefered data
                </Typography>
                <div  className='flex justify-center pb-4'>
                  <ContinueBtn onClick={onContinue} color={blue}/>
                </div>
              </Stack>
            </Stack>
         </Stack>
        </Container>
    </Container>
    </>
  )
}

export default Manual