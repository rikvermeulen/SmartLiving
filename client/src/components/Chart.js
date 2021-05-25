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
          backgroundColor:['rgba(255, 0, 0, 0.6)'],
          borderWidth: 4
        }
      ]
    })
  ]
  useEffect(() => {
    chart()
  }, [])

  return(
    <div className="Chart">
      <h1>Chart</h1>
      <div style={{height: "100px", width: "200px"}}>
        <Bar data={chartData} option={{
          responsive: true,
          title: {text: 'Water verbruik', display: true}
          }}/>
      </div>
    </div>
  )
}

export default Chart;
/*class Chart extends  Component{
  constructor(){
    super(props);
    this.state = {
      chartData:{
        labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
        datasets:[
            {
            label:'Water',
            data:[
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            backgroundColor:[
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)'
            ]
          }
        ]
      }
    }
  }

  static defaultProps ={
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render(){
    return(
      <div className="chart">
      <Bar
        data={this.data.chartData}
        //width={Graph.width}
        //height={Graph.height}
        option={{
          title:{
            display:this.props.displayTitle,
            text:'Verbruik van water',
            fontSize:25
          },
          legend:{
            display: this.props.displayLegend,
            position:this.props.legendPosition
          },
          maintainAspectRation: false
        }}
      />        
      </div>
    )
  }
}

export default Chart;*/