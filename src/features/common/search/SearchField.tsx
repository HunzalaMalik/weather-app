import React, { useEffect, useState } from "react"
import { getData, getLocationByName, getNames } from "../../../app/location"
import { useAppDispatch } from "../../../app/hooks"
import { setClicked } from "../../../slices/weatherCardClickedSlice"

const SearchField = () => {
  const [query, setQuery] = useState("")
  const [inputQuery, setInputQuery] = useState("")
  const [names, setNames] = useState<string[]>([])
  const dispatch = useAppDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setInputQuery(e.target.value)
  }

  useEffect(() => {
    setNames(getNames())
  }, [])

  useEffect(() => {
    const location = getLocationByName(inputQuery)
    location && getData(location?.lat, location?.long, dispatch)
  }, [inputQuery, dispatch])

  const filteredNames = names?.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase()),
  )

  const handleItemClick = (name: string) => {
    setInputQuery(name)
    setQuery("")
    dispatch(setClicked(-1))
  }

  const clearInput = () => {
    setInputQuery("")
    setQuery("")
    navigator.geolocation.getCurrentPosition(function (position) {
      getData(position.coords.latitude, position.coords.longitude, dispatch)
    })
  }

  return (
    <div className="relative">
      <input
        placeholder="Search for cities"
        className="bg-component rounded-2xl h-14 w-4/6 p-3 shadow ml-8"
        onChange={(e) => handleInput(e)}
        value={inputQuery}
      />
      {inputQuery && (
        <div
          className="absolute top-4 right-[37rem] cursor-pointer"
          onClick={clearInput}
        >
          ✕
        </div>
      )}
      {query && (
        <div className="absolute top-16 left-0 ml-8 bg-component rounded-2xl shadow w-4/6">
          {filteredNames?.length > 0 ? (
            filteredNames?.map((name, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-gray-200 p-3"
                onClick={() => handleItemClick(name)}
              >
                {name}
              </div>
            ))
          ) : (
            <div className="p-3">No cities found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchField
