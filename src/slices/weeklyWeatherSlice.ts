import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, store } from "../app/store"
import {
  getWeeklyWeather,
  getWeeklyWeatherByName,
} from "../api/weeklyWeatherAPI"
import { setLoading } from "./loadingSlice"
import { kelvinToCelcius } from "../app/actions"

interface City {
  id: number
  name: string
  coord: {
    lat: number
    lon: number
  }
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

interface Clouds {
  all: number
}

interface Wind {
  speed: number
  deg: number
  gust: number
}

interface Sys {
  pod: string
}

interface ListObject {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
}

interface WeeklyWeatherData {
  city: City
  cnt: number
  cod: number
  message: number
  list: ListObject[]
}

const initialState: WeeklyWeatherData = {
  city: {
    id: 0,
    name: "",
    coord: {
      lat: 0,
      lon: 0,
    },
    country: "",
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
  },
  cnt: 0,
  cod: 0,
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      sys: {
        pod: "",
      },
      dt_txt: "",
    },
  ],
  message: 0,
}

export const fetchWeeklyWeather = createAsyncThunk(
  "weather/fetchWeeklyWeather",
  async ({
    lat,
    long,
    shouldDisableLoading,
  }: {
    lat: number
    long: number
    shouldDisableLoading: boolean
  }) => {
    const response = await getWeeklyWeather(lat, long)
    if (shouldDisableLoading) store.dispatch(setLoading(false))
    return response
  },
)

export const fetchWeeklyWeatherByName = createAsyncThunk(
  "weather/fetchWeeklyWeatherByName",
  async ({
    name,
    shouldDisableLoading,
  }: {
    name: string
    shouldDisableLoading: boolean
  }) => {
    const response = await getWeeklyWeatherByName(name)
    if (shouldDisableLoading) store.dispatch(setLoading(false))
    return response
  },
)

export const WeeklyWeatherSlice = createSlice({
  name: "weeklyWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklyWeather.fulfilled, (state, { payload }) => {
        payload.list.forEach((item: ListObject) => {
          item.main.temp = kelvinToCelcius(item.main.temp)
          item.main.feels_like = kelvinToCelcius(item.main.feels_like)
          item.main.temp_min = kelvinToCelcius(item.main.temp_min)
          item.main.temp_max = kelvinToCelcius(item.main.temp_max)
        })
        return payload
      })
      .addCase(fetchWeeklyWeather.rejected, (state, action) => {
        console.error("Failed to fetch Weekly weather", action.error)
      })
      .addCase(fetchWeeklyWeatherByName.fulfilled, (state, { payload }) => {
        payload.list.forEach((item: ListObject) => {
          item.main.temp = kelvinToCelcius(item.main.temp)
          item.main.feels_like = kelvinToCelcius(item.main.feels_like)
          item.main.temp_min = kelvinToCelcius(item.main.temp_min)
          item.main.temp_max = kelvinToCelcius(item.main.temp_max)
        })
        return payload
      })
      .addCase(fetchWeeklyWeatherByName.rejected, (state, action) => {
        console.error("Failed to fetch Weekly weather", action.error)
      })
  },
})

export const weeklyWeatherSelector = (state: RootState) => state.weeklyWeather

export default WeeklyWeatherSlice.reducer
