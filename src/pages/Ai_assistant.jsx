import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Stack, Typography } from '@mui/material';
import Back_Avater from '../component/Back_Avater';
import { ReactComponent as Illustration } from '../assets/svg/Robot face-pana (1).svg';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import ContinueBtn from '../component/continueBtn';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Ai_assistant = () => {
    const navigate = useNavigate()
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
    const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024  

    const onContinue = () => {
      navigate('/AiAssistant/stepper')
    }

  return (
    <>
    <Helmet>
      <title>AI Assitant</title>
    </Helmet>
    <Container maxWidth="none" sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <Back_Avater onClick={() => navigate('/choose')} />
        <Container maxWidth="none" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Stack  sx={{justifyContent: 'space-around', alignItems: 'center'}} spacing={isDesktopScreen ? 10 : 4} direction={isDesktopScreen ? 'row' : 'column'}>
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
                >Welcome To My Taro Ai Assistant
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px'}}>
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
                  >With few questions, we will be able to organize your event base on your given details
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
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

export default Ai_assistant