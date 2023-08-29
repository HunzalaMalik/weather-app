import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface SelectedPageState {
  value: string
}

const initialState: SelectedPageState = {
  value: "",
}

export const selectedPageSlice = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    setPagePath: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setPagePath } = selectedPageSlice.actions

export const selectCurrentPage = (state: RootState) => state.selectedPage.value

export default selectedPageSlice.reducer
