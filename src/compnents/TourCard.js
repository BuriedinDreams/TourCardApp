import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { ThumbUpAltIcon } from "@mui/icons-material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const TourCard = () => {
    return (
        // Grid allows me to put all my components inside a "box" to be Manipulated
        <Grid item xs={3} >
            {/* Paper gives the floating card effect */}
            <Paper elevation={4} >
                <img className='img' src='https://www.visitmt.com/binaries/content/gallery/MTOT/photos/content-team/places-to-go/trip-ideas/trips-by-type/unforgettable-road-trips/b56a3200.jpg/b56a3200.jpg/MTOT%3Alandscape'
                    alt='Photo of people observing Montana'></img>

                <Box paddingX={1} >
                    <Typography variant="h4" component="h4" >
                        Bozeman Montana
                    </Typography>

                    <Box paddingX={1} sx={{
                        display: "flex",
                        alignItems: "center"
                    }} >
                        <ThumbUpAltIcon />
                        <Typography variant="subtitle1" component="h4" marginLeft={1} >
                            Immerse into the wild
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>


    )
};


export default TourCard;

