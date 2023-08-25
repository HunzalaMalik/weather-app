import React, { useEffect, useState } from "react"
import Widgets from "./Widgets"
import DailyForcast from "./DailyForcast"
import AirCondition from "./AirCondition"
import WeeklyForcast from "./WeeklyForcast"
import getCurrentWeather from "../../api/CurrentWeatherAPI"

interface Iprops {}

const Weather: React.FC<Iprops> = ({}) => {
  const [lat, setLat] = useState<number>(0)
  const [long, setLong] = useState<number>(0)
  const [currentWeather, setCurrentWeather] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords?.latitude)
      setLong(position.coords?.longitude)
    })

    getCurrentWeather(lat, long).then((obj) => {
      setCurrentWeather(obj)
    })
  }, [lat, long])

  return (
    <>
      <div className="grid gap-4 col-span-7">
        <Widgets />
        <DailyForcast />
        <AirCondition />
      </div>
      <div className="col-span-3 bg-component rounded-2xl">
        <WeeklyForcast />
      </div>
    </>
  )
}

export default Weather
