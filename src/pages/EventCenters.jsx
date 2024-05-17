import React from 'react'
import { Helmet } from 'react-helmet'
import Back_Avater from '../component/Back_Avater'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { blue } from '../utils/colors'
import MediaCard from '../component/card'
import Img1 from '../assets/images/Wedding tables decorated with flowers.png'
import Img2 from '../assets/images/Screenshot (27) 1.png'
import Img3 from '../assets/images/Screenshot (28) 1.png'
import Img4 from '../assets/images/White chiavari chairs for guests, ceremonial wedding arch on the decorated for the wedding ceremony.png'
import Img5 from '../assets/images/Screenshot (25) 1.png'

const EventCenters = () => {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
        <title>Select Event Center</title>
    </Helmet>
    <Container maxWidth="none" sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Back_Avater onClick={() => navigate('/choose')} />
        <Grid>
            <Typography 
                color={blue}
                fontWeight={800}
                fontSize={{xl: 30, lg: 30, md: 20, xs: 15, sm: 15}}
                textAlign='center'
                lineHeight={2}
                fontFamily='Montserrat'
            >
                Choose Your Preffered Event Venue
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
                Click to view Venue Information
            </Typography>
        </Grid>
        <Grid container mt={2} spacing={2} justifyContent='center'>
            <Grid item>
                <MediaCard img={Img5} title='Amani Event Center' experience='4 years of experience' capacity='Up to 1000 capacity' rating={5} />
            </Grid>
            <Grid item>
                <MediaCard img={Img2} title='Afficienct Event Center' experience='16 years of experience' capacity='Up to 3000 capacity' rating={3} />
            </Grid>
            <Grid item>
                <MediaCard img={Img3} title='Fabs Event Center' experience='5 years of experience' capacity='Up to 700 capacity' rating={4} />
            </Grid>
            <Grid item>
                <MediaCard img={Img4} title='Fele Event Center' experience='6 years of experience' capacity='Up to 700 capacity' rating={5} />
            </Grid>
            <Grid item>
                <MediaCard img={Img1} title='Meena Event Center' experience='9 years of experience' capacity='Up to 1000 capacity' rating={4} />
            </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default EventCenters