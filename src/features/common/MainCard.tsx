import React, { ReactNode } from "react"

interface Iprops {
  children: ReactNode
}

const MainCard: React.FC<Iprops> = ({ children }) => {
  return (
    <div className="max-w-7xl p-5 bg-component shadow-xl ">
      <div>{children}</div>
    </div>
  )
}

export default MainCard
