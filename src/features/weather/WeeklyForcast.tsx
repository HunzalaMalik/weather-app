import React from "react"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import AirIcon from "@mui/icons-material/Air"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import Brightness7Icon from "@mui/icons-material/Brightness7"

const WeeklyForcast: React.FC = () => {
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
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
    {
      day: "Fri",
      date: "37/21",
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
    {
      day: "Sat",
      date: "37/21",
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
    {
      day: "Sun",
      date: "37/21",
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
  ]

  return (
    <div className="px-6 py-4">
      <span className="text-secondary ">7-Day Forcast</span>
      <div className="">
        {OBJECTS.map((obj, index) => (
          <div
            key={index}
            className={`flex justify-between py-8 ${
              index === 0 ? "" : "border-t"
            }`}
          >
            <span className="text-secondary text-lg">{obj.day}</span>
            <div>{obj.icon}</div>
            <div>
              <span className="text-primary ">{obj.date.split("/")[0]}</span>
              <span className="text-secondary">
                {"/" + obj.date.split("/")[1]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeeklyForcast
