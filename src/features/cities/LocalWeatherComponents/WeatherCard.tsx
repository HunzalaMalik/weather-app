import React from "react"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"

interface Iprops {
  time: string
  name: string
  temp: string
  icon: string
  clicked: boolean
}

const WeatherCard: React.FC<Iprops> = (props: Iprops) => {
  return (
    <div
      className={`flex justify-between rounded-3xl px-8 py-5 ${
        !props.clicked ? "" : "bg-component"
      }`}
    >
      <div className="flex justify-between w-36">
        <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />

        <div className="flex flex-col items-start">
          <span className="font-bold text-primary text-2xl">{props.name}</span>
          <span className="text-sm text-secondary">{props.time}</span>
        </div>
      </div>

      <span className="text-primary text-3xl">{props.temp}</span>
    </div>
  )
}

export default WeatherCard
