import { createReducer, on } from "@ngrx/store";
import { decrementAction, increment } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) =>  state + action.value ),
    on(decrementAction, (state, action) => state - action.value)
);
