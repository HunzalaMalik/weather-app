import {
  fetchCurrentWeather,
  fetchCurrentWeatherByName,
} from "../slices/currentWeatherSlice"
import { setLoading } from "../slices/loadingSlice"
import {
  fetchWeeklyWeather,
  fetchWeeklyWeatherByName,
} from "../slices/weeklyWeatherSlice"

export const kelvinToCelcius = (temp: number): number => {
  return Math.round(temp - 273)
}

export const getDataByCords = (
  dispatch: Function,
  lat: number,
  long: number,
) => {
  dispatch(setLoading(true))

  dispatch(
    fetchCurrentWeather({
      lat,
      long,
      shouldDisableLoading: false,
    }),
  )

  dispatch(
    fetchWeeklyWeather({
      lat,
      long,
      shouldDisableLoading: true,
    }),
  )
}

export const getDataByName = (dispatch: Function, name: string) => {
  dispatch(setLoading(true))

  dispatch(
    fetchCurrentWeatherByName({
      name,
      shouldDisableLoading: false,
    }),
  )

  dispatch(
    fetchWeeklyWeatherByName({
      name,
      shouldDisableLoading: true,
    }),
  )
}
