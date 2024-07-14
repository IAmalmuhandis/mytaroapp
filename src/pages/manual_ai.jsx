import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo_Btn from '../component/topNavigation/signIn_Logo';
import { ReactComponent as Question } from '../assets/svg/question.svg';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import BlueBtn from '../component/buttons/blueBtn';
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

  const onManualPress = () =>{
    navigate('/Manual')
  }

  return (
    <>
    <Helmet>
      <title>Select</title>
    </Helmet>
    <Container maxWidth="none" className='flex flex-col justify-between'>
        <Logo_Btn />
        <Container maxWidth="none" className='h-[60vh] flex flex-col justify-center items-center pb-4'>
            <Stack mt={isLargeScreen ? 0 : 15} className='justify-center items-center' spacing={5}>
                <Stack spacing={2} className='justify-center items-center'>
                    <Question width={isLargeScreen ? '246px' : '155px'} height={isLargeScreen ? '188px' : '118px'} />
                    <Typography
                      fontFamily='Montserrat'
                      fontSize={{lg: 40, md: 35, xs: 15, xl: 45, sm: 25}}
                      color={blue}
                      fontWeight={800}
                      textAlign='center'
                      mt={3}
                      lineHeight={{xl: 1, lg: 1, md: 2, sm: 2, xs: 2}}
                      >How Do You Want To Plan Your Event?
                    </Typography>
                    <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
                </Stack>
                <Stack className='pb-4' spacing={2} direction={isLargeScreen ? 'row' : 'column'}>
                    <BlueBtn title='Manually' onClick={onManualPress} />
                    <BlueBtn title='Ai Assistant' onClick={onAiPress} />
                </Stack>
            </Stack>
        </Container>
    </Container>
    </>
  )
}

export default Manual_Ai
