import { configureStore } from "@reduxjs/toolkit";
import menuCanvasSlice from './slices/menuCanvas'

export const store = configureStore({
   reducer: {
    menuCanvas: menuCanvasSlice
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch