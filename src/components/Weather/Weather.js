import React from "react";
import "./weather.css";
import searchIcon from "./assets/search.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import Wind from "./assets/wind.png";
import clear from "./assets/clear.png";
import cloud from "./assets/cloud.png";
import drizzle from "./assets/drizzle.png";
import humidity from "./assets/humidity.png";
// import { useState } from "react";
function weather() {
  const api_key = 'dd94f859a0e52d6e4767fddf735f04a7';



  const search = async () => {
    const element = document.getElementsByClassName('cityInput')
    if(element[0].value === ""){
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    
    let response = await fetch(url);

    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-precentage");
    const wind = document.getElementsByClassName("wind-rate");
    const location = document.getElementsByClassName("weather-location")
    const temperature = document.getElementsByClassName("weather-temp")

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temperature[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;

  }
  return (
    <>
      <div className="container-1" style={{ marginTop: "100px" }}>
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Enter City!" />
          <div onClick={() => {search()}} className="search-icon">
            <button className="btn" style={{border:'none'}}>
            <img src={searchIcon} alt="search-icon"/></button>
          </div>
        </div>
        <div className="weather-img">
          <img src={cloud} alt="cloud" />
        </div>
        <div className="weather-temp"></div>
        <div className="weather-location"></div>
        <div className="data-container">
          <div className="element">
            <img src={humidity} className="icon" alt="" />
            <div className="data">
              <div className="humidity-precentage"></div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={Wind} className="icon" alt="" />
            <div className="data">
              <div className="wind-rate"></div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default weather;
