import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface weatherCardClickedState {
  value: number
}

const initialState: weatherCardClickedState = {
  value: -1,
}

export const weatherCardClickedSlice = createSlice({
  name: "weatherCardClicked",
  initialState,
  reducers: {
    setClicked: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setClicked } = weatherCardClickedSlice.actions

export const clickedValue = (state: RootState) => state.weatherCardClicked.value

export default weatherCardClickedSlice.reducer
