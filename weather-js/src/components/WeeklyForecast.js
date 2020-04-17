import React, { Component } from 'react';
import './../App.css';

class WeeklyForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyData: []
        }
    }

    componentDidMount() {
        this.getWeeklyForecast();
    }

    getWeeklyForecast() {
        let BASE_URL = 'https://community-open-weather-map.p.rapidapi.com/forecast/daily?q='
        fetch(`${BASE_URL}${this.props.city},${this.props.country}`, {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-host": "YOUR RAPID API HOST",
		            "x-rapidapi-key": "YOUR RAPID API KEY"
	            }
            })
            .then(res => res.json())
            .then(jsonData => {
                let list = jsonData.list.slice(0,7);
                this.setState({dailyData: list.map(data => {
                    return [
                        this.timestampToDayOfWeek(data.dt),
                        this.kelvinToFahrenheit(data.temp.min),
                        this.kelvinToFahrenheit(data.temp.max),
                        this.kelvinToFahrenheit(data.temp.day),
                        data.weather[0].main
                    ];
                })});
            })
            .catch(err => console.log(err));
    }

    timestampToDayOfWeek(timestamp) {
        let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        let day = new Date();
        day.setTime(timestamp * 1000);
        return days[day.getDay()];
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round(parseInt(kelvin) * 9 / 5 - 459.67);
    }

    render() {
        let daily = this.state.dailyData.map(element => {
            return (
                <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{element[0]}</h5>
                        <p><strong>{element[3]}&#xb0;F</strong> {element[4]}</p>
                    </div>
                    <div class="card-footer">
                        <small className="text-muted">{element[1]}&#xb0;F - {element[2]}&#xb0;F</small>
                    </div>
                </div>
                </>
            )
        });

        return (
            <div className="card-deck">{daily}</div>
        );
    }
}

export default WeeklyForecast