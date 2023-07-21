import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user:""|| null
}

const authGlobal = createSlice({
  name: "emmanuel",
  initialState,
  reducers: {
    signInUser:(state:any,{payload}:any)=>{
state.user =payload
    },
    logOut:(state:any)=>{
state.user =null
    }
  }
});

export const {signInUser,logOut} = authGlobal.actions

export default authGlobal.reducer