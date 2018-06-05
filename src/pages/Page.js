import React, { Component } from 'react';
import Weather from '../weather/Weather';
import {Button, Icon, Input, Row} from 'react-materialize'

class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            main_weather: {
                location: "",
                weather: "",
                temp:"",
                humidity:"",
                temp_min: "",
                temp_max: ""
            },
            icon: ""
        };
        this.api = "http://api.openweathermap.org/data/2.5/weather?q=Brisbane&&appid=36b79456f480f88aeadc9d2299141bcb";
        this.iconApi = "http://openweathermap.org/img/w/";
        this.getLocationName = this.getLocationName.bind(this);
    }
    getLocationName(){
        fetch(this.api)
        .then((response) => {
            return response.json();
        })
        .then((myJson) =>{
            this.setState({
            main_weather:{
            weather: myJson.weather[0].main,
            location: myJson.name,
            temp: myJson.main.temp,
            humidity: myJson.main.humidity,
            temp_min: myJson.main.temp_min,
            temp_max: myJson.main.temp_max
            }, 
            icon: myJson.weather[0].icon
            })
            
        })
        console.log(this.state.main_weather.temp_min);
    }

    // getWeatherIcon(){
    //     fetch(this.iconApi + this.state.icon + ".png", {
    //         mode: 'cors'
    //     })
    //     .then((response) => {
    //         console.log(response);
    //     })
    // }
    // componentDidUpdate(prevProps, prevState){
    //     this.getWeatherIcon();
    // }
    render(){
        return(
            <div>
            <div className="main-page">
                <Weather 
                weather={this.state.main_weather.weather}
                location={this.state.main_weather.location}
                temp={this.state.main_weather.temp}
                humidity={this.state.main_weather.humidity}
                temp_min={this.state.main_weather.temp_min}
                temp_max={this.state.main_weather.temp_max}
                />
            </div>
            <div className="button">
            <h2>Choose city!</h2>
            <Row className="city-name-form">
                <Input label="type city name here"/>
            </Row>
            <Button waves='light' onClick={this.getLocationName}>Seach!<Icon left>cloud</Icon></Button>
            </div>
            </div>
        );
    }
}

export {Page};