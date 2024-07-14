import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, MobileTimePicker, StaticDatePicker} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import for theming
import { blue } from '../../utils/colors';
import { Stack } from '@mui/material';
import { getTodayDate } from '../../utils/helpers';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const customTheme = createTheme({
  palette: {
    primary: {
      main: blue, 
    },
  },
});

const CustomActionBar = () =>{
    return(
        <>
        
        </>
    )
}

const DateTimePicker = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  return (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <Stack>
        <StaticDatePicker orientation={isLargeScreen ? 'landscape' : 'portrait'}
          defaultValue={dayjs(getTodayDate())} 
          slots={{
            // Override default <ActionBar /> with a custom one
            actionBar: CustomActionBar,
          }}
        />
        <MobileTimePicker sx={{marginTop: '-20px', border: '10px'}} label='SELECT TIME' defaultValue={dayjs('2022-04-17T17:00')}/>
        </Stack>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DateTimePicker;
