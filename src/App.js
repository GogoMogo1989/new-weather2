import './App.css';
import Main from './components/main'
import Input from './components/input'
import React from 'react';
import moment from 'moment';
import Cities from 'cities.json';


const apiKey='97ae44a28d09d602ff074a873467e1d1'


const newCities = Cities.map(citiesName)

function citiesName(value){
    return value.name
}


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

  fetchCity = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then(response => {
      this.setState({
        city: response.name,
        tempetaure: Math.floor(response.main.temp-273.15),
        description: response.weather[0].description,
        windSpeed: response.wind.speed
      })
    });


}

  getWeather = async(event) => {


    event.preventDefault();

    let city = event.target.elements.city.value

    console.log(city)

    if(city !== undefined){
      this.fetchCity(city)
    }
  }

    render(){

      const city = this.state.city;
      const tempetaure = this.state.tempetaure;
      const description = this.state.description;
      const windSpeed = this.state.windSpeed
      const time = moment().format('YYYY.MM.DD')

      return(
        <div className="App">
          <Input 
                 suggestions={newCities}
                  load={this.getWeather}
                  />
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
