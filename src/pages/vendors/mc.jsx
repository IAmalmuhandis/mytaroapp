import React from 'react'
import { Helmet } from 'react-helmet'
import Back_Avater from '../../component/topNavigation/Back_Avater'
import { Container, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { blue } from '../../utils/colors'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MediaCard from '../../component/card/card'
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg';
import Img1 from '../../assets/images/Screenshot (50) 1.png'
import Img2 from '../../assets/images/Screenshot (51) 1.png'


const Mcs = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090

  const eventCentersList = [
    {
        img: Img2,
        title: 'Jonny Black',
        experience: '4 Years Of Experience',
        rating: 5
    },
    {
        img: Img1,
        title: 'Janet Doe',
        experience: '16 Years Of Experience',
        rating: 3
    },
    {
        title: 'Rick Sanchez',
        experience: '5 Years Of Experience',
        rating: 3
    },
    {
        img: Img1,
        title: 'John DOe',
        experience: '6 Years Of Experience',
        rating: 4
    },
    {
        title: 'Mary Smith',
        experience: '6 Years Of Experience',
        rating: 0
    },
    {
        img: Img1,
        title: 'Dj Fele',
        experience: '6 Years Of Experience',
        rating: 4
    },
    {
        img: Img2,
        title: 'Juliana Doe',
        experience: '6 Years Of Experience',
        rating: 4
    }
  ]

  return (
    <>
    <Helmet>
        <title>Select Event Center</title>
    </Helmet>
    <Container maxWidth="none" sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Back_Avater onClick={() => navigate('/Manual/hire_other_service/choose_service')} />
        <Grid>
            <Typography 
                color={blue}
                fontWeight={800}
                fontSize={{xl: 30, lg: 30, md: 20, xs: 15, sm: 15}}
                textAlign='center'
                lineHeight={2}
                fontFamily='Montserrat'
            >
                Choose Your Preffered Master of Ceremony (MC)
            </Typography>
            <Typography
                mt={1} 
                color={blue}
                fontWeight={700}
                fontSize={{xl: 20, lg: 20, md: 15, xs: 12, sm: 12}}
                textAlign='center'
                lineHeight={2}
                fontFamily='Montserrat'
            >
                Click To View MC's Information
            </Typography>
            <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
            </div>
        </Grid>
        <Grid className='w-full px-2 py-4 mx-auto' container mt={2} spacing={2} justifyContent='center'>
            {eventCentersList.map((i, k) =>(
                <Grid className='w-full md:w-fit' item>
                    <MediaCard img={i.img} title={i.title} experience={i.experience} capacity={i.capacity} rating={i.rating} nav='/Manual/dj/single' />
                </Grid>
            ))}
        </Grid>
    </Container>
    </>
  )
}

export default Mcs