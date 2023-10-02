import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "../features/PaginationSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import SearchReducer from "../features/SearchSlice";

export const store = configureStore({
  reducer: {
    pagination: PaginationReducer,
    search: SearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
