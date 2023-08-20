import React from 'react'
import './App.css'
import {originals,action} from './Urls'
import NavBar from './Components/NavBars/NavBar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
      
    </div>
  );
}

export default App;
