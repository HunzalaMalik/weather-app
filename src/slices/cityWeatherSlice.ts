import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface cityWeatherState {
  time: string
  name: string
  temp: number
  icon: string
}

const initialState: cityWeatherState[] = []

export const cityWeatherSlice = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    setCityWeather: (state, action: PayloadAction<cityWeatherState>) => {
      return [...state, action.payload]
    },
    deleteCityWeatherByName: (state, action: PayloadAction<string>) => {
      return state.filter((weather) => weather.name !== action.payload)
    },
  },
})

export const { setCityWeather, deleteCityWeatherByName } =
  cityWeatherSlice.actions

export const selectcityWeather = (state: RootState) => state.cityWeather

export default cityWeatherSlice.reducer
