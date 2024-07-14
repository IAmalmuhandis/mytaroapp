import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue, red } from '../../utils/colors';
import { Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/btnAnimation.css';

const customTheme = createTheme({
    palette: {
      primary: {
        main: red, 
      },
    },
});

export default function MediaCard({img, title, experience, capacity, rating, nav}) {
  const navigate = useNavigate()
  
  const onClick = () =>{
    navigate(nav)
  }

  return (
    <Card className='w-full'>
       {
        img ? (
            <CardMedia
                className='w-full md:w-80 h-56 object-cover'              
                image={img}
          />  
        ) : (
            <Skeleton variant="rectangular" className='w-full md:w-80' height={200} />
        )
       } 
      <CardContent>
        <Typography 
            gutterBottom  
            component="div"
            color={blue}
            fontFamily='Montserrat'
            fontWeight={700}
            fontSize={{xl: 15, lg: 15, md: 13, sm: 13, xs: 13 }}
            lineHeight={1}
            mt={1}
        >
          {title}
        </Typography>
        <Typography mt={1} fontFamily='Montserrat' variant="body2" color="text.secondary">
            {experience}
        </Typography>
        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
          {capacity}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction='row' width='100%' justifyContent='space-between'>
            <Rating defaultValue={rating} readOnly />
            <ThemeProvider theme={customTheme}>
                <Button className='btnAnimation' size='small' variant='contained' onClick={onClick}>View</Button>
            </ThemeProvider>
        </Stack>
      </CardActions>
    </Card>
  );
}
