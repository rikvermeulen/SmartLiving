import React, {Component, component, useEffect, useState} from 'react';
import {Bar, Radar, Pie} from 'react-chartjs-2';

const ChartGas = () => {
  const [chartData, setChartData] = useState({})
  const options = {
    elements: {
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
      display: false
    },

    x: {
        display: false
    }
  }
      
  }
  const chartgas = () =>[
    setChartData({
        labels: [
            'Douche',
            'Lampen',
            'Wasmachine',
            'Vatwasser',
            'Ketel',
            'Tv',
            'Computer'
          ],
          datasets: [{
            label: 'Vorige maand',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: '#ff8f6637',
            borderColor: '#ff9066',
            pointBackgroundColor: '#ff9066',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ff9066'
          }, {
            label: 'Deze maand',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: '#8624dc29',
            borderColor: '#8624dc',
            pointBackgroundColor: '#8624dc',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#8624dc'
          }]
    })
  ]
  useEffect(() => {
    chartgas()
  }, [])

  return(
    <div className="chartradar">
      <div className="chart_data">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default ChartGas;