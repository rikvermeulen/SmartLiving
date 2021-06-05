import React, {Component, component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const ChartWater = () => {
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
      max: 10
    }
  }
      
  }
  const chartwater = () =>[
    setChartData({
      labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'], 
      datasets:[
        {
          label:'Water',
          data:[1,2,3,4,5,6,7],
          backgroundColor:['#8624dc'],
        }
      ]
    })
  ]
  useEffect(() => {
    chartwater()
  }, [])

  return(
    <div className="chartgas">
      <div className="chart_data">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default ChartWater;