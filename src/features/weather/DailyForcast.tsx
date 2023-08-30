import React from "react"
import { Divider } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { weeklyWeatherSelector } from "../../slices/weeklyWeatherSlice"

interface Iprops {
  background: boolean
  noOfTime: number
}

const DailyForcast: React.FC<Iprops> = (props: Iprops) => {
  const weeklyWeather = useAppSelector(weeklyWeatherSelector)

  const formatTime = (dateTimeStr: string) => {
    const date = new Date(dateTimeStr)
    const hours = date.getHours()
    return `${hours % 12 || 12}:${String(date.getMinutes()).padStart(2, "0")} ${
      hours >= 12 ? "PM" : "AM"
    }`
  }

  return (
    <div
      className={`rounded-3xl px-6 py-4 space-y-4 ${
        props.background ? "bg-component" : ""
      }`}
    >
      <span className="text-secondary">Today's Forcast</span>

      <div className="flex justify-around py-3">
        {weeklyWeather.list.slice(0, props.noOfTime).map((obj, index) => (
          <React.Fragment key={index}>
            <div key={index} className="flex flex-col items-center space-y-4">
              <span className="text-secondary text-lg">
                {formatTime(obj.dt_txt)}
              </span>
              <img
                src={`http://openweathermap.org/img/w/${obj.weather[0].icon}.png`}
                alt={obj.weather[0].icon}
              />
              <span className="text-primary text-2xl font-bold">
                {obj.main.temp}°
              </span>
            </div>
            {index !==
              weeklyWeather.list.slice(0, props.noOfTime).length - 1 && (
              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default DailyForcast
