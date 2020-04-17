import React, { Component } from 'react';
import './../App.css';
let weatherData = {"cod":"200","message":0.011,"cnt":40,"list":[{"dt":1570244400,"main":{"temp":288.11,"temp_min":286.961,"temp_max":288.11,"pressure":1019.73,"sea_level":1019.73,"grnd_level":1011.77,"humidity":68,"temp_kf":1.15},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.15,"deg":275.935},"sys":{"pod":"n"},"dt_txt":"2019-10-05 03:00:00"},{"dt":1570255200,"main":{"temp":287.37,"temp_min":286.509,"temp_max":287.37,"pressure":1020.2,"sea_level":1020.2,"grnd_level":1012.28,"humidity":70,"temp_kf":0.86},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.18,"deg":332.266},"sys":{"pod":"n"},"dt_txt":"2019-10-05 06:00:00"},{"dt":1570266000,"main":{"temp":286.85,"temp_min":286.274,"temp_max":286.85,"pressure":1019.14,"sea_level":1019.14,"grnd_level":1011.47,"humidity":69,"temp_kf":0.58},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.28,"deg":308.346},"sys":{"pod":"n"},"dt_txt":"2019-10-05 09:00:00"},{"dt":1570276800,"main":{"temp":286.22,"temp_min":285.936,"temp_max":286.22,"pressure":1019.05,"sea_level":1019.05,"grnd_level":1011.59,"humidity":66,"temp_kf":0.29},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.87,"deg":337.999},"sys":{"pod":"n"},"dt_txt":"2019-10-05 12:00:00"},{"dt":1570287600,"main":{"temp":286.6,"temp_min":286.6,"temp_max":286.6,"pressure":1019.34,"sea_level":1019.34,"grnd_level":1011.91,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.77,"deg":354.045},"sys":{"pod":"d"},"dt_txt":"2019-10-05 15:00:00"},{"dt":1570298400,"main":{"temp":290.144,"temp_min":290.144,"temp_max":290.144,"pressure":1019.47,"sea_level":1019.47,"grnd_level":1012.38,"humidity":48,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.84,"deg":63.477},"sys":{"pod":"d"},"dt_txt":"2019-10-05 18:00:00"},{"dt":1570309200,"main":{"temp":292.716,"temp_min":292.716,"temp_max":292.716,"pressure":1017.81,"sea_level":1017.81,"grnd_level":1010.57,"humidity":48,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":0.77,"deg":194.975},"sys":{"pod":"d"},"dt_txt":"2019-10-05 21:00:00"},{"dt":1570320000,"main":{"temp":294.912,"temp_min":294.912,"temp_max":294.912,"pressure":1016.08,"sea_level":1016.08,"grnd_level":1008.57,"humidity":40,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.78,"deg":261.529},"sys":{"pod":"n"},"dt_txt":"2019-10-06 00:00:00"}]};

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
        
        let list = weatherData.list.slice(0,7);
        this.setState({hourlyData: list.map(data => {
            return [
                this.kelvinToFahrenheit(data.main.temp),
                data.weather[0].main,
                this.timestampToHour(data.dt)
            ]
        })});
        /*
        let BASE_URL = 'https://community-open-weather-map.p.rapidapi.com/forecast?q=';
        fetch(`${BASE_URL}${this.props.city},${this.props.country}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "06ea437b1fmsh826f67f4c8ebbdbp1f5284jsncb55b9f41a30"
                }
            })
            .then(res => res.json())
            .then(jsonData => {
                console.log(jsonData)
                let list = jsonData.list.slice(0,7);
                this.setState({
                    hourlyData: list.map(data => {
                        return [data.main.temp, data.weather[0].main, data.dt];
                    })

                });
            })
            .catch(err => console.log(err));
            */
    }

    kelvinToFahrenheit(kelvin) {
        return Math.round(parseInt(kelvin) * 9 / 5 - 459.67);
    }

    timestampToHour(timestamp) {
        let day = new Date();
        day.setTime(timestamp * 1000);
        let hours = day.getHours();
        return `${hours % 12}:00 ${hours / 12 < 1 ? 'a.m.' : 'p.m'}`;
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