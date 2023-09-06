import { Divider } from "@mui/material"
import React from "react"
import { useAppDispatch } from "../../../app/hooks"
import { deleteCityWeatherByName } from "../../../slices/cityWeatherSlice"

interface Iprops {
  time: string
  name: string
  temp: number
  icon: string
  index?: number
  clicked?: boolean
  handleClick?: Function
}

const WeatherCard: React.FC<Iprops> = (props: Iprops) => {
  const dispatch = useAppDispatch()

  return (
    <div
      className={`flex rounded-3xl p-6 ${props.clicked ? "" : "bg-component"}`}
    >
      <div
        className="flex justify-between cursor-pointer w-9 rounded hover:bg-red-900"
        onClick={() => dispatch(deleteCityWeatherByName(props.name))}
      >
        <button className="pl-3">x</button>
        <Divider orientation="vertical" sx={{ bgcolor: "white" }} />
      </div>

      <div
        className="flex justify-between w-full cursor-pointer"
        onClick={() => {
          props.handleClick && props.handleClick(props.index, props.name)
        }}
      >
        <div className="flex">
          <img
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt={`${props.icon}`}
          />
          <div className="flex flex-col items-start">
            <span className="font-bold text-primary text-2xl">
              {props.name}
            </span>
            <span className="text-sm text-secondary">{props.time}</span>
          </div>
        </div>

        <span className="text-primary text-3xl col-span-2">{props.temp}</span>
      </div>
    </div>
  )
}

export default WeatherCard
