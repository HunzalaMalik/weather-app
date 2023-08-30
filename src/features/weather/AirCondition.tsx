import React from "react"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import AirIcon from "@mui/icons-material/Air"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import Brightness7Icon from "@mui/icons-material/Brightness7"

interface Iprops {
  temp: number
  windSpeed: number
  rainPercentage: number
  UVIndex: number
}

const AirCondition: React.FC<Iprops> = (props: Iprops) => {
  const OBJECTS = [
    {
      title: "Real Feel",
      text: `${props.temp}°`,
      icon: <DeviceThermostatIcon style={{ color: "gray" }} />,
    },
    {
      title: "Wind",
      text: `${props.windSpeed} km/h`,
      icon: <AirIcon style={{ color: "gray" }} />,
    },
    {
      title: "Chance of rain",
      text: `${props.rainPercentage}%`,
      icon: <WaterDropIcon style={{ color: "gray" }} />,
    },
    {
      title: "UV index",
      text: props.UVIndex,
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
  ]

  return (
    <div className="bg-component rounded-3xl px-6 py-4 space-y-4">
      <div className="flex justify-between">
        <span className="text-secondary">Air Conditions</span>
        <button className="bg-sky-600 text-sm text-white px-3 py-1 rounded-3xl">
          See more
        </button>
      </div>
      <div className="grid grid-cols-2 gap-y-4 gap-x-20">
        {OBJECTS.map((obj, index) => (
          <div key={index} className="flex">
            <div>{obj.icon}</div>
            <div className="flex flex-col ml-2">
              <span className="text-secondary text-lg">{obj.title}</span>
              <span className="text-primary text-2xl font-bold">
                {obj.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AirCondition
