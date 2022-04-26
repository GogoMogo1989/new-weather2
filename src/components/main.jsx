import React from 'react';
import './main.css'

const Weather = (props) => {

    const city = props.city
    const tempetaure = props.tempetaure
    const description = props.description
    const windSpeed = props.windSpeed
    const time = props.time
    const background =props.background

    return(
        <div className="container">
            <div className="cards">
                <h1>{city}</h1>
                <h1 className="tempetaure">{tempetaure} &deg;</h1>
                <h5 className="description">{description}</h5>
                <h5 className="windSpeed">{windSpeed} km/h</h5>
                <h5 className="time">{time}</h5>
            </div>
        </div>
    )
}

export default Weather