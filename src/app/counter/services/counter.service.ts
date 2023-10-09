import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CounterService {

  counter$ = new BehaviorSubject<number>(0);
  constructor() { }

  increment() {
    const counterValue = this.counter$.getValue();
    this.counter$.next(counterValue + 1);
  }
  setCounter(value: number) {
    this.counter$.next(value);
  }
  resetCounter() {
    this.counter$.next(0);
  }
}
