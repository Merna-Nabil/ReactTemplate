import React from 'react';
import Home from './../Home/Home';
import Work from './../Work/Work';
import Portofolio from './../Portofolio/Portofolio';
import Resume from './../Resume/Resume';
import About from './../About/About';
import './All.css';

const All=()=> {
  return (
    <div>
    <Home/>
    <Work/>
    <Portofolio/>
    <Resume/>
    <About/>
    </div>
  );
}

export default All;
