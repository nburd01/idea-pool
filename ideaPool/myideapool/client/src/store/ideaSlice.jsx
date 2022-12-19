import { createSlice } from "@reduxjs/toolkit";

const ideaSlice = createSlice({
    name: "ideas",
    initialState:[
        {id: 1, title: "idea1", impact: 6,	ease: 8, confidence: 9, completed: false},
        {id: 2, title: "idea2", impact: 7,	ease: 7, confidence: 4, completed: false},
        {id: 3, title: "idea3", impact: 8,	ease: 6, confidence: 7, completed: false},
    ],
    reducers: {
        addIdea: (state, action) => {
          const newIdea = {
            id: Date.now(),
            title: action.payload.title,
            impact: action.payload.impact,
            ease: action.payload.ease,
            confidence: action.payload.confidence,
            completed: false
          };
          state.push(newIdea);
        },
        deleteIdea: (state, action) => {
          return state.filter((idea) => idea.id !== action.payload.id);
        }
    }
})

export const { addIdea, deleteIdea } = ideaSlice.actions;

export default ideaSlice.reducer;