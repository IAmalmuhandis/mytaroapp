import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Illustration } from '../assets/svg/successful.svg';
import { blue } from '../utils/colors';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../assets/css/btnAnimation.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Confetti from 'react-confetti'; 
import { useWindowSize } from 'react-use'; 

const Btn = (props) => {
  return (
    <button className='btnAnimation lg:basis-1/2 w-4/5 lg:w-0 h-12 md:h-16 rounded-full lg:p-5 bg-transparent border-[#E41D24] border-2 hover:text-white hover:bg-[#E41D24]'>
      {props.title}
      <ChevronRightIcon />
    </button>
  );
};

const SuccessfullPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;

  const { width, height } = useWindowSize(); 

  const [showConfetti, setShowConfetti] = useState(true);

  // Hide confetti after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Successful</title>
      </Helmet>
      <div className='w-full h-screen flex justify-center items-center font-[Montserrat] relative'>
        {showConfetti && <Confetti  width={width-10} height={height-10} />}
        <div className='flex flex-col justify-center items-center gap-6 md:gap-7'>
          <div className='flex justify-center items-center'>
            <Illustration width={isLargeScreen ? 450 : 180} height={isLargeScreen ? 300 : 170} />
          </div>
          <p style={{ color: blue }} className='font-[700] text-2xl md:text-3xl lg:text-4xl text-center tracking-wide'>
            Payment Successful!!!
          </p>
          <div className='flex lg:flex-row flex-col lg:gap-5 gap-4 w-[120%] justify-center items-center'>
            <Btn title='Done' />
            <Btn title='Share' />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfullPage;

