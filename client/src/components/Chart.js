import React, {Component, component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Graph from './pages/Graph';

data = [1,2,3,4,5,6,7]

class Chart extends  Component{
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

export default Chart;