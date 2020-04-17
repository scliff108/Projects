import React, { Component } from 'react';
import './../App.css';
let weatherData = {"city":{"id":5391959,"name":"San Francisco","coord":{"lon":-122.4193,"lat":37.7793},"country":"US","population":805235,"timezone":-25200},"cod":"200","message":15.5281587,"cnt":10,"list":[{"dt":1570258800,"sunrise":1570284513,"sunset":1570326446,"temp":{"day":288.19,"min":286.16,"max":294.47,"night":290.1,"eve":286.16,"morn":294.47},"pressure":1020,"humidity":69,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":1.822,"deg":329,"clouds":0},{"dt":1570345200,"sunrise":1570370966,"sunset":1570412756,"temp":{"day":289.42,"min":288.26,"max":294.83,"night":290.55,"eve":288.32,"morn":294.83},"pressure":1016,"humidity":50,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":1.268,"deg":298,"clouds":0},{"dt":1570431600,"sunrise":1570457420,"sunset":1570499066,"temp":{"day":289.35,"min":288.1,"max":295.8,"night":292.2,"eve":288.1,"morn":295.8},"pressure":1016,"humidity":53,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"speed":0.907,"deg":316,"clouds":24},{"dt":1570518000,"sunrise":1570543874,"sunset":1570585377,"temp":{"day":289.18,"min":287.2,"max":296,"night":291.62,"eve":287.2,"morn":296},"pressure":1012,"humidity":52,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"speed":1.833,"deg":207,"clouds":68},{"dt":1570604400,"sunrise":1570630329,"sunset":1570671688,"temp":{"day":287.27,"min":285.4,"max":292.54,"night":289.61,"eve":285.6,"morn":292.54},"pressure":1010,"humidity":80,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":2.444,"deg":221,"clouds":6},{"dt":1570690800,"sunrise":1570716784,"sunset":1570758000,"temp":{"day":286.39,"min":286.39,"max":291.89,"night":289.02,"eve":286.6,"morn":291.89},"pressure":1011,"humidity":68,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":1.429,"deg":194,"clouds":0},{"dt":1570777200,"sunrise":1570803239,"sunset":1570844313,"temp":{"day":286.19,"min":285.47,"max":293.48,"night":289.32,"eve":285.47,"morn":293.48},"pressure":1014,"humidity":64,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"speed":0.731,"deg":236,"clouds":55},{"dt":1570863600,"sunrise":1570889695,"sunset":1570930626,"temp":{"day":285.49,"min":285.49,"max":291.65,"night":289.03,"eve":286.47,"morn":291.65},"pressure":1013,"humidity":69,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"speed":1.227,"deg":246,"clouds":70},{"dt":1570950000,"sunrise":1570976151,"sunset":1571016941,"temp":{"day":288.18,"min":285.84,"max":288.6,"night":287.62,"eve":286.43,"morn":288.6},"pressure":1012,"humidity":95,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.501,"deg":151,"clouds":87,"rain":1},{"dt":1571036400,"sunrise":1571062607,"sunset":1571103255,"temp":{"day":286.5,"min":285.4,"max":291.13,"night":288.73,"eve":285.7,"morn":291.13},"pressure":1014,"humidity":89,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":1.511,"deg":280,"clouds":0}]};

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
        let list = weatherData.list.slice(0,7);
        this.setState({dailyData: list.map(data => {
            return [
                this.timestampToDayOfWeek(data.dt),
                this.kelvinToFahrenheit(data.temp.min),
                this.kelvinToFahrenheit(data.temp.max),
                this.kelvinToFahrenheit(data.temp.day),
                data.weather[0].main
            ];
        })});
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