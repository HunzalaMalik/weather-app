import React, { useEffect } from "react"
import Widgets from "./Widgets"
import DailyForcast from "./DailyForcast"
import AirCondition from "./AirCondition"
import WeeklyForcast from "./WeeklyForcast"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  currentWeatherSelector,
  fetchCurrentWeather,
} from "../../slices/currentWeatherSlice"

interface Iprops {}

const Weather: React.FC<Iprops> = ({}) => {
  const currentWeather = useAppSelector(currentWeatherSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        fetchCurrentWeather({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      )
    })
  }, [dispatch])

  return (
    <>
      <div className="grid gap-4 col-span-7">
        <div className="mb-5">
          <Widgets />
        </div>
        <DailyForcast background={true} noOfTime={6} />
        <AirCondition />
      </div>
      <div className="col-span-3 bg-component rounded-2xl">
        <WeeklyForcast days={7} />
      </div>
    </>
  )
}

export default Weather
