import { createSlice } from "@reduxjs/toolkit";

const ideaSlice = createSlice({
    name: "ideas",
    initialState:[
        {id: 1, title: "idea1", completed: false},
        {id: 2, title: "idea2", completed: false},
        {id: 3, title: "idea3", completed: false},
    ],
    reducers: {
        addIdea: (state, action) => {
          const newIdea = {
            id: Date.now(),
            title: action.payload.title,
            completed: false
          };
          state.push(newIdea);
        }
    }
})

export const { addIdea } = ideaSlice.actions;

export default ideaSlice.reducer;