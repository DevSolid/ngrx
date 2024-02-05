import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  
  constructor(private store: Store) {

  }

  increment() {
    this.store.dispatch(increment({value: 2}));
  }

  decrement() {
    this.store.dispatch(decrementAction({value: 1}));
  }
}
