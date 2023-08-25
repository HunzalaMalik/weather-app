import React from "react"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import AirIcon from "@mui/icons-material/Air"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import Brightness7Icon from "@mui/icons-material/Brightness7"

const DailyForcast: React.FC = () => {
  const OBJECTS = [
    {
      time: "6:00 AM",
      text: "25 °",
      icon: <DeviceThermostatIcon style={{ color: "gray" }} />,
    },
    {
      time: "9:00 AM",
      text: "28 °",
      icon: <AirIcon style={{ color: "gray" }} />,
    },
    {
      time: "12:00 PM",
      text: "33 °",
      icon: <WaterDropIcon style={{ color: "gray" }} />,
    },
    {
      time: "3:00 PM",
      text: "34 °",
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
    {
      time: "6:00 PM",
      text: "32 °",
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
    {
      time: "9:00 PM",
      text: "30 °",
      icon: <Brightness7Icon style={{ color: "gray" }} />,
    },
  ]
  return (
    <div className="bg-component rounded-3xl px-6 py-4 space-y-4">
      <span className="text-secondary">Today's Forcast</span>

      <div className="flex justify-around py-3">
        {OBJECTS.map((obj, index) => (
          <div
            key={index}
            className={`flex flex-col items-center space-y-4  ${
              index === 0 ? "" : "border-l pl-10"
            }`}
          >
            <span className="text-secondary text-lg">{obj.time}</span>
            <div>{obj.icon}</div>

            <span className="text-primary text-2xl font-bold">{obj.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyForcast
