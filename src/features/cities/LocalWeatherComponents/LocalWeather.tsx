import React from "react"
import WeatherCard from "./WeatherCard"
import { getData, getLocationByName, getNames } from "../../../app/location"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
  clickedValue,
  setClicked,
} from "../../../slices/weatherCardClickedSlice"

interface Iprops {}

const LocalWeather: React.FC<Iprops> = (props: Iprops) => {
  const cityNames = getNames()
  const dispatch = useAppDispatch()
  const clicked = useAppSelector(clickedValue)

  const handleClick = (index: number, name: string) => {
    if (clicked === index) {
      dispatch(setClicked(-1))
      navigator.geolocation.getCurrentPosition(function (position) {
        getData(position.coords.latitude, position.coords.longitude, dispatch)
      })
    } else {
      dispatch(setClicked(index))
      const location = getLocationByName(name)
      location && getData(location?.lat, location?.long, dispatch)
    }
  }

  return (
    <div className="flex flex-col space-y-3 overflow-y-auto no-scrollbar h-[calc(100vh-10rem)]">
      {cityNames.map((obj, index) => (
        <button key={index} onClick={() => handleClick(index, obj)}>
          <WeatherCard
            time="6:00 AM"
            name={obj}
            temp="28°"
            icon=""
            clicked={clicked === index}
          />
        </button>
      ))}
    </div>
  )
}

export default LocalWeather
