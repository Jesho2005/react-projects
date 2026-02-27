import {createSlice} from '@reduxjs/toolkit'
const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const initialState={
    users:storedUsers,
}

export const Slice=createSlice({
    name:"users",
    initialState,
    reducers:{
        setUsers:(state,action) =>{
        const exists = state.users.find((user) => user.email === action.payload.email);
           if(!exists){
            state.users=[...state.users,action.payload];
            localStorage.setItem("users", JSON.stringify(state.users));
           }
        },
        deleteUser:(state,action)=>{
            state.users=state.users.filter((users,index)=>index!==action.payload)
            localStorage.setItem("users", JSON.stringify(state.users));
        }
    }

})
export const {setUsers,deleteUser}=Slice.actions;
export default Slice.reducer