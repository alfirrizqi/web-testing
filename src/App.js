import React from 'react';
import Navbar from './components/Navbar';
import MidText from './components/MidText'
import Service from './components/Service'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'


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
    <div class='bg-[#23282f]'>
    <Newsletter/>   
    </div>
    <div class='bg-white'>
    <Contact/>
    </div>
     
    </>
  );
}

export default App;
