import React from "react"
import { Divider } from "@mui/material"

interface Iprops {
  background: boolean
  noOfTime: number
}

const DailyForcast: React.FC<Iprops> = (props: Iprops) => {
  const OBJECTS = [
    {
      time: "6:00 AM",
      text: "25 °",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      time: "9:00 AM",
      text: "28 °",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      time: "12:00 PM",
      text: "33 °",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      time: "3:00 PM",
      text: "34 °",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      time: "6:00 PM",
      text: "32 °",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      time: "9:00 PM",
      text: "30 °",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
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
        {OBJECTS.slice(0, props.noOfTime).map((obj, index) => (
          <React.Fragment key={index}>
            <div key={index} className="flex flex-col items-center space-y-4">
              <span className="text-secondary text-lg">{obj.time}</span>
              <div>{obj.icon}</div>
              <span className="text-primary text-2xl font-bold">
                {obj.text}
              </span>
            </div>
            {index !== OBJECTS.slice(0, props.noOfTime).length - 1 && (
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
