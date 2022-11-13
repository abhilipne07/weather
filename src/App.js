import React, { useEffect, useState } from 'react'
import Footer from './component/Footer'
import "./component/home.css"
import TopBar from './component/Topbar'
import Map from './component/Map'

export default function App() {
  const [currentWeather, setcurrentWeather] = useState(null)
  const [forecast, setforecast] = useState(null)


  const data = async () => {
    const lat = 19.076090
    const lot = 72.877426
    const key = "8ea7d07c51e6deccc7bdb134acff0f10"
    const currentWeatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${key}&units=metric`)
    const forecastWeatherData = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lot}&appid=${key}&units=metric`)

    Promise.all([currentWeatherData, forecastWeatherData])
      .then(async (response) => {
        const weatherRes = await response[0].json()
        const forecastRes = await response[1].json()
        setcurrentWeather(weatherRes)
        setforecast(forecastRes)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    data()
  }, [])
  return <div className='main'>

    {currentWeather && <TopBar data={currentWeather} />}
    {forecast && <Map data={forecast} />}
    {forecast && <Footer data={forecast} />}

  </div>
}
