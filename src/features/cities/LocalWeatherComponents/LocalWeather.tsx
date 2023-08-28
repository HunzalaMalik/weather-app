import React from "react"
import WeatherCard from "./WeatherCard"

interface Iprops {
  clicked: boolean
}

const LocalWeather: React.FC<Iprops> = (props: Iprops) => {
  const OBJECTS = [
    {
      time: "6:00 AM",
      name: "Madrid",
      temp: "25 °",
      icon: "",
    },
    {
      time: "9:00 AM",
      name: "Madrid",
      temp: "28 °",
      icon: "",
    },
    {
      time: "12:00 PM",
      name: "Madrid",
      temp: "33 °",
      icon: "",
    },
  ]

  return (
    <div className="flex flex-col space-y-3 overflow-y-auto h-[calc(100vh-10rem)]">
      {OBJECTS.map((obj, index) => (
        <button key={index}>
          <WeatherCard
            time={obj.time}
            name={obj.name}
            temp={obj.temp}
            icon={obj.icon}
            clicked={props.clicked}
          />
        </button>
      ))}
    </div>
  )
}

export default LocalWeather
