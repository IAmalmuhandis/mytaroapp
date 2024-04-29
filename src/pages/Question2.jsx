import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Stack, Typography } from '@mui/material';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Honeymoon-pana 1.svg';

const Question2 = ({onNext}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024;
  return (
    <Container maxWidth="none">
        <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: isLargeScreen ? '44px' : '18px',
              lineHeight: isLargeScreen ? '85px' : '20px',
              color: blue,
              fontWeight: '800',
              textAlign: isLargeScreen ? 'center' : 'left',
            }}
            mt={3}
            ml={-7}
          >
            Please Answer the Questions!
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: isLargeScreen ? '32px' : '15px',
              lineHeight: isLargeScreen ? '40px' : '20px',
              color: blue,
              fontWeight: '700',
              letterSpacing: '1%',
              textAlign: isLargeScreen ? 'center' : 'left',
            }}
            mt={2}
            ml={-7}
          >
            How many guest are you expecting to attend?
          </Typography>
          <div
            style={
              isLargeScreen
                ? { marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }
                : { marginTop: '5px' }
            }
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '193px' : '112px'} height={isLargeScreen || isSmallLaptop ? '37px' : '23px'} />
          </div>
          <Stack mt={-3} sx={{ alignItems: 'center' }} spacing={isLaptopScreen || isDesktopScreen ? 30 : 5} direction={isLaptopScreen || isDesktopScreen ? 'row' : 'column'}>
             <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 509 : 335} />
          </Stack>
    </Container>
  )
}

export default Question2