import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo_Btn from '../component/signIn_Logo';
import { ReactComponent as Question } from '../assets/svg/question.svg';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import BlueBtn from '../component/blueBtn';
import { blue } from '../utils/colors';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Manual_Ai = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024

  const onAiPress = () => {
    navigate('/AiAssistant')
  } 

  return (
    <>
    <Helmet>
      <title>Select</title>
    </Helmet>
    <Container maxWidth="none" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
        <Logo_Btn />
        <Container maxWidth="none" sx={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Stack mt={isLargeScreen ? 0 : 15} sx={{justifyContent: 'center', alignItems: 'center'}} spacing={5}>
                <Stack spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Question width={isLargeScreen ? '246px' : '155px'} height={isLargeScreen ? '188px' : '118px'} />
                    <Typography sx={{ 
                        fontFamily: 'Montserrat', 
                        fontSize: isLargeScreen ? '44px' : '22px', 
                        lineHeight: '40px', 
                        color: blue, 
                        fontWeight: '800', 
                        letterSpacing: '1%', 
                        textAlign: 'center' 
                        }}
                        mt={3}
                        >How Do You Want To Plan Your Event?
                    </Typography>
                    <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
                </Stack>
                <Stack spacing={2} direction={isLargeScreen ? 'row' : 'column'}>
                    <BlueBtn title='Manually' />
                    <BlueBtn title='Ai Assistant' onClick={onAiPress} />
                </Stack>
            </Stack>
        </Container>
    </Container>
    </>
  )
}

export default Manual_Ai
