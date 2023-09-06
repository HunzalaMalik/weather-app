import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface QueryState {
  value: string
}

const initialState: QueryState = {
  value: "",
}

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setQuery } = querySlice.actions

export const selectQuery = (state: RootState) => state.query.value

export default querySlice.reducer
