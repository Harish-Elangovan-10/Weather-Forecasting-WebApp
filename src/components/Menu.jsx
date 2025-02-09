import React, { useRef } from 'react';
import './Menu.css';
import search_icon from '../assets/search_icon.png';
import windy from '../assets/windy.png';
import humidity from '../assets/humidity.png';
import visibility from '../assets/visibility.png';
import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunset.png';

const Menu = (data) => {

    const inputRef = useRef();

    return (
        <div>
        <div className='flex flex-col items-center space-y-10'>

            <div className='search'>
                <input className='inp' type='text' ref={inputRef} placeholder='Enter City...'></input>
                <div className='srchico'>
                    <img src={search_icon} alt='search' onClick={() => data.search(inputRef.current.value)}></img>
                </div>
            </div>

            <p className='temp'>{data.temperature}°C</p>

            <div className='flex items-center justify-center space-x-1'>
                <img className='ico' src={data.icon} alt='weather'></img>
                <p className='loc'>{data.city}, {data.country}</p>
            </div>

            <div className='li'></div>

        </div>

        <br></br>
        
        <div className='flex flex-col items-start space-y-16 pt-8 pl-2'>
            
                <div className='flex space-x-5 items-center'>
                    <div className='fb'>
                        <img className='ico1' src={windy} alt='windy'></img>
                    </div>
                    <p className='ft'>{data.direction}, {data.windSpeed} km/hr</p>
                </div>
                
                <div className='flex space-x-5 items-center'>
                    <div className='fb'>
                        <img className='ico1' src={humidity} alt='windy'></img>
                    </div>
                    <p className='ft'>Humidity, {data.humidity} %</p>
                </div>
                
                <div className='flex space-x-5 items-center'>
                    <div className='fb'>
                        <img className='ico1' src={visibility} alt='windy'></img>
                    </div>
                    <p className='ft'>Visibility, {data.visibility} km</p>
                </div>
                
                <div className='flex space-x-5 items-center'>
                    <div className='fb'>
                        <img className='ico1' src={sunrise} alt='windy'></img>
                    </div>
                    <p className='ft'>Sunrise, {data.sunrise}</p>
                </div>
                
                <div className='flex space-x-5 items-center'>
                    <div className='fb'>
                        <img className='ico1' src={sunset} alt='windy'></img>
                    </div>
                    <p className='ft'>Sunset, {data.sunset}</p>
                </div>

        </div>

        </div>
    )
}

export default Menu
