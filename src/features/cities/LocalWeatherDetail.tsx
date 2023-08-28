import React from "react"
import Widgets from "../weather/Widgets"
import DailyForcast from "../weather/DailyForcast"
import WeeklyForcast from "../weather/WeeklyForcast"
import { Divider } from "@mui/material"

const LocalWeatherDetail: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-[calc(100vh-10rem)]">
      <div className="flex-1 py-5">
        <Widgets />
      </div>
      <Divider variant="middle" sx={{ bgcolor: "white" }} />
      <div className="flex-grow-0 py-5">
        <DailyForcast background={false} />
      </div>
      <Divider variant="middle" sx={{ bgcolor: "white" }} />
      <div className="flex-grow py-2">
        <WeeklyForcast days={3} />
      </div>
    </div>
  )
}

export default LocalWeatherDetail
