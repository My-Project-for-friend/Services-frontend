import { createSlice } from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:"posts",
    initialState:null,
    reducers:{
        setPosts: (state,action)=>{
            return action.payload;
        }
    }
});

export const {setPosts}=postSlice.actions;

export default postSlice;