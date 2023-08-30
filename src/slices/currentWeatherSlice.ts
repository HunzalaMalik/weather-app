import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, store } from "../app/store"
import getCurrentWeather from "../api/CurrentWeatherAPI"
import { setLoading } from "./loadingSlice"

interface Coord {
  lon: number
  lat: number
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
  humidity: number
}

interface Wind {
  speed: number
  deg: number
}

interface Clouds {
  all: number
}

interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface currentWeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

const initialState: currentWeatherData = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
}

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrentWeather",
  async ({
    lat,
    long,
    shouldDisableLoading,
  }: {
    lat: number
    long: number
    shouldDisableLoading: boolean
  }) => {
    const response = await getCurrentWeather(lat, long)
    if (shouldDisableLoading) store.dispatch(setLoading(false))

    return response
  },
)

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.fulfilled, (state, { payload }) => {
        return payload
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        console.error("Failed to fetch current weather", action.error)
      })
  },
})

export const currentWeatherSelector = (state: RootState) => state.currentWeather

export default currentWeatherSlice.reducer
