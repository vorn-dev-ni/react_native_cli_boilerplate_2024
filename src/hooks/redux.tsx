import { Dispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";

export const useAppSeletor: TypedUseSelectorHook<RootStore> = useSelector
export const useAppDispatch = () => useDispatch<Dispatch>()