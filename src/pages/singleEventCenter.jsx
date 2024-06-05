import React from 'react';
import Image from '../assets/images/Screenshot (28) 1 (1).png';
import '../assets/css/singleEventCenter.css';
import { ReactComponent as Logo } from '../assets/logo/Logo2.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Star } from '../assets/svg/star.svg';
import { ReactComponent as People } from '../assets/svg/people2.svg';
import { ReactComponent as Capacity } from '../assets/svg/buildings-2.svg';
import { ReactComponent as Vector } from '../assets/svg/Vector.svg';
import { ReactComponent as Vector2 } from '../assets/svg/Vector (1).svg';
import { ReactComponent as Vector3 } from '../assets/svg/Vector (2).svg';
import { Paper } from '@mui/material';
import { blue } from '../utils/colors';

const SingleEventCenter = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;

  return (
    <div className='container overflow-x-hidden w-screen h-screen'>
    <div className="relative w-full h-[40vh] m-auto md:h-[50vh] lg:h-[70vh]">
      <img
        src={Image}
        alt="Event"
        className="w-full h-full object-cover lg:object-fill"
      />
      <div className="absolute inset-0 gradient-opacity flex flex-row items-start justify-start rounded-br-3xl p-5 pt-8">
        <div className="flex flex-col  gap-2 md:gap-10">
          <Logo width={isLargeScreen ? 187 : 65} height={isLargeScreen ? 109 : 65} />
          <div className="flex flex-col items-start justify-center gap-4 md:gap-7 p-2 lg:p-5">
            <h1 className="text-white text-2xl md:text-5xl font-[700] font-[Montserrat] tracking-wide">Afficient Event Center</h1>
            <p className="text-white text-xl md:text-3xl font-[400] font-[Montserrat] leading-6">
              Check all the Information <br /> about this venue
            </p>
            <div className="flex justify-start">
              <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:block hidden top-[70%] left-56 w-full lg:w-1/2 h-fit">
          <Vector3 width={150} height={120} />
      </div>
      <div className="absolute lg:block hidden top-[5%] left-96 w-full lg:w-1/2 h-fit">
          <Vector2 width={200} height={150} />
      </div>
      <div className="absolute top-[20%] left-1/2 lg:left-1/2  w-full lg:w-1/2 h-fit">
          <Vector width={isLargeScreen ? 553 : 200} height={isLargeScreen ? 353 : 200} />
      </div>
      <div className="absolute flex md:flex-row flex-row gap-1 md:justify-around md:top-[85%] top-[105%] left-0 lg:left-1/4  w-full lg:w-1/2 h-fit">
          <Paper elevation={0} className='flex flex-col md:basis-1/4 basis-1/3 md:gap-1 gap-2 justify-center md:p-5 p-1 drop-shadow-2xl rounded-xl'>
              <p style={{color: blue}} className='md:text-sm text-xs font-[Montserrat] font-[600] text-center'>Experience</p>
              <div className='flex justify-center items-center'>
                  <Star width={isLargeScreen ? 83 : 38} height={isLargeScreen ? 83 : 38} />
              </div>
              <p style={{color: blue}} className='text-center md:text-base text-sm font-[Montserrat] font-[600]'>16</p>
              <p style={{color: blue}} className='text-center md:text-sm text-xs font-[Montserrat] font-[600]'>Years</p>    
          </Paper>
          <Paper elevation={0} className='flex flex-col md:basis-1/4 basis-1/3 md:gap-1 gap-2 justify-center p-5 drop-shadow-2xl rounded-xl'>
              <p className='md:text-sm text-xs  font-[Montserrat] font-[600] text-center'>Client Served</p>
              <div className='flex justify-center items-center'>
                  <People width={isLargeScreen ? 83 : 38} height={isLargeScreen ? 83 : 38} />
              </div>
              <p style={{color: blue}} className='text-center md:text-base text-sm font-[Montserrat] font-[600]'>1000+</p>
              <p style={{color: blue}} className='text-center md:text-sm text-xs font-[Montserrat] font-[600]'>Happy Clients</p>         
          </Paper>
          <Paper elevation={0} className='flex flex-col md:basis-1/4 basis-1/3 md:gap-1 gap-2 justify-center p-5 drop-shadow-2xl rounded-xl'>
              <p className='md:text-sm text-xs  font-[Montserrat] font-[600] text-center'>Capacity</p>
              <div className='flex justify-center items-center'>
                  <Capacity width={isLargeScreen ? 83 : 38} height={isLargeScreen ? 83 : 38} />
              </div>
              <p style={{color: blue}} className='text-center md:text-base text-sm font-[Montserrat] font-[600]'>300</p>
              <p style={{color: blue}} className='text-center md:text-sm text-xs font-[Montserrat] font-[600]'>Max</p>         
          </Paper>
      </div>
    </div>
    </div>
  );
}

export default SingleEventCenter;