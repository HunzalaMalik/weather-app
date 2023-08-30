import React, { useState } from "react"
import LocalWeather from "./LocalWeatherComponents/LocalWeather"
import LocalWeatherDetail from "./LocalWeatherDetail"
import { useAppSelector } from "../../app/hooks"
import { selectLoading } from "../../slices/loadingSlice"

const Cities = () => {
  const [clicked, setClicked] = useState<number>(-1)
  const loading = useAppSelector(selectLoading)

  return (
    <>
      <div className="grid gap-4 col-span-7 ">
        <LocalWeather clicked={clicked} setClicked={setClicked} />
      </div>
      <div className="col-span-3">
        <LocalWeatherDetail />
      </div>
    </>
  )
}

export default Cities
