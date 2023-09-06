import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import selectedPageReducer from "../slices/selectedPageSlice"
import currentWeatherReducer from "../slices/currentWeatherSlice"
import weeklyWeatherReducer from "../slices/weeklyWeatherSlice"
import loadingReducer from "../slices/loadingSlice"
import weatherCardClickedReducer from "../slices/weatherCardClickedSlice"
import queryReducer from "../slices/querySlice"
import cityWeatherReducer from "../slices/cityWeatherSlice"

const rootReducer = combineReducers({
  counter: counterReducer,
  selectedPage: selectedPageReducer,
  currentWeather: currentWeatherReducer,
  weeklyWeather: weeklyWeatherReducer,
  loading: loadingReducer,
  weatherCardClicked: weatherCardClickedReducer,
  query: queryReducer,
  cityWeather: cityWeatherReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
