import React, { useEffect } from "react"
import Widgets from "./Widgets"
import DailyForcast from "./DailyForcast"
import AirCondition from "./AirCondition"
import WeeklyForcast from "./WeeklyForcast"
import { useAppSelector } from "../../app/hooks"
import { currentWeatherSelector } from "../../slices/currentWeatherSlice"

interface Iprops {}

const Weather: React.FC<Iprops> = ({}) => {
  const currentWeather = useAppSelector(currentWeatherSelector)

  return (
    <>
      <div className="grid gap-4 col-span-7">
        <div className="px-10 py-5">
          <Widgets />
        </div>
        <DailyForcast background={true} noOfTime={6} />
        <AirCondition
          temp={currentWeather.main.feels_like}
          windSpeed={currentWeather.wind.speed}
          rainPercentage={0}
          UVIndex={0}
        />
      </div>
      <div className="col-span-3 bg-component rounded-2xl">
        <WeeklyForcast days={7} />
      </div>
    </>
  )
}

export default Weather
