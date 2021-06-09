import React, {Component, component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Example from '../../sass/abstracts/variables.scss';

const CSS = {
    backgroundColor: Example.primary
  }

  console.log(Example)

const ChartElec = () => {
  const [chartData, setChartData] = useState({})
  const options = {
    elements: {
      bar: {
        borderRadius: 40,
        borderSkipped: false,
      }
    },
    plugins: {
    tooltip: {
        enabled: true,
    },
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

  const chartelec = () =>[
      
    setChartData({
      labels: ['Punten Gas', 'Punten Elec', 'Punten Water'], 
      datasets:[
        {
          data:[700,400,600],
          backgroundColor: [
            '#637677',
            '#ff9066',
            '#8624dc'
          ],
        },
        {
            label:'',
            data:[],
            backgroundColor:['#fff'],
         },
         {
            label:'',
            data:[],
            backgroundColor:['#fff'],
         },
          
      ]
    })
  ]

  

  useEffect(() => {
    chartelec()
  }, [])

  return(
    <div className="chartpie">
      <div className="chart_data">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  )
}

export default ChartElec;