import React, { Component } from 'react';
import './../App.css';

class HourlyForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hourlyData: []
        };
    }
    
    componentDidMount() {
        this.getHourlyForecast();
    }

    getHourlyForecast() {
        let BASE_URL = 'https://community-open-weather-map.p.rapidapi.com/forecast?q=';
        fetch(`${BASE_URL}${this.props.city},${this.props.country}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "YOUR RAPID API HOST",
                    "x-rapidapi-key": "YOUR RAPID API KEY"
                }
            })
            .then(res => res.json())
            .then(jsonData => {
                console.log(jsonData)
                let list = jsonData.list.slice(0,7);
                this.setState({hourlyData: list.map(data => {
                    return [
                        this.kelvinToFahrenheit(data.main.temp),
                        data.weather[0].main,
                        this.timestampToHour(data.dt)
                    ]
                })});
            })
            .catch(err => console.log(err));
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round(parseInt(kelvin) * 9 / 5 - 459.67);
    }

    timestampToHour(timestamp) {
        let day = new Date();
        day.setTime(timestamp * 1000);
        let hours = day.getHours();
        return `${hours % 12}:00 ${hours / 12 < 1 ? 'am' : 'pm'}`;
    }

    render() {
        let hourly = this.state.hourlyData.map(element => {
            return (
                <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{element[2]}</h5>
                        <p><strong>{element[0]}&#xb0;F</strong> {element[1]}</p>
                    </div>
                </div>
                </>
            );
        });
        return (
            <div className="card-deck">{hourly}</div>
        );
    }
}

export default HourlyForecast