import React, {Component} from 'react';

class Weather extends Component{
    render(){
        return(
            <div className="weather">
                <div className="main-weather">
                    <div className="location-name">
                    <h5>City Name</h5>
                    <h3>{this.props.location}</h3>
                    </div>
                    <div className="currnet-weather">
                    <h5>Weather</h5>
                    <h6>{this.props.weather}</h6>
                    <h6>{this.props.temp}</h6>
                    <h6>{this.props.humidity}</h6>
                    <h6>{this.props.temp_min}</h6>
                    <h6>{this.props.temp_max}</h6>
                    </div>
                </div>
                <div className="weather-description">
                </div>
                <div className="weather-details">
                    <div className='temp'></div>
                    <div className='pressure'></div>
                    <div className='humidity'></div>
                </div>
            </div>
        )
    }
}

export default Weather;