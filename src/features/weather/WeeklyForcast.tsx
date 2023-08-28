import React from "react"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import AirIcon from "@mui/icons-material/Air"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import { Divider } from "@mui/material"

interface Iprops {
  days: number
}

const WeeklyForcast: React.FC<Iprops> = (props: Iprops) => {
  const OBJECTS = [
    {
      day: "Today",
      date: "36/21",
      icon: <DeviceThermostatIcon style={{ color: "gray" }} />,
    },
    {
      day: "Tue",
      date: "37/21",
      icon: <AirIcon style={{ color: "gray" }} />,
    },
    {
      day: "Wed",
      date: "37/21",
      icon: <WaterDropIcon style={{ color: "gray" }} />,
    },
    {
      day: "Thu",
      date: "37/21",
      icon: <WaterDropIcon style={{ color: "gray" }} />,
    },
    {
      day: "Fri",
      date: "37/21",
      icon: <WaterDropIcon style={{ color: "gray" }} />,
    },
    {
      day: "Sat",
      date: "37/21",
      icon: <WaterDropIcon style={{ color: "gray" }} />,
    },
    {
      day: "Sun",
      date: "37/21",
      icon: <WaterDropIcon style={{ color: "gray" }} />,
    },
  ]

  return (
    <div className="px-6 py-4 h-[90%] space-y-2">
      <span className="text-secondary ">{props.days}-Day Forcast</span>
      <div className="flex flex-col justify-around h-full">
        {OBJECTS.slice(0, props.days).map((obj, index) => (
          <>
            <div key={index} className="flex justify-between">
              <span className="text-secondary text-lg">{obj.day}</span>
              <div>
                {obj.icon}
                <span className="ml-3">Sunny</span>
              </div>
              <div>
                <span className="text-primary ">{obj.date.split("/")[0]}</span>
                <span className="text-secondary">
                  {"/" + obj.date.split("/")[1]}
                </span>
              </div>
            </div>
            {index !== props.days - 1 && (
              <Divider flexItem sx={{ bgcolor: "white" }} />
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default WeeklyForcast
