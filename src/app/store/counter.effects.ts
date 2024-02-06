import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrementAction, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";
import { onRunEffectsKey } from "@ngrx/effects/src/lifecycle_hooks";

@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions, private store: Store<{counter: number}>){        
    }

    loadCount = createEffect(() => this.actions$.pipe(
        ofType(init),
        switchMap(() => {
            const storedCounter = localStorage.getItem('count');
            
            if (storedCounter){
                return of (set({value: +storedCounter}));
            }

            return of (set({value: 0}));
        })
    ))

    saveCount = createEffect(
        () =>
            this.actions$.pipe(
                ofType(increment, decrementAction),
                withLatestFrom(this.store.select(selectCount)),
                tap(([action, counter]) => {
                    console.log('** action:', action);
                    localStorage.setItem('count', counter.toString())
                })
            ),
            { dispatch: false });
}