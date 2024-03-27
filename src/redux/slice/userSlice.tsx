import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetails = createAsyncThunk('userDetails', (payload:any) => {
    const token = localStorage.getItem("token");
    const respo = axios.post("https://server-production-fa75.up.railway.app/api/token", {token})
    .then(res => {console.log(res); return res.data})
    .catch(() => {
        const newlink = axios.post("https://server-production-fa75.up.railway.app/api/login/cus", {username: payload.username, password: payload.password})
        .then(res => {console.log(res); localStorage.setItem("token", res.data.token); return res.data})
        return newlink
    })
    return respo
})

const logout = (state:any) => {
    state.isDoc= false,
    state.islogged= false,
    state.isloading= true,
    state.username= '',
    state.error= ''
}
const Slice:any = {
    name: 'user',
    initialState: {
        isDoc: false,
        islogged: false,
        isloading: true,
        username: '',
        error: ''
    },
    reducer: {
        logout
    },
    extraReducers: (builder:any) => {
        builder.addCase(fetchUserDetails.fulfilled, (state:any, action:any) => {
            state.isDoc = action.payload.isDoc;
            state.islogged = true;
            state.isloading = false;
            state.username = action.payload.username
        });
        builder.addCase(fetchUserDetails.pending, (state:any) => {
            state.isloading = true;
        });
        builder.addCase(fetchUserDetails.rejected, (state:any, action:any) => {
            state.isloading = false;
            state.error = action.payload.error
        })
    },

}

const UserSlice:any = createSlice(Slice)

export default UserSlice.reducer