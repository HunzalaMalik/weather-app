import React, { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { currentWeatherSelector } from "../../slices/currentWeatherSlice"

interface Iprops {
  name?: string
  rainPercentage?: number
  temp?: number
  iconID?: string
}

const Widgets: React.FC<Iprops> = (props: Iprops) => {
  const currentWeather = useAppSelector(currentWeatherSelector)

  const [name, setName] = useState<string>("")
  const [rainPercentage, setRainPercentage] = useState<number>(0)
  const [temp, setTemp] = useState<number>(0)
  const [iconID, setIconID] = useState<string>("")

  useEffect(() => {
    setName(currentWeather.name)
    setRainPercentage(0)
    setTemp(currentWeather.main.temp)
    setIconID(currentWeather.weather[0].icon)
  }, [
    currentWeather.name,
    rainPercentage,
    currentWeather.main.temp,
    currentWeather.weather[0].icon,
    currentWeather.weather,
  ])

  return (
    <div className="flex justify-between h-full">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-around space-y-1 mb-3">
          <span className="font-bold text-primary text-3xl">{name}</span>
          <span className="text-xs text-secondary">
            Chance of rain: {rainPercentage}%
          </span>
        </div>
        <span className="font-bold text-primary text-5xl">{temp}°</span>
      </div>

      <img src={`http://openweathermap.org/img/w/${iconID}.png`} alt={iconID} />
    </div>
  )
}

export default Widgets
