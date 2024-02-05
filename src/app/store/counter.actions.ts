import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment',
    props<{value: number}>()
    );

export const decrementAction = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
    );
