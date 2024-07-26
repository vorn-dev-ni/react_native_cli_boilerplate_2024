import { createSlice } from "@reduxjs/toolkit";
type initStateProps = {
    currentUser:string,
    session_id:string
}
const initState:initStateProps = {
    currentUser:"Panhavorn",
    session_id:"x@853"
}
 const userSlice = createSlice({
  name:"users",
  reducers:{
    getUser:(state,action)=>{

    },
    deleteUser:(state,action)=>{

    }
  },
  initialState:initState,
  extraReducers(builder) {
      
  },
})
export const userReducer = userSlice.reducer
export const {
    getUser,deleteUser
} = userSlice.actions