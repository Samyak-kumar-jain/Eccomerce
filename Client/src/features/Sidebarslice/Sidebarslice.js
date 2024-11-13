import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activesidebar : false,
};

const sidbarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers:{
        toggleAdmin :(state)=>{
            state.activesidebar = !state.activesidebar
        }
    }
})

export const {toggleAdmin} = sidbarSlice.actions;
export default sidbarSlice.reducer;