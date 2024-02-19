import { createSlice } from "@reduxjs/toolkit"

const initialState={
    comments:[]
}

export const commentsSlice=createSlice({
    name: 'commets',
    initialState,
    reducers:{
        addComment(state, action){
            const oldEl=state.comments.find((el) => el.id==action.payload.id)
            if(!oldEl){
                state.comments.push(action.payload)
            }
            else{
                state.comments[state.comments.indexOf(oldEl)].comments.push(...action.payload.comments)
            }
        }
    }
})

export const {addComment}=commentsSlice.actions

export default commentsSlice.reducer