import { Component } from '@angular/core';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import { interval } from 'rxjs/observable/interval';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public ngOnInit() {
    const observable = interval(1000);

    observable.subscribe((value) => console.log(`Subscriber 1: ${value}`));
    setTimeout(() => {
      observable.subscribe((value) => console.log(`Subscriber 2: ${value}`));
    }, 5000);
  }
}
