import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from 'react-loader-spinner'
import Navbar from './components/Navbar'
import CityForm from './components/CityForm.js'

import data from './data.json'





function App() {
  const [weather, setWeather] = useState(data)

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.longitude, position.coords.latitude)
    });
  }
  const getWeather = async (longitude, latitude) => {
    const API_KEY = "d10ecb317e0d429a93e04f6a29cae1fc";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data); // set value of var weather to data
  };

  const getWeatherByRequest = async (cityName) => {
    const API_KEY = "d10ecb317e0d429a93e04f6a29cae1fc";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data); // set value of var weather to data
  };

  const icon = `http://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`






  useEffect(() => { getLocation(); }, []) // [] empty array means run only one time when mounted

  console.log(weather) // if weather is not null 

  if (!weather) return <div className='big-container loader-container d-flex flex-column justify-content-center align-items-center'>
    <Loader type="TailSpin" color="#00B7C6" height={80} width={80} /> </div>; // null or 0 or false or '' or undefined
  return (
    <div>
      <Navbar />
      <div className="big-container container-fluid d-flex flex-column align-items-center text-dark">
        <h1 className="font-weight-bold text-dark my-5">Welcome {'username'}</h1>
        <CityForm/>

        <div className="container d-flex flex-column align-items-center bg-white rounded shadow-sm text-center p-2 mt-5">
          <h2 className="display-4">{weather && weather.name}, {weather && weather.sys.country}</h2>
          <img src={icon} alt="weather-icon" />
          <h3 className="text-danger">{weather && Math.floor(weather.main.temp)} °C</h3>
          <h3 className="">{weather && weather.weather[0].description}</h3>
        </div>
        <div className='container-fluid d-flex flex-row justify-content-center'>
          <button className='btn btn-danger m-2' onClick={() => getWeatherByRequest('London')}>London</button>
          <button className='btn btn-danger m-2' onClick={() => getWeatherByRequest('Hanoi')}>Hanoi</button>
          <button className='btn btn-danger m-2' onClick={() => getWeatherByRequest('Santiago,CL')}>Santiago de Chile</button>
          <button className='btn btn-danger m-2' onClick={() => getWeatherByRequest('Rio,br')}>Rio de Janeiro</button>
          <button className='btn btn-danger m-2' onClick={() => getWeatherByRequest('Sydney')}>Sydney</button>
        </div>
      </div>
    </div>
  );
}

export default App;
