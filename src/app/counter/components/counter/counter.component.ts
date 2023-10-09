import {Component} from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter$ = this.counterService.counter$;
  newCounter = 0;
  constructor(private counterService: CounterService) {
  }

  increment() {
    this.counterService.increment();
  }

  saveCounter() {
    this.counterService.setCounter(this.newCounter);
  }
}
