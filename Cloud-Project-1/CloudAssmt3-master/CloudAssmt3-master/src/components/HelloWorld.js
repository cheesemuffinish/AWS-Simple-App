import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      dates: [
        {
          DATE:"",
          TMAX:0,
          TMIN:0
        }
      ]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://18.219.59.166:666' + '/forecast/' + document.getElementById('yValue').value)
      .then(res => {
        let datesCopy = JSON.parse(JSON.stringify(this.state.dates))
           //make changes to ingredients
           datesCopy = res.data
           this.setState({
              dates:datesCopy
            })

          var weatherData = res.data

            var chart = new CanvasJS.Chart("chartContainer", {
              title:{
                  text:"Weather Data"
              },
              animationEnabled: true,

              axisX:{
                  valueFormatString:  "########", // move comma to change formatting
                  prefix: "Date: "
                  },

              data: [
                {
                  type: "scatter",
                  dataPoints: [
                    {
                      y: weatherData[0].TMIN,
                      x: parseInt(weatherData[0].DATE)
                    },
                    {
                      y: weatherData[1].TMIN,
                      x: parseInt(weatherData[1].DATE)
                    },
                    {
                      y: weatherData[2].TMIN,
                      x: parseInt(weatherData[2].DATE)
                    },
                    {
                      y: weatherData[3].TMIN,
                      x: parseInt(weatherData[3].DATE)
                    },
                    {
                      y: weatherData[4].TMIN,
                      x: parseInt(weatherData[4].DATE)
                    },
                    {
                      y: weatherData[5].TMIN,
                      x: parseInt(weatherData[5].DATE)
                    },
                    {
                      y: weatherData[6].TMIN,
                      x: parseInt(weatherData[6].DATE)
                    }
                  ]
                },
                {
                    type: "scatter",
                    dataPoints: [
                      {y: weatherData[0].TMAX, x: parseInt(weatherData[0].DATE) },
                      {y: weatherData[1].TMAX, x: parseInt(weatherData[1].DATE) },
                      {y: weatherData[2].TMAX, x: parseInt(weatherData[2].DATE) },
                      {y: weatherData[3].TMAX, x: parseInt(weatherData[3].DATE) },
                      {y: weatherData[4].TMAX, x: parseInt(weatherData[4].DATE) },
                      {y: weatherData[5].TMAX, x: parseInt(weatherData[5].DATE) },
                      {y: weatherData[6].TMAX, x: parseInt(weatherData[6].DATE) },


                    ]
                }


                ]
            });
        chart.render();
       })
       .catch(err => {
         console.log(err)
       })
  }

  render () {
    return (
      <div className='button__container'>
      <button className='button' onClick={this.handleClick}>Click Me</button>
      <div id="chartContainer" style={{height: 450 + "px", width: 100 + "%"}}>
      </div>
      </div>
    )
  }
}
export default App
