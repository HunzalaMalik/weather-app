import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectLoading } from "../slices/loadingSlice"
import Loader from "./common/Loader"
import Sidebar from "./common/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import { getDataByCords } from "../app/actions"

const HomePage = () => {
  const loading = useAppSelector(selectLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getDataByCords(
        dispatch,
        position.coords.latitude,
        position.coords.longitude,
      )
    })
  }, [dispatch])

  return <Sidebar>{loading ? <Loader /> : <Outlet />}</Sidebar>
}

export default HomePage
