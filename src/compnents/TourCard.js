import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



const TourCard = () => {
    return (
        <Grid item xs={3} >
            <Paper elevation={4} >
                <img className='img' src='https://www.visitmt.com/binaries/content/gallery/MTOT/photos/content-team/things-to-do/outdoor-adventure/billings_rimrocks141.jpg/billings_rimrocks141.jpg/MTOT%3Aheroquarter'
                    alt='Photo of people observing Montana'></img>
                <Box paddingX={1} >
                    <Typography variant="h4" component="h4" >
                        Bozeman Montana
                    </Typography>
                </Box>

                <Box paddingX={2} >
                    <Typography variant="subtitle1" component="h4" >
                        Immerse into the wild
                    </Typography>
                </Box>
            </Paper>
        </Grid>


    )
};


export default TourCard;

