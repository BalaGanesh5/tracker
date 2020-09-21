import React from 'react';
import {Radar} from 'react-chartjs-2';
import "./Radar.css"

const data = {
  labels: ['CHB-0', 'PCC-0', 'CHB-1', 'PCC-1', 'LCH-G+', 'PCC-soft', 'CHB-soft'],
  datasets: [
    {
      label: 'Total Investors',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [73, 82, 18, 12, 7, 9, 28]
    },
    {
      label: 'Yet to SignUp',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [26, 44, 0, 0, 5, 9, 20]
    },
  ]
};

 class Rad extends React.Component{
   render() {
    return (
      <div className= "card">
         <h3>Sign Up details</h3>
        <Radar options={{ maintainAspectRatio: false }} data={data} />
      </div>
    );
  }
}


export default Rad