
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./webpages/Home";
import SearchAppBar from './ components/Appbar';
import Locations from './webpages/locations';
import './App.css';


function App() {
  return (

    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/M" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
