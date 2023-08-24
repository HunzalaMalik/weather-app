import Sidebar from "./common/sidebar/Sidebar"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  )
}

export default HomePage
