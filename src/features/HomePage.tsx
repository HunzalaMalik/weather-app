import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectLoading } from "../slices/loadingSlice"
import Loader from "./common/Loader"
import Sidebar from "./common/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import { getData } from "../app/location"

const HomePage = () => {
  const loading = useAppSelector(selectLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getData(position.coords.latitude, position.coords.longitude, dispatch)
    })
  }, [dispatch])

  return <Sidebar>{loading ? <Loader /> : <Outlet />}</Sidebar>
}

export default HomePage
