import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import "./Horizontal.css"

const data = {
  labels: ['CHB-0', 'PCC-0', 'CHB-1', 'PCC-1', 'LCH-G+', 'PCC-soft', 'CHB-soft'],
  datasets: [
    {
      label:"Overall Logins",
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [115, 115, 1033, 378, 16, 0, 8],
    }
  ],
};

class Bar extends React.Component{
  

  render() {
  return (
      <div className="card">
        <h3>Overall Logins</h3>
        <HorizontalBar  options={{ maintainAspectRatio: false }}
              data={data} />
      </div>
    );
  }
};

export default Bar