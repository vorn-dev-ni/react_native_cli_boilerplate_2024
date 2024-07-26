import { logger } from 'redux-logger';
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { rootReducer } from "./root_reducer";

const store = configureStore({
      devTools: true,
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),


})


export type RootStore = ReturnType<typeof store.getState>

export default store 