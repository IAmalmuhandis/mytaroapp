import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Back_Avater from '../component/topNavigation/Back_Avater'
import { ReactComponent as Illustration } from '../assets/svg/Payment Information-bro.svg';
import { blue, red } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NigeriaNaira } from '../utils/helpers';
import ContinueBtn from '../component/buttons/continueBtn';

const BankTransfer = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen

  return (
    <>
    <Helmet>
      <title>Bank Transfer</title>
    </Helmet>
    <div className='w-full relative px-5 top-0'>
      <Back_Avater onClick={() => navigate('/paymentMethod')} />
    </div>
    <div className='w-full h-[80vh] lg:h-fit max-w-full mt-0 p-4 flex justify-center items-center overflow-hidden'>
      <div className=' mt-2 lg:mt-0 w-full'>
        <div className='flex flex-col gap-2'>
          <p style={{color:blue}} className='font-[Montserrat] font-[800] text-center mt-1 text-3xl md:text-4xl lg:text-5xl'>Add Debit Card</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px'}}>
            <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
          </div>
          <p style={{color:blue}} className='font-[Montserrat] font-[700] text-center mt-1 text-2xl md:text-3xl lg:text-4xl'>{NigeriaNaira.format(500000000)}</p>
        </div>
        <div className='w-full flex flex-col lg:flex-row-reverse md:flex-col md:gap-0 justify-around items-center px-5'>
            <div className='hidden lg:block'>
               <Illustration width={isLargeScreen ? 600 : 281} height={isLargeScreen ? 470 : 270} />
            </div>
            <div className='flex flex-col w-full h-full gap-4 md:gap-8 lg:mt-0- mt-16'>
             <table className='w-full'>
              <tr className='m-4'>
                <td><p style={{color: red}} className='text-lg md:text-xl lg:text-2xl font-[600]'>Account Number:</p></td>
                <td><p className='text-lg md:text-xl lg:text-2xl tracking-widest'>4567888990</p></td>
              </tr>
              <tr className='m-4'>
                <td><p style={{color: red}} className='text-lg md:text-xl lg:text-2xl font-[600]'>Bank Name:</p></td>
                <td><p className='text-lg md:text-xl lg:text-2xl tracking-widest'>Paypal</p></td>
              </tr>
              <tr className=''>
                <td><p style={{color: red}} className='text-lg md:text-xl lg:text-2xl font-[600]'>Account Name:</p></td>
                <td><p className='text-lg md:text-xl lg:text-2xl tracking-widest'>Kabeer Baffa</p></td>
              </tr>
              </table>
              <div className='w-full flex justify-center items-center mt-10 lg:mt-4'>
                <ContinueBtn onClick={() => navigate('/successfull')} />
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BankTransfer
