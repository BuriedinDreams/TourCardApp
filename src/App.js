
import React from 'react';
import './App.css';
import TourCard from './compnents/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';


function App() {
  return (
    <div className='App'>
      <Container >
        <Grid container spacing={3}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>

    </div>
  );
}

export default App;
