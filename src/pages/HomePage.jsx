import React from 'react';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Anniversary } from '../assets/svg/Work anniversary-pana.svg';
import Stack from '@mui/material/Stack';
import { Container, Typography, InputAdornment, TextField, Grid } from '@mui/material';
import { blue } from '../utils/colors';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import Logo_Btn from '../component/topNavigation/signIn_Logo';
import { Helmet } from 'react-helmet';
import BlueBtn from '../component/buttons/blueBtn';

const FirstPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090

  const onWeddingClick = () =>{
    navigate('/choose')
  }

  return (
    <>
    <Helmet>
      <title>MyTaroApp: Plan your dream event with just a few clicks</title>
    </Helmet>
    <Container className='pb-3 flex flex-col justify-between' maxWidth="none">
      <Logo_Btn />
      <Container>
        <Typography
          fontFamily='Montserrat'
          fontSize={{lg: 40, md: 35, xs: 15, xl: 45, sm: 25}}
          color={blue}
          fontWeight={800}
          textAlign='center'
          mt={3}
          lineHeight={{xl: 1, lg: 1, md: 2, sm: 2, xs: 2}}
          >What Type Of Event Are You Planning?
        </Typography>
        <div className='flex justify-center mt-1'>
          <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
        </div>
      </Container>
      <Grid container justifyContent="space-around" mt={isLargeScreen ? -12 : 0}>
        <div className='flex justify-center'>
          <Anniversary width={isLargeScreen ? 500 : 283} height={isLargeScreen ? 530 : 293}/>
        </div>
        <Stack className='sm:mb-3 items-center justify-center flex-col' spacing={2} mt={{xl: 4, lg: 3, md: 2, sm: 0, xs: 0}}>  
          <Stack spacing={isLargeScreen ? 4 : 2} direction={isLargeScreen ? 'row' : 'column'}>
            <BlueBtn title='Wedding' onClick={onWeddingClick} />
            <BlueBtn title='Conference' />
          </Stack>
          <Stack spacing={isLargeScreen ? 4 : 2} direction={isLargeScreen ? 'row' : 'column'}>
              <BlueBtn title='Birthday' />
              <BlueBtn title='Concert' />
          </Stack>
          {/* <Stack spacing={1} direction="column" alignItems="center" mt={5}>
            <Typography sx={{ color: blue, textAlign: 'center', fontWeight: '800', fontFamily: 'Montserrat', fontSize: isLargeScreen ? '22.29px' : '9px', lineHeight: '28.4px', letterSpacing: '1%' }}>Didn't find the answer?</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
            sx={typeSomtingStyle}
            placeholder="Type something.........."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon   sx={{fontSize: isLargeScreen ? '25px' : '12px'}}/>
                </InputAdornment>
              ),
            }}
          />
          </div>
          </Stack> */}
      </Stack>
    </Grid>
    </Container>
    </>
  );
}

export default FirstPage;
