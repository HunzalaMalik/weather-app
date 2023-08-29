import React from "react"
import Widgets from "../weather/Widgets"
import DailyForcast from "../weather/DailyForcast"
import WeeklyForcast from "../weather/WeeklyForcast"
import { Divider } from "@mui/material"

const LocalWeatherDetail: React.FC = () => {
  return (
    <div className="grid grid-rows-10 h-[calc(100vh-10rem)]">
      <Widgets />
      <Divider variant="middle" sx={{ bgcolor: "white" }} />
      <DailyForcast background={false} noOfTime={3} />
      <Divider variant="middle" sx={{ bgcolor: "white" }} />
      <WeeklyForcast days={3} />
    </div>
  )
}

export default LocalWeatherDetail
