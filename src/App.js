import React from 'react';
import Navbar from './components/Navbar';
import MidText from './components/MidText'
import Service from './components/Service'
import About from './components/About'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <> 
    <Navbar/>
    <div class='body1'>
    <MidText /> 
    </div>
    <div class='bodyMid'>
    <Service /> 
    </div>
    <div class='body2'>
    <About/>
    </div>
    <div class='bg-black'>
    <Newsletter/>   
    </div>
     
    </>
  );
}

export default App;
