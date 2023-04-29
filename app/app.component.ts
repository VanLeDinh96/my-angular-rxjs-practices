import { Component } from '@angular/core';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private subject = new Subject<string>();
  values: string[] = [];

  constructor() {
    this.subject.subscribe((value) => {
      this.values.push(value);
    });
  }
  public ngOnInit() {}

  emitValue() {
    const value = Math.random().toString();
    this.subject.next(value);
  }
}
