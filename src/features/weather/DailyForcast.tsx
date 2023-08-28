import React from "react"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import AirIcon from "@mui/icons-material/Air"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import { Divider } from "@mui/material"

interface Iprops {
  background: boolean
}

const DailyForcast: React.FC<Iprops> = (props: Iprops) => {
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
  ]
  return (
    <div
      className={`rounded-3xl px-6 py-4 space-y-4 ${
        props.background ? "bg-component" : ""
      }`}
    >
      <span className="text-secondary">Today's Forcast</span>

      <div className="flex justify-around py-3">
        {OBJECTS.map((obj, index) => (
          <>
            <div key={index} className="flex flex-col items-center space-y-4">
              <span className="text-secondary text-lg">{obj.time}</span>
              <div>{obj.icon}</div>
              <span className="text-primary text-2xl font-bold">
                {obj.text}
              </span>
            </div>
            {index !== OBJECTS.length - 1 && (
              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white" }}
              />
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default DailyForcast
