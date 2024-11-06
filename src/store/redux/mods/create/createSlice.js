import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    user:{
        name: null,
        email: null,
        password:null
    }
}