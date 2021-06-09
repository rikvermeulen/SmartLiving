import React, {Component, component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


const ChartElec = () => {
  const [chartData, setChartData] = useState({})
  const options = {
    elements: {
      bar: {
        borderRadius: 40,
        borderSkipped: false,
        with: 3
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
      max: 10,
    },
  }
      
  }
  const chartelec = () =>[
    setChartData({
      labels: ['Ma, KwH', 'Di, KwH', 'Wo, KwH', 'Do, KwH', 'Vr, KwH', 'Za, KwH', 'Zo, KwH'], 
      datasets:[
        {
          label:'Elektriciteit',
          data:[7,4,1,3,3,5,7],
          backgroundColor:['#ff9066'],
          barThickness: 30,
        maxBarThickness: 30,
        }
      ]
    })
  ]

  

  useEffect(() => {
    chartelec()
  }, [])

  return(
    <div className="chartgas">
      <div className="chart_data">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default ChartElec;