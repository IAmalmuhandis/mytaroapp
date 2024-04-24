import React from 'react';
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Anniversary } from '../assets/svg/Work anniversary-pana.svg';
import Stack from '@mui/material/Stack';
import SigninBtn from '../component/signIn_signoutBtn';
import { Container, Typography, InputAdornment, TextField, Grid } from '@mui/material';
import { blue } from '../utils/colors';
import BlueBtn from '../component/blueBtn';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const FirstPage = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeScreen = isTablet || isLaptopScreen 
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
  return (
    <Container maxWidth="none" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Stack spacing={2} direction="row" mx={1} mt={{ xs: 3, sm: 5, md: 7 }} justifyContent='space-between'>
        <Logo width={isLargeScreen ? 187 : 57} height={isLargeScreen ? 109 : 57}/>
        <SigninBtn width={isLargeScreen ? '200px' : '120px'} height={isLargeScreen ? '50px' : '32px'} fontSz={isLargeScreen ? '18px' : '9px'}/> 
      </Stack>
      <Container>
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
          >What Type Of Event Are You Planning?
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px'}}>
          <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
        </div>
      </Container>
      <Grid container justifyContent="space-around" mt={isLargeScreen ? -12 : 0}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Anniversary width={isLargeScreen ? 500 : 283} height={isLargeScreen ? 639 : 293}/>
        </div>
        <Stack spacing={2} direction="column" mt={isLargeScreen && 20 }>
          <Grid alignItems='center'>
          <Stack spacing={isLargeScreen ? 4 : 2} direction={isLargeScreen ? 'row' : 'column'}>
            <BlueBtn width={isLargeScreen ? '300px' : '200px'} height={isLargeScreen ? '70px'  : '46px'} title='Wedding' />
            <BlueBtn width={isLargeScreen ? '300px' : '200px'} height={isLargeScreen ? '70px'  : '46px'}  title='Conference' />
          </Stack>
          </Grid>
          <Grid alignItems='center'>
          <Stack spacing={isLargeScreen ? 4 : 2} direction={isLargeScreen ? 'row' : 'column'}>
              <BlueBtn width={isLargeScreen ? '300px' : '200px'} height={isLargeScreen ? '70px'  : '46px'} title='Birthday' />
              <BlueBtn width={isLargeScreen ? '300px' : '200px'} height={isLargeScreen ? '70px'  : '46px'} title='Concert' />
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
  );
}

export default FirstPage;