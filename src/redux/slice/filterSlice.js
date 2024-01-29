import {createSlice} from '@reduxjs/toolkit'


const initialState={
    pizzaType:0
}

const filterSlice=createSlice({
    name:'filter',
    initialState,
    reducers:{
        changeType(state, action){
            state.pizzaType=action.payload
        }
    }
})

export const {changeType}=filterSlice.actions

export default filterSlice.reducer