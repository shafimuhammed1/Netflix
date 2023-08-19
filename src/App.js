import React from 'react'
import './App.css'
import NavBar from './Components/NavBars/NavBar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost title='Netflix Originals'/>
      <Rowpost title='Action' isSmall/>
      
    </div>
  );
}

export default App;
