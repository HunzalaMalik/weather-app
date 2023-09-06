import React from "react"
import LocalWeather from "./LocalWeatherComponents/LocalWeather"
import LocalWeatherDetail from "./LocalWeatherDetail"

const Cities = () => {
  return (
    <>
      <div className="grid gap-4 col-span-7 mr-4">
        <LocalWeather />
      </div>
      <div className="col-span-3">
        <LocalWeatherDetail />
      </div>
    </>
  )
}

export default Cities
