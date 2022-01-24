
import React from 'react';
import './App.css';
import TourCard from './compnents/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from './compnents/Appbar';
// import Paper from '@mui/material/Paper';


function App() {
  return (
    <div className='App'>

      <SearchAppBar />

      <Container sx={{ marginY: 5 }} >
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>

    </div >
  );
}

export default App;
