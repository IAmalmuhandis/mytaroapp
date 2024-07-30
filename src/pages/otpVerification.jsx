import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Back_Avater from '../component/topNavigation/Back_Avater'
import { ReactComponent as Illustration } from '../assets/svg/Messages-rafiki 2.svg';
import { blue, grey } from '../utils/colors';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ContinueBtn from '../component/buttons/continueBtn';

const OtpVerification = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen

  const handleCardPaymentClick = () =>{
    navigate('/cardPayment')
  }

  return (
    <>
    <Helmet>
      <title>Card Payment</title>
    </Helmet>
    <div className='w-full relative px-5 top-0'>
      <Back_Avater onClick={() => navigate('/cardPayment')} />
    </div>
    <div className='w-full h-[80vh] lg:h-fit max-w-full mt-8 p-4 flex justify-center items-center overflow-hidden font-[Montserrat]'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-center'>
            <Illustration width={isLargeScreen ? 450 : 180} height={isLargeScreen ? 300 : 170} />
        </div>
        <h1 style={{color: blue}} className='text-center lg:-mt-5 text-2xl md:text-3xl lg:text-4xl tracking-wide font-[500]'>OTP Verification</h1>
        <p style={{color: blue}} className='text-center text-lg md:text-xl lg:text-2xl font-[400]'>An OTP has been sent to this number +23490*****344</p>
        <div className='flex w-full h-fit justify-center items-center'>
            <input type='number' style={{backgroundColor: grey, outlineColor: blue, color: blue}} className='h-10 md:h-20 w-[60%] rounded-full lg:text-2xl tracking-widest lg:p-10 md:p-8 p-8' />
        </div>
        <div className='flex mt-5 items-center justify-center'>
            <ContinueBtn onClick={() => navigate('/successfull')} />
        </div>
      </div>
    </div>
    </>
  )
}

export default OtpVerification
