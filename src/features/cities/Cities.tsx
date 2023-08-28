import React, { useState } from "react"
import LocalWeather from "./LocalWeatherComponents/LocalWeather"
import LocalWeatherDetail from "./LocalWeatherDetail"

const Cities = () => {
  const [clicked, setClicked] = useState<boolean>(true)

  return (
    <>
      <div className="grid gap-4 col-span-7 ">
        <LocalWeather clicked />
      </div>
      <div className="col-span-3">
        <LocalWeatherDetail />
      </div>
    </>
  )
}

export default Cities
