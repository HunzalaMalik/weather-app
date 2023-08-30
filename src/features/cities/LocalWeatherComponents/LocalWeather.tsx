import React from "react"
import WeatherCard from "./WeatherCard"

interface Iprops {
  clicked: number
  setClicked: Function
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

  const handleClick = (index: number) => {
    if (props.clicked === index) {
      props.setClicked(-1)
    } else {
      props.setClicked(index)
    }
  }

  return (
    <div className="flex flex-col space-y-3 overflow-y-auto h-[calc(100vh-10rem)]">
      {OBJECTS.map((obj, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          <WeatherCard
            time={obj.time}
            name={obj.name}
            temp={obj.temp}
            icon={obj.icon}
            clicked={props.clicked === index}
          />
        </button>
      ))}
    </div>
  )
}

export default LocalWeather
