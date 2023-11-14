import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        token:null,
    },

    reducers:{
        
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload.userDetails
            state.token=action.payload.accessToken 
        },
        
        logoutSuccess:(state)=>{
            state.currentUser=null;
            state.token=null;
        },
        
       
    }//just in redux toolkit 
    
});

export const {loginSuccess,logoutSuccess}=userSlice.actions;
export default userSlice.reducer;
//reducer is combination of actions(functions)

