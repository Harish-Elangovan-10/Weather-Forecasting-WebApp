import React from 'react';
import './WeatherCard.css';

const WeatherCard = (forecast) => {
  return (
    <div className='card'>
        <div className="c">
            <p className='t'>{forecast.d1}</p>
            <div className='l'></div>
            <div className='cc'>
                <img className='icon' src={forecast.i1} alt='i1'></img>
            </div>
            <p className='t'>{forecast.t1}°C</p>
        </div>

        <div className="c">
            <p className='t'>{forecast.d2}</p>
            <div className='l'></div>
            <div className='cc'>
                <img className='icon' src={forecast.i2} alt='i2'></img>
            </div>
            <p className='t'>{forecast.t2}°C</p>
        </div>

        <div className="c">
            <p className='t'>{forecast.d3}</p>
            <div className='l'></div>
            <div className='cc'>
                <img className='icon' src={forecast.i3} alt='i3'></img>
            </div>
            <p className='t'>{forecast.t3}°C</p>
        </div>

        <div className="c">
            <p className='t'>{forecast.d4}</p>
            <div className='l'></div>
            <div className='cc'>
                <img className='icon' src={forecast.i4} alt='i4'></img>
            </div>
            <p className='t'>{forecast.t4}°C</p>
        </div>

        <div className="c">
            <p className='t'>{forecast.d5}</p>
            <div className='l'></div>
            <div className='cc'>
                <img className='icon' src={forecast.i5} alt='i5'></img>
            </div>
            <p className='t'>{forecast.t5}°C</p>
        </div>

    </div>
  )
}

export default WeatherCard
