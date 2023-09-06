import React from "react"
import WeatherCard from "./WeatherCard"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
  clickedValue,
  setClicked,
} from "../../../slices/weatherCardClickedSlice"
import { getDataByCords, getDataByName } from "../../../app/actions"
import { selectcityWeather } from "../../../slices/cityWeatherSlice"

interface Iprops {}

const LocalWeather: React.FC<Iprops> = (props: Iprops) => {
  const dispatch = useAppDispatch()
  const clicked = useAppSelector(clickedValue)
  const cityNames = useAppSelector(selectcityWeather)

  const handleClick = (index: number, name: string) => {
    if (clicked === index) {
      dispatch(setClicked(-1))
      navigator.geolocation.getCurrentPosition(function (position) {
        getDataByCords(
          dispatch,
          position.coords.latitude,
          position.coords.longitude,
        )
      })
    } else {
      dispatch(setClicked(index))
      getDataByName(dispatch, name)
    }
  }

  return (
    <div className="flex flex-col space-y-3 overflow-y-auto no-scrollbar h-[calc(100vh-10rem)]">
      {cityNames.length > 0 ? (
        cityNames.map((obj, index) => (
          <div key={index}>
            <WeatherCard
              time={obj.time}
              name={obj.name}
              temp={obj.temp}
              icon={obj.icon}
              clicked={clicked === index}
              index={index}
              handleClick={handleClick}
            />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-[calc(100vh-15rem)]">
          <span className="text-lg">No City Added</span>
        </div>
      )}
    </div>
  )
}

export default LocalWeather
