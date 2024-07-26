import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";

export const rootReducer = combineReducers(
    {
          users:  userReducer
    },
)