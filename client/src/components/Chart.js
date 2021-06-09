import React, {Component, component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Graph from './pages/Graph';




const Chart = () => {
  const [chartData, setChartData] = useState({})
  const options = {
    elements: {
      bar: {
        borderRadius: 40,
        borderSkipped: false,
      }
    },
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
      max: 6
    },
    x: {
      display: false
    }
  }
      
  }
  const chart = () =>[
    setChartData({
      labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'], 
      datasets:[
        {
          label:'Water, m3',
          data:[0.69,0.56,0.54,0.34,0.66,0.89,0.93],
          backgroundColor:['#8624dc'],
        },
        {
          label:'Elektriciteit, KwH',
          data:[6.1,5.1,5.7,4.2,5.8,6.1,6.3],
          backgroundColor:['#ff9066'],
        },
        {
          label:'Gas, m3',
          data:[0.9,0.5,0.4,0.3,0.5,0.9,0.11],
          backgroundColor:['#637677'],
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
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default Chart;