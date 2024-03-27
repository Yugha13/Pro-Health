import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const init:any = {
    data: [],
    isloading: true,
    error: ''
}

export const fetchAppointment = createAsyncThunk('userDetails', (payload:any) => {
    const token = localStorage.getItem("token");
    if(token){
        const respo = axios.post("https://server-production-fa75.up.railway.app/api/app", {token})
        .then(res => {console.log(res); return res.data})
        return respo
    }
})


const Slice = {
    name: 'appointment',
    initialState: init,
    extraReducers: (builder:any) => {
        builder.addCase(fetchAppointment.fulfilled, (state:any, action:any) => {
            state.isloading = false;
            state.data = action.payload.appointment;
        });
        builder.addCase(fetchAppointment.pending, (state:any) => {
            state.isloading = true;
        });
        builder.addCase(fetchAppointment.rejected, (state:any, action:any) => {
            state.isloading = false;
            state.error = action.payload.error
        })
    },
}

const appointmentSlice = createSlice(Slice as any)

export default appointmentSlice.reducer;