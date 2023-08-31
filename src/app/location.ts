import { fetchCurrentWeather } from "../slices/currentWeatherSlice"
import { setLoading } from "../slices/loadingSlice"
import { fetchWeeklyWeather } from "../slices/weeklyWeatherSlice"

type Location = {
  name: string
  long: number
  lat: number
}

export const locations: Location[] = [
  {
    name: "New York",
    long: -74.006,
    lat: 40.7128,
  },
  {
    name: "San Francisco",
    long: -122.4194,
    lat: 37.7749,
  },
  {
    name: "London",
    long: -0.1278,
    lat: 51.5074,
  },
  {
    name: "Scotland",
    long: -4.202646,
    lat: 56.490669,
  },
  {
    name: "Austrailia",
    long: 133.775131,
    lat: -25.274399,
  },
  {
    name: "Algeria",
    long: 1.659626,
    lat: 28.033886,
  },
  {
    name: "Turkey",
    long: 35.24332,
    lat: 38.963745,
  },
  {
    name: "Spain",
    long: -3.74922,
    lat: 40.463669,
  },
]

export const getLocationByName = (name: string): Location | null => {
  const location = locations.find((loc) => loc.name === name)
  return location ? location : null
}

export const getNames = () => {
  return locations.map((obj) => {
    return obj.name
  })
}

export const getData = (lat: number, long: number, dispatch: Function) => {
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
