import React from 'react';
import Image from '../../assets/images/dj.png';
import '../../assets/css/singleEventCenter.css';
import { ReactComponent as Logo } from '../../assets/logo/Logo2.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg';
import { ReactComponent as Star } from '../../assets/svg/star.svg';
import { ReactComponent as People } from '../../assets/svg/people2.svg';
import { ReactComponent as Vector } from '../../assets/svg/Vector.svg';
import { ReactComponent as Vector2 } from '../../assets/svg/Vector (1).svg';
import { ReactComponent as Vector3 } from '../../assets/svg/Vector (2).svg';
import { ReactComponent as AboutUs } from '../../assets/svg/About us page-cuate 1.svg';
import { ReactComponent as Dj } from '../../assets/svg/DJ boy-pana.svg';
import { ReactComponent as Package } from '../../assets/svg/Heavy box-pana 1.svg';
import { Paper } from '@mui/material';
import { blue } from '../../utils/colors';
import Instagram from '../../component/socialmedia/instagram';
import Facebook from '../../component/socialmedia/facebook';
import Twitter from '../../component/socialmedia/twitter';
import ContinueBtn from '../../component/buttons/continueBtn';
import Image1 from '../../assets/images/person1.png'
import Image2 from '../../assets/images/person2.png'
import Image3 from '../../assets/images/Wedding dinner table set. classy white decor with greenery.png'
import ImageList from '../../component/image/imageList';
import { useNavigate } from 'react-router-dom';

const images = [Image1, Image2, Image3, Image1, Image2, Image3, Image1, Image2, Image3]

const SingleDj = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;

  const navigate = useNavigate()

  const handleContinue = () =>{
    navigate('/Manual/hire_other_service')
  }

  return (
    <div className='container mx-auto max-w-fit overflow-x-hidden w-screen h-fit'>
      <div className="relative w-full h-[40vh] m-auto md:h-[50vh] lg:h-[80vh] rounded-br-[50px]">
        <img
          src={Image}
          alt="Event"
          className="w-full h-full object-cover lg:object-cover lg:object-top"
        />
        <div className="absolute inset-0 gradient-opacity flex flex-row items-start justify-start rounded-br-3xl p-5 pt-8">
          <div className="flex flex-col  gap-2 md:gap-10">
            <Logo width={isLargeScreen ? 187 : 65} height={isLargeScreen ? 109 : 65} />
            <div className="flex flex-col items-start justify-center gap-4 md:gap-7 p-2 lg:p-5">
              <h1 className="text-white text-2xl md:text-5xl font-[700] font-[Montserrat] tracking-wide">Johnny Black</h1>
              <p className="text-white text-xl md:text-3xl font-[400] font-[Montserrat] leading-6">
                Check all the Information <br /> about this DJ
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
        <div className="absolute flex md:flex-row flex-row gap-1 justify-around md:top-[85%] top-[105%] left-0 lg:left-1/4  w-full lg:w-1/2 h-fit">
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
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse w-full h-fit p-5 mt-36 gap justify-around'>
        <div className='basis-1/3 flex justify-center items-center'>
          <AboutUs width={isLargeScreen ? 500 : 300} height={isLargeScreen ? 450 : 270} />
        </div>
        <div style={{color: blue}} className='basis-1/3 flex justify-center items-center flex-col'>
            <h1 className='md:text-2xl text-xl font-[Montserrat] font-[800]'>About Johnny Black</h1>
            <p  className='md:text-xl text-sm text-center font-[Montserrat] font-[400] m-3 leading-loose'>Pioneering Excellence since November 2008, Afficient Event Center have been the conerstone of memorable occations in Kano for over 16 years. As the first event center in the region, we pride our self in offering a diverse range of services to cater for various events and needs. </p>
        </div>
      </div>
      <ImageList images={images} />
      <div style={{color: blue}} className='w-full mx-auto mt-20'>
          <h1 className='text-center -mt-10 text-xl md:text-4xl font-[800] font-[Montserrat]'>Dj's Specification</h1>
          <p className='text-center text-base md:text-lg font-[400] m-4'>Capacity of the venue, service provided, packages of the event center</p>
      </div>
      <div className='flex flex-col md:flex-row-reverse w-full -mt-14 lg:-mt-20 h-fit p-5 justify-around'>
        <div className='basis-1/3 flex justify-center items-center'>
          <Dj width={isLargeScreen ? 500 : 300} height={isLargeScreen ? 450 : 270} />
        </div>
        <div style={{color: blue}} className='basis-1/3 flex justify-center items-center flex-col'>
            <h1 className='md:text-2xl text-xl text-left font-[Montserrat] font-[800]'>Services</h1>
            <p  className='md:text-xl text-sm text-center font-[Montserrat] font-[400] m-3 leading-loose'>DJ and Caterer Recommendation: ensuring your event is accompanied by the finest entertainment and cuisine <br /> <br /> Marriage Preping Services: from hair saloons to counseling programs, diet planning to yoga and gym facilities, we offer comprehensive support for couples embarking on their journey together.</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full h-fit p-5 mt-0 lg:-mt-20 justify-around'>
        <div className='basis-1/3 flex justify-center items-center'>
          <Package width={isLargeScreen ? 500 : 300} height={isLargeScreen ? 450 : 270} />
        </div>
        <div style={{color: blue}} className='basis-1/3 flex justify-center items-center flex-col mt-10'>
            <h1 className='md:text-2xl text-xl font-[Montserrat] font-[800]'>Packages</h1>
            <p  className='md:text-xl text-sm text-center font-[Montserrat] font-[400] m-3 leading-loose'>Standard Package: inclucive of decoration, hall rentals, bouncers, traffic wardens and a police car with officers on standby to ensure the safety and smooth flow of your event.</p>
        </div>
      </div>
      <div style={{color: blue}} className='w-full h-fit p-5'>
          <h1 className='text-center lg:-mt-10 text-xl md:text-4xl font-[800] font-[Montserrat]'>Mission and Vision</h1>
          <p className='text-center text-sm md:text-xl font-[400] font-[Montserrat] mx-auto m-4 md:w-1/2 w-full leading-loose'>At Afficient Event Center, we are commited to transforming your vision into reality, ensuring every moment is infused with elegance, professionalism and unforgettable experience.</p>
          <div className='flex flex-row mt-5 md:gap-10 gap-5 w-full md:w-1/2 mx-auto justify-center'>
            <Instagram />
            <Facebook />
            <Twitter />
          </div>
      </div>
      <div className='flex w-full h-fit justify-center items-center my-10 mt-5'>
          <ContinueBtn onClick={handleContinue} />
      </div>
    </div>
  );
}

export default SingleDj;