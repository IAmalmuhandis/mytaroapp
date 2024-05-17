import React from 'react';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Anniversary } from '../assets/svg/Work anniversary-pana.svg';
import Stack from '@mui/material/Stack';
import { Container, Typography, InputAdornment, TextField, Grid } from '@mui/material';
import { blue } from '../utils/colors';
import BlueBtn from '../component/blueBtn';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import Logo_Btn from '../component/signIn_Logo';
import { Helmet } from 'react-helmet';

const FirstPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090

  const typeSomtingStyle = {
    backgroundColor: '#E7E7E7',
    borderRadius: isLargeScreen ? '60px' : '20.29px',
    fontWeight: '8.77px',
    '& .MuiOutlinedInput-root': {
      height: isLargeScreen ? '70px' : '35px', 
      width: isLargeScreen ? '490px' : '194px',
      fontSize: isLargeScreen ? '18px' : '12px',
      '& fieldset': {
        border: 'none', 
      },
    },
  }

  const onWeddingClick = () =>{
    navigate('/choose')
  }

  return (
    <>
    <Helmet>
      <title>MyTaroApp: Plan your dream event with few clicks</title>
    </Helmet>
    <Container maxWidth="none" sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
      <Logo_Btn />
      <Container>
        <Typography sx={{ 
          fontFamily: 'Montserrat', 
          fontSize: isLargeScreen ? '44px' : '22px',  
          color: blue, 
          fontWeight: '800', 
          letterSpacing: '1%', 
          textAlign: 'center' 
          }}
          mt={3}
          lineHeight={{xl: 1, lg: 1, md: 2, sm: 2, xs: 2}}
          >What Type Of Event Are You Planning?
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px'}}>
          <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
        </div>
      </Container>
      <Grid container justifyContent="space-around" alignItems='flex-end' mt={isLargeScreen ? -12 : 0}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Anniversary width={isLargeScreen ? 500 : 283} height={isLargeScreen ? 530 : 293}/>
        </div>
        <Stack spacing={2} direction="column" mt={{xl: 0, lg: 0, md: -5, sm: 0, xs: 0}}>
          <Grid alignItems='center'>  
          <Stack spacing={isLargeScreen ? 4 : 2} direction={isLargeScreen ? 'row' : 'column'}>
            <BlueBtn title='Wedding' onClick={onWeddingClick} />
            <BlueBtn title='Conference' />
          </Stack>
          </Grid>
          <Grid alignItems='center'>
          <Stack spacing={isLargeScreen ? 4 : 2} direction={isLargeScreen ? 'row' : 'column'}>
              <BlueBtn title='Birthday' />
              <BlueBtn title='Concert' />
          </Stack>
          <Stack spacing={1} direction="column" alignItems="center" mt={5}>
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
          </Stack>
        </Grid>
      </Stack>
    </Grid>
    </Container>
    </>
  );
}

export default FirstPage;
