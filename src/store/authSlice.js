//this is used for checking if user is logged in or logged out it is a store
import { createSlice } from "@reduxjs/toolkit"
const initialState={
    status:false,//initially no user is there and no userData is there
    userData:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,//state is used to check and action whichever data user has entered 
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})
export const{login,logout}=authSlice.actions
export default authSlice.reducer