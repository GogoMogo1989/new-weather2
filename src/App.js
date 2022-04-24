import './App.css';
import Main from './components/main'
import Input from './components/input'
import React from 'react';
import moment from 'moment';

const apiKey='97ae44a28d09d602ff074a873467e1d1'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      city: "",
      tempetaure: "",
      description: "",
      windSpeed: ""
    }   

  }

  getWeather = async(event) => {

    event.preventDefault();

    const city = event.target.elements.city.value
    
    const weatherApiFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const response = await weatherApiFetch.json()

    console.log(response)

    this.setState({
      city: response.name,
      tempetaure: Math.floor(response.main.temp-273.15),
      description: response.weather[0].description,
      windSpeed: response.wind.speed
    })

  }

  render(){

    const city = this.state.city;
    const tempetaure = this.state.tempetaure;
    const description = this.state.description;
    const windSpeed = this.state.windSpeed
    const time = moment().format('YYYY.MM.DD, dddd')

    return(
      <div className="App">
        <Input load={this.getWeather} />
        <Main city={city}
               tempetaure={tempetaure}
               description={description}
               windSpeed={windSpeed}
               time={time}
        />
      </div>
    )
  }
}

export default App;
