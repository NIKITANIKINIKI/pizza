import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    items:[], 
    status: 'loading',
    totalPages:0
}

export const fetchItems=createAsyncThunk(
    'pizza/fetchByItems',
    async (params) =>{
        const {searchTitle, currentPage, pizzaType, activeObj }=params
        const data = await axios.get(`https://6a54dec2369a2d50.mokky.dev/types?name=*${searchTitle}&page=${currentPage}&limit=${8}&${pizzaType > 0 ? `category=${pizzaType}` : ""}&sortBy=${activeObj.sortEl}`)
        return data
    }
)

const pizzaSlice=createSlice({
    name: 'pizza',
    initialState,
    reducers:{
        setItems(state, action){
            state.items=action.payload
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchItems.fulfilled, (state, action) =>{
            state.items=action.payload.data.items
            state.totalPages=action.payload.data.meta.total_pages
            state.status='success'
        })
        .addCase(fetchItems.pending, (state)=>{
            state.items=[]
            state.status='loading'
        })
        .addCase(fetchItems.rejected, (state) => {
            state.items=[]
            state.status='error'
        })
    }
})

export const {setItems}=pizzaSlice.actions

export default pizzaSlice.reducer
