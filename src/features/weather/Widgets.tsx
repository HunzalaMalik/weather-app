import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { currentWeatherSelector } from "../../slices/currentWeatherSlice"
import { Button } from "@mui/material"
import { setCityWeather } from "../../slices/cityWeatherSlice"

interface Iprops {
  name?: string
  rainPercentage?: number
  temp?: number
  iconID?: string
  needButton?: boolean
}

const Widgets: React.FC<Iprops> = (props: Iprops) => {
  const currentWeather = useAppSelector(currentWeatherSelector)
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>("")
  const [rainPercentage, setRainPercentage] = useState<number>(0)
  const [temp, setTemp] = useState<number>(0)
  const [iconID, setIconID] = useState<string>("")

  const handleAddClick = () => {
    dispatch(
      setCityWeather({
        time: "6:00 AM",
        name: currentWeather.name,
        temp: currentWeather.main.temp,
        icon: currentWeather.weather[0].icon,
      }),
    )
  }

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
          {props.needButton && (
            <Button
              startIcon={"+"}
              variant="contained"
              className="w-1 mb-3"
              sx={{
                backgroundColor: "#243247",
                "&:hover": {
                  backgroundColor: "#171e29",
                },
              }}
              onClick={handleAddClick}
            >
              <span className="text-xs ">Add</span>
            </Button>
          )}

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
