import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalOpenFunc: (state) => {
            state.modal = !state.modal;
        }
    }
});

export const { modalOpenFunc } = modalSlice.actions;
export default modalSlice.reducer;