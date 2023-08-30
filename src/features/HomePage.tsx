import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectLoading, setLoading } from "../slices/loadingSlice"
import Loader from "./common/Loader"
import Sidebar from "./common/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import { fetchCurrentWeather } from "../slices/currentWeatherSlice"
import { fetchWeeklyWeather } from "../slices/weeklyWeatherSlice"

const HomePage = () => {
  const loading = useAppSelector(selectLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))

    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        fetchCurrentWeather({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          shouldDisableLoading: false,
        }),
      )
      dispatch(
        fetchWeeklyWeather({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          shouldDisableLoading: true,
        }),
      )
    })
  }, [dispatch])

  return <Sidebar>{loading ? <Loader /> : <Outlet />}</Sidebar>
}

export default HomePage
