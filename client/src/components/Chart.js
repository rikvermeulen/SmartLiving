import React, {Component, component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Graph from './pages/Graph';




const Chart = () => {
  const [chartData, setChartData] = useState({})
  const chart = () =>[
    setChartData({
      labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'], 
      
      datasets:[
        {
          label:'Water',
          data:[1,2,3,4,5,6,7],
          backgroundColor:['#8624dc'],
          borderWidth: 4
        },
        {
          label:'Elektriciteit',
          data:[7,4,1,3,3,5,7],
          backgroundColor:['#ff9066'],
          borderWidth: 4
        },
        {
          label:'Gas',
          data:[3,2,4,3,5,3,5],
          backgroundColor:['#637677'],
          borderWidth: 4
        }
      ]
    })
  ]
  useEffect(() => {
    chart()
  }, [])

  return(
    <div className="chart">
      <div className="chart_data">
        <Bar data={chartData} option={{
          responsive: true,
          title: {text: 'Water verbruik', display: true}
          }}/>
      </div>
    </div>
  )
}

export default Chart;