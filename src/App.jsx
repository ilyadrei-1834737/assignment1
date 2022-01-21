import { scaleLinear, scaleBand, extent, line, csv } from "d3";


import data from './data';
import dataupdate from './dataupdate';


import { useState } from 'react'
import logo from './logo.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const margin = 40;
  const yscale = scaleLinear().domain([9350528, 1580000000000.0]).range([500 - margin, 0 + margin]);
  const xscale = scaleLinear().domain([1751, 2017]).range([0 + margin, 500 - margin]);

  const d = data[0];

  let array = [];
  for (let i = 0; i < Object.keys(d).length; i++) {
    array.push([Object.keys(d)[i], Object.values(d)[i]]);
  }

  console.log(dataupdate);

  return (
    <div className="App">
      <h1>Global C02 Emissions by Year</h1>
      <h3>1751 to 2017</h3>
      <svg width="500" height="500" style={{ border: "2px solid black" }}>

      {
        dataupdate.map((point, i) => {
          return(
            <circle cx={xscale(point['year'])} cy={yscale(point['amount'])} r={2} />
          );
        })
      }

      <text x="250" y="495" style={{ fontSize: 12, fontFamily: "Georgia" }}>
        Year
      </text>

      <text x="5" y="200" transform='rotate(90,5,200)' style={{ fontSize: 12, fontFamily: "Georgia" }}>
        Millions of Tonnes of CO2
      </text>
      <text x="20" y="35" transform='rotate(90,20,35)' style={{ fontSize: 12, fontFamily: "Georgia" }}>
        1580
      </text>
      <text x="20" y="250" transform='rotate(90,20,250)' style={{ fontSize: 12, fontFamily: "Georgia" }}>
        657
      </text>
      <text x="20" y="450" transform='rotate(90,20,450)' style={{ fontSize: 12, fontFamily: "Georgia" }}>
        9.3
      </text>

      <text x="30" y="475" style={{ fontSize: 10, fontFamily: "Georgia" }}>
        1751
      </text>
      <text x="250" y="475" style={{ fontSize: 10, fontFamily: "Georgia" }}>
        1884
      </text>
      <text x="355" y="475" style={{ fontSize: 10, fontFamily: "Georgia" }}>
        1950
      </text>
      <text x="460" y="475" style={{ fontSize: 10, fontFamily: "Georgia" }}>
        2017
      </text>
      </svg>
    </div>
  )
}

export default App
