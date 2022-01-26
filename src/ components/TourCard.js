import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { ThumbUpAltIcon } from "@mui/icons-material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';



const TourCard = ({ tour }) => {
    return (
        // Grid allows me to put all my components inside a "box" to be Manipulated
        <Grid item xs={3} >
            {/* Paper gives the floating card effect */}
            <Paper elevation={4} >
                <img className='img' src={tour.image}
                    alt='Photo of people in said state'></img>

                <Box paddingX={1} >
                    <Typography variant="h1" component="h4" marginLeft={1} >
                        {tour.name}
                    </Typography>

                    <Box paddingX={1} sx={{
                        display: "flex",
                        alignItems: "center"
                    }} >
                        {/* <ThumbUpAltIcon /> */}
                        <Typography variant="subtitle1" component="h2" marginLeft={2}  >
                            {tour.state}
                        </Typography>
                        <Typography variant="subtitle1" component="h4" marginLeft={3} >
                            {tour.slogan}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>


    )
};


export default TourCard;

