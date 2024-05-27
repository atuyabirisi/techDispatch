import { createSlice } from "@reduxjs/toolkit";

interface MenuCanvas {
    isOpen: boolean;
}

const initialState: MenuCanvas = {
    isOpen: false,
}

const MenuCanvasSlice = createSlice({
    name: "menuOffCanvasSlice",
    initialState,
    reducers: {
        openMenuCanvas: ((state) => {
            state.isOpen = true;
        }),
        closeMenuCanvas: ((state) => {
            state.isOpen = false;
        }),
    }
});

export const { openMenuCanvas, closeMenuCanvas } = MenuCanvasSlice.actions
export default MenuCanvasSlice.reducer;