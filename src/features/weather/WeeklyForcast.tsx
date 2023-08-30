import React from "react"
import { Divider } from "@mui/material"

interface Iprops {
  days: number
}

const WeeklyForcast: React.FC<Iprops> = (props: Iprops) => {
  const OBJECTS = [
    {
      day: "Today",
      date: "36/21",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      day: "Tue",
      date: "37/21",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      day: "Wed",
      date: "37/21",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      day: "Thu",
      date: "37/21",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      day: "Fri",
      date: "37/21",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      day: "Sat",
      date: "37/21",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
    {
      day: "Sun",
      date: "37/21",
      icon: <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />,
    },
  ]

  return (
    <div
      className={`px-6 py-4 space-y-2 ${
        props.days === 3 ? "h-[70%]" : "h-[90%]"
      }`}
    >
      <span className="text-secondary ">{props.days}-Day Forcast</span>
      <div className="flex flex-col justify-around h-full">
        {OBJECTS.slice(0, props.days).map((obj, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center">
              <span className="text-secondary text-lg">{obj.day}</span>
              <div className="flex items-center">
                {obj.icon}
                <span>Sunny</span>
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
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default WeeklyForcast
