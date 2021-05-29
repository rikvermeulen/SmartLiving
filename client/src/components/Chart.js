import React, {Component, component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Graph from './pages/Graph';




const Chart = () => {
  const [chartData, setChartData] = useState({})
  const options = {
    plugins: {
    legend: {
      display: false,
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 0,
      to: 0.5,
    }
  },
  scales: {
    y: { // defining min and max so hiding the dataset does not change scale range
      min: 0,
      max: 10
    }
  }
      
  }
  const chart = () =>[
    setChartData({
      labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'], 
      datasets:[
        {
          label:'Water',
          data:[1,2,3,4,5,6,7],
          backgroundColor:['#8624dc'],
          borderWidth: 4,
          borderColor: '#8624dc',
        },
        {
          label:'Elektriciteit',
          data:[7,4,1,3,3,5,7],
          backgroundColor:['#ff9066'],
          borderWidth: 4,
          borderColor: '#ff9066',
        },
        {
          label:'Gas',
          data:[3,2,4,3,5,3,5],
          backgroundColor:['#637677'],
          borderWidth: 4,
          borderColor: '#637677',
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
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}

export default Chart;