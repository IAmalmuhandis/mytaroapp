import React from 'react';
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Anniversary } from '../assets/svg/Work anniversary-pana.svg';
import Stack from '@mui/material/Stack';
import SigninBtn from '../component/signIn_signoutBtn';
import { Container, Typography, InputAdornment, TextField } from '@mui/material';
import { blue } from '../utils/colors';
import BlueBtn from '../component/blueBtn';
import SearchIcon from '@mui/icons-material/Search';

const FirstPage = () => {
  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Stack spacing={2} direction="row" mx={1} mt={{ xs: 3, sm: 5, md: 7 }} justifyContent='space-between'>
        <Logo />
        <SigninBtn /> 
      </Stack>
      <Container>
        <Typography sx={{ 
          fontFamily: 'Montserrat', 
          fontSize: '21px', 
          lineHeight: '40px', 
          color: blue, 
          fontWeight: '800', 
          letterSpacing: '1%', 
          textAlign: 'center' 
          }}
          mt={3}
          >What Type Of Event Are You Planning?
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Arrow />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Anniversary />
        </div>
      </Container>
      <Stack spacing={2} direction="column" mt={-3} alignItems="center">
        <BlueBtn title='Wedding' />
        <BlueBtn title='Conference' />
        <BlueBtn title='Birthday' />
        <BlueBtn title='Concert' />
      </Stack>
      <Stack spacing={2} direction="column" alignItems="center" mt={2} mb={2}>
        <Typography sx={{ color: blue, textAlign: 'center', fontWeight: '800', fontFamily: 'Montserrat', fontSize: '9px', lineHeight: '28.4px', letterSpacing: '1%' }}>Didn't find the answer?</Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            sx={{
              backgroundColor: '#E7E7E7',
              borderRadius: '20.29px',
              fontWeight: '8.77px',
              '& .MuiOutlinedInput-root': {
                height: '35px', 
                width: '194px',
                fontSize: '12px',
                '& fieldset': {
                  border: 'none', 
                },
              },
            }}
            placeholder="Type something.........."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize='12px'/>
                </InputAdornment>
              ),
            }}
          />
        </div>
    </Stack>
    </Container>
  );
}

export default FirstPage;
