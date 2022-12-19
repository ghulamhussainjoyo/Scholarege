import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";



interface IState {
    error: boolean,
    message: string
}

const initialState: IState = {
    error: false,
    message: ''

}
export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotifaction: (state, action: PayloadAction<{ [key: string]: any }>) => {

            for (let key of Object.keys(action.payload)) {
                if (key === 'message') {
                    state.message = action.payload.message
                }

                if (key === 'error') {
                    state.error = action.payload.error
                }
            }
        },
        setNotifactionError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload
        }


    },
});


export const { setNotifaction, setNotifactionError } = notificationSlice.actions;