import React from 'react'
import "./home.css"

export default function TopBar({ data }) {
    return <>
        <div className='Topbar'>
            <div className='weather weather-main'>
                {data.weather[0].main === "Clouds" && <i class="bi bi-cloud-fill"></i>}
            </div>
            <div>
                <h1 className='main-temperature'>{data.main.temp}</h1>
            </div>
            <div className='digree' >
                <h2><sup>o</sup>C </h2> <h2>|</h2><h2 className='dark'><sup>o</sup>F </h2>
            </div>
            <div className='dark'>
                <h3>Preciptation : 0%</h3>
                <h3>Humidity : {data.main.humidity}%</h3>
                <h3>Wind : {data.wind.speed} km/h</h3>
            </div>
        </div>
        <div className='middle dark'>
            <h1>Temperature <div className='line'></div> </h1>
            <h1>|</h1>
            <h1>Precipitation</h1>
            <h1>|</h1>
            <h1>Wind</h1>
        </div>
    </>
}
