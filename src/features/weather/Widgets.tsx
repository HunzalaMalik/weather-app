import React from "react"

const Widgets: React.FC = () => {
  return (
    <div className="rounded-3xl flex justify-between px-10 py-5 h-full">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-around space-y-1">
          <span className="font-bold text-primary text-3xl">Madrid</span>
          <span className="text-xs text-secondary">Chance of rain: 0%</span>
        </div>
        <span className="font-bold text-primary text-5xl">31 °</span>
      </div>

      <img src={`http://openweathermap.org/img/w/01d.png`} alt={`01d`} />
    </div>
  )
}

export default Widgets
