import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Map({ data }) {
    const xx = data.list.splice(0, 7)
    let mapData = []
    for (let i = 0; i < xx.length; i++) {
        let x = xx[i].main.temp
        mapData.push(x)
    }
    const week_days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const dayInAWeek = new Date().getDay()
    const currentDay = week_days.slice(dayInAWeek, week_days.length).concat(week_days.slice(0, dayInAWeek))

    let yaxisday = []

    for (let i = 0; i < currentDay.length; i++) {
        let x = currentDay[i]
        yaxisday.push(x)
    }
    const [series, setseries] = useState([{
        name: 'series1',
        data: mapData
    }],)
    const [options, setoptions] = useState({
        chart: {
            height: 350,
            type: 'area'
        },
        stroke: {
            curve: 'smooth'
        },

        xaxis: {
            type: 'dateday',
            categories: yaxisday,
        },
        colors: ["#facb22"],

    },)

    return <>
        <ReactApexChart options={options} series={series} type="area" height={210} />
    </>
}
