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
            icon: "",
            input:{
                city: "",
            },
            status: "choose the city!",
            api: "http://api.openweathermap.org/data/2.5/weather?q=&&appid=36b79456f480f88aeadc9d2299141bcb"
        };
        this.iconApi = "http://openweathermap.org/img/w/";
        this.getLocationName = this.getLocationName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            input:{
                city: event.target.value
            }
        })
    }
    getLocationName(){
        this.setState({
            api: "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.input.city + "&&appid=36b79456f480f88aeadc9d2299141bcb"
    }, () => {
        fetch(this.state.api)
        .then((response) => {
            if(response.ok){
                return response.json()
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
                    icon: myJson.weather[0].icon,
                    status: "Check the weather!"
                    })
                })
                .then(()=> {
                    console.log(this.state.main_weather.temp_min);
                })
            }else{
                console.log(this.state.input.city);
                return response.json()
                .then((err) => {
                    this.setState({
                        status: "Please choose another city:("
                    })
                })
            }
        })
    })
        
    }
        

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
            <h2>{this.state.status}</h2>
            <Row className="city-name-form">
                <Input label="type city name here" value={this.state.input.city} onChange={this.handleChange}/>
            </Row>
            <Button waves='light' onClick={this.getLocationName} type="button" >Seach!<Icon left>cloud</Icon></Button>
            </div>
            </div>
        );
    }
}

export {Page};