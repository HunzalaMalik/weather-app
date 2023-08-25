import React from "react"
import Brightness7Icon from "@mui/icons-material/Brightness7"

const Widgets: React.FC = () => {
  return (
    <div className="rounded-3xl grid grid-cols-2 px-12">
      <div className="flex flex-col justify-around">
        <div className="flex flex-col justify-around space-y-1">
          <span className="font-bold text-primary text-3xl">Madrid</span>
          <span className="text-xs text-secondary">Chance of rain: 0%</span>
        </div>
        <span className="font-bold text-primary text-5xl">31 °</span>
      </div>

      <span className="">
        <Brightness7Icon style={{ color: "gray", float: "right" }} />
      </span>
    </div>
  )
}

export default Widgets
