import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';

  private init$: Observable<any>;

  public ngOnInit() {
    const observable$ = of('data', 'from', 'observable', '!');
    observable$
      .pipe(
        map(() => {
          // throw an error
          throw new Error('Something went wrong!');
        }),
        catchError((error) => {
          // handle the error
          console.error('An error occurred:', error);
          // return a default value or rethrow the error
          return of('default value');
        })
      )
      .subscribe(
        (data) => console.log('Received data:', data),
        (error) => console.error('An error occurred:', error),
        () => console.log('Observable completed')
      );
  }
}
