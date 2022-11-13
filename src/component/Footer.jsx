import React from 'react'
import "./home.css"


const week_days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
export default function Footer({ data }) {

    const main = data.list.splice(0, 7)
    const dayInAWeek = new Date().getDay()
    const currentDay = week_days.slice(dayInAWeek, week_days.length).concat(week_days.slice(0, dayInAWeek))
    return <>

        <div className='footer'>
            {
                main.map((item, index) => <div key={index} className='single-div' >
                    <h1>{currentDay[index]}</h1>
                    <div className='weather'>
                        {item.weather[0].main === "Clouds" && <i class="bi bi-cloud-fill"></i>}
                    </div>
                    <h2>{item.main.temp_min}<sup>o</sup>/<span className='dark'>{item.main.temp_max}<sup>o</sup></span></h2>
                </div>)
            }
        </div>
    </>
}
