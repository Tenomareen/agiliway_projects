import { createSlice } from "@reduxjs/toolkit";

export const modalSlice=createSlice({
    name: "modal",
    initialState: { show: false },
    reducers: {
        toggleShow: state => {
            state.show = !state.show
        }
    }
});

export const { toggleShow } = modalSlice.actions;
export default modalSlice.reducer;