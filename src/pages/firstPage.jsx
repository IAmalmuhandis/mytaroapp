import React from 'react'
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';
import Stack from '@mui/material/Stack';
import SigninBtn from '../component/signIn_signoutBtn';

const FirstPage = () => {
  return (
    <Stack spacing={2} direction="row" mx={1} mt={7} justifyContent='space-between'>
        <Logo />
        <SigninBtn />
    </Stack>
  )
}

export default FirstPage