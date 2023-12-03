import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user :{username:"redian"},
    isLoading : true
}

export const Userslice = createSlice({
    name: "user",
    initialState ,
    reducers : {
        LoginUser : (state , action) => {
            state.user = action .payload;
        },
        logoutUser : (state) => {
            state.user = null;
        },
        setLoading : (state , action) => {
            state.isLoading = action .payload;
        }
    }
})

export const {LoginUser ,logoutUser, setLoading} = Userslice . actions;