import React, { useState } from 'react';
import Bar from "./Components/Charts/BarChart/horizontalBar"
import Rad from "./Components/Charts/RadarChart/Radar"
import "./App.css"
import logo from "./images/logo.png"
import Switch from '@material-ui/core/Switch';
import LoginTable from "./Components/LoginTable";


const App = () => {
 
  const [hey, setHey] = useState(true)


  return (
    <div className="App">
      <header className="header">

        <img className="logo" src={logo} alt="logo" />
        <h2 className="title">Assetmonk</h2>
        <p className="updated">Updated on:<i>29/09/2020</i> </p>
      </header>
      <div className="toogle"><Switch onChange={(hey) => setHey((hey) => !hey)}
        defaultUnChecked
        inputProps={{ 'aria-label': 'primary checkbox' }} /></div>

      {/* <button onClick={(hey) => setHey((hey) => !hey)}> Charts</button> */}
      {(hey) ?
        <div className="container"
         
          >
          <div className="bar"
       
          ><Bar /></div>
          <div className="rad"
          ><Rad /></div>
        </div> :
        <div><LoginTable /></div>
      }
    </div>

  );
}

export default App;
