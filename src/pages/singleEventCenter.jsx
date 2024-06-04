import React from 'react';
import Image from '../assets/images/Screenshot (27) 1 (1).png';
import '../assets/css/singleEventCenter.css';
import { ReactComponent as Logo } from '../assets/logo/Logo2.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';

const SingleEventCenter = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[70vh]">
      <img
        src={Image}
        alt="Event"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-opacity flex items-start justify-start rounded-br-3xl p-5 pt-8">
        <div className="flex flex-col gap-7 lg:gap-10">
          <Logo width={isLargeScreen ? 187 : 65} height={isLargeScreen ? 109 : 65} />
          <div className="flex flex-col justify-center gap-7 p-2 lg:p-5">
            <h1 className="text-white text-2xl lg:text-5xl font-[700] font-[Montserrat]">Afficient Event Center</h1>
            <p className="text-white text-xl lg:text-3xl font-[400] font-[Montserrat] leading-6">
              Check all the Information <br /> about this venue
            </p>
            <div className="flex justify-start">
              <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:top-[85%] top-[93%] left-1/4 w-1/2 h-[50px] lg:h-[150px]"></div>
    </div>
  );
}

export default SingleEventCenter;
