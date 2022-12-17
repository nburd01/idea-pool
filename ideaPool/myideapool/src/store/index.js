import {configureStore} from '@reduxjs/toolkit';
import ideaReducer from './ideaSlice'

export default configureStore({
    reducer: {
        ideas: ideaReducer,
    },
});