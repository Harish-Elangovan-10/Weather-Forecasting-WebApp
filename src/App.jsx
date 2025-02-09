import React, { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import './index.css'
import Menu from './components/Menu'
import getWeatherData from './services/WeatherService'
import { DateTime } from 'luxon'

const directions = [
    "North",
    "North-Northeast",
    "NorthEast",
    "East-Northeast",
    "East",
    "East-Southeast",
    "SouthEast",
    "South-Southeast",
    "South",
    "South-Southwest",
    "SouthWest",
    "West-Southwest",
    "West",
    "West-Northwest",
    "North-West",
    "North-Northwest"
];

const Sector = (wd) => {
    var val = Math.floor((wd / 22.5) + 0.5);
    return directions[val % 16];
}

const capatialize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const iconFromCode = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

const formatTime = (secs, offset, format = "cccc, dd LLL yyyy' | 'hh:mm a") => DateTime.fromSeconds(secs + offset, {zone: 'utc'}).toFormat(format);

const App = () => {

    const [weatherData, setWeatherData] = useState(false);

    const getWeather = async (city) => {
        try {
            const data = await getWeatherData('weather', {q: city, units: 'metric'});
            const forecast = await getWeatherData('forecast', {lat: data.coord.lat, lon: data.coord.lon, units: 'metric'});
            console.log(forecast);

            setWeatherData({
                city: data.name,
                country: data.sys.country,
                temperature : Math.floor(data.main.temp),
                weather: capatialize(data.weather[0].main),
                datetime: data.dt,
                timezone: data.timezone,
                icon: iconFromCode(data.weather[0].icon),
                windSpeed: Math.round(data.wind.speed * 360) / 100,
                direction: Sector(data.wind.deg),
                humidity: data.main.humidity,
                visibility: Math.round(data.visibility / 1000),
                sunrise: formatTime(data.sys.sunrise, data.timezone, 'hh:mm a'),
                sunset: formatTime(data.sys.sunset, data.timezone, 'hh:mm a'),
                d1: formatTime(forecast.list[7].dt, data.timezone, 'ccc'),
                t1: Math.floor(forecast.list[7].main.temp),
                i1: iconFromCode(forecast.list[7].weather[0].icon),
                d2: formatTime(forecast.list[15].dt, data.timezone, 'ccc'),
                t2: Math.floor(forecast.list[15].main.temp),
                i2: iconFromCode(forecast.list[15].weather[0].icon),
                d3: formatTime(forecast.list[23].dt, data.timezone, 'ccc'),
                t3: Math.floor(forecast.list[23].main.temp),
                i3: iconFromCode(forecast.list[23].weather[0].icon),
                d4: formatTime(forecast.list[31].dt, data.timezone, 'ccc'),
                t4: Math.floor(forecast.list[31].main.temp),
                i4: iconFromCode(forecast.list[31].weather[0].icon),
                d5: formatTime(forecast.list[39].dt, data.timezone, 'ccc'),
                t5: Math.floor(forecast.list[39].main.temp),
                i5: iconFromCode(forecast.list[39].weather[0].icon),
            });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getWeather('Chennai');
    }, []);

    const [dateTime, setDateTime] = useState({
        time: '00:00 AM',
      });
    
      useEffect(() => {
    
        const interval = setInterval(() => {
            const date = new Date();
            
            const formattedTime = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }).format(date);
            
            setDateTime({
                time: formattedTime,
            });
        }, 100);
      
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="app">

            <div className='detailed'>
                <WeatherCard 
                    d1={weatherData.d1}
                    t1={weatherData.t1}
                    i1={weatherData.i1}
                    d2={weatherData.d2}
                    t2={weatherData.t2}
                    i2={weatherData.i2}
                    d3={weatherData.d3}
                    t3={weatherData.t3}
                    i3={weatherData.i3}
                    d4={weatherData.d4}
                    t4={weatherData.t4}
                    i4={weatherData.i4}
                    d5={weatherData.d5}
                    t5={weatherData.t5}
                    i5={weatherData.i5}
                />
                <p className='date'>{formatTime(weatherData.datetime, weatherData.timezone, 'cccc, dd LLL yyyy')} | {dateTime.time}</p>
                <p className='descrp'>{weatherData.weather}</p>
                <div className='line'></div>
            </div>

            <div className='menu'>
                <Menu 
                    city={weatherData.city}
                    country={weatherData.country}
                    temperature={weatherData.temperature}
                    icon={weatherData.icon}
                    search={getWeather}
                    windSpeed={weatherData.windSpeed} 
                    direction={weatherData.direction}
                    humidity={weatherData.humidity}
                    visibility={weatherData.visibility}
                    sunrise={weatherData.sunrise}
                    sunset={weatherData.sunset}
                />
            </div>

        </div>
    )
}

export default App
