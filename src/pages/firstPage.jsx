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
    <Container>
      <Stack spacing={2} direction="row" mx={1} mt={7} justifyContent='space-between'>
        <Logo />
        <SigninBtn /> 
      </Stack>
      <Container sx={{marginTop: '50px'}}>
        <Typography sx={{fontFamily: 'Montserrat', fontSize: '21px', lineHeight: '40px', color: blue, fontWeight: '800', letterSpacing: '1%'}}>What Type Of Event Are You Planning?</Typography>
      </Container>
      <Container sx={{paddingLeft: '49px'}}>
        <Arrow />
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-40px' }}>
        <Anniversary />
      </div>
      <Stack spacing={2} direction="column" mt={-3} alignItems="center">
        <BlueBtn title='Wedding' />
        <BlueBtn title='Conference' />
        <BlueBtn title='Birthday' />
      </Stack>
      <Typography sx={{marginTop: '10px', color: blue, textAlign: 'center', fontWeight: '800', fontFamily: 'Montserrat', fontSize: '9px', lineHeight: '28.4px', letterSpacing: '1%'}}>Did'nt find answer?</Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
      <TextField
        sx={{
            backgroundColor: '#E7E7E7',
            borderRadius: '20.29px',
            fontWeight: '8.77px',
            '& .MuiOutlinedInput-root': {
                height: '35px', // Set the height
                width: '194px',
                fontSize: '12px',
                '& fieldset': {
                    border: 'none', // Remove the border
                },
            },
        }}
        placeholder="Type something.........."
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon  fontSize='12px'/>
                </InputAdornment>
            ),
        }}
    />
       </div>
    </Container>
  );
}

export default FirstPage;
