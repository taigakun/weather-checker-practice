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
                        <h5>Weather Details</h5>
                        <div className="weather-details">
                            <div className="weather-details-tag">
                                <h5>weather</h5>
                                <h5>Temperature: </h5>
                                <h5>Humidity: </h5>
                                <h5>Min temp: </h5>
                                <h5>Max temp: </h5>
                            </div>
                            <div className="weather-details-content">
                            <h5>{this.props.weather}</h5>
                            <h5>{this.props.temp}</h5>
                            <h5>{this.props.humidity}</h5>
                            <h5>{this.props.temp_min}</h5>
                            <h5>{this.props.temp_max}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;