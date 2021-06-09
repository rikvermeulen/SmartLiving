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
      max: 1
    }
  }
      
  }
  const chartwater = () =>[
    setChartData({
      labels: ['Ma, m3', 'Di, m3', 'Wo, m3', 'Do, m3', 'Vr, m3', 'Za, m3', 'Zo, m3'], 
      datasets:[
        {
            label:'Water',
            data:[0.3,0.2,0.4,0.6,0.5,0.6,0.7],
            backgroundColor:['#8624dc'],
            barThickness: 30,
        maxBarThickness: 30,
      labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'], 
      
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