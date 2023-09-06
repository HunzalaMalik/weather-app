import React from "react"
import { selectQuery, setQuery } from "../../../slices/querySlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getDataByName } from "../../../app/actions"
import WeatherCard from "../../cities/LocalWeatherComponents/WeatherCard"

const SearchField = () => {
  const query = useAppSelector(selectQuery)
  const dispatch = useAppDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getDataByName(dispatch, e.currentTarget.value)
    }
  }

  const clearInput = () => {
    dispatch(setQuery(""))
  }

  return (
    <div>
      <div className="w-[65%] relative">
        <input
          placeholder="Search for cities"
          className="bg-component rounded-2xl h-14 w-full p-3 shadow ml-8"
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          value={query}
        />
        {query && (
          <div
            className="absolute cursor-pointer top-4 right-0"
            onClick={clearInput}
          >
            ✕
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchField
