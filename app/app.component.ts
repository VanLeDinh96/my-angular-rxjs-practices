import { Component } from '@angular/core';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import { from } from 'rxjs/observable/from';
import { filter, map, reduce } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [1, 2, 3, 4, 5];
  filteredData: number[];
  mappedData: number[];
  reducedData: number;
  public ngOnInit() {
    const source = from(this.data);

    source.subscribe(() => {
      this.filteredData = this.data.filter((val) => val % 2 === 0);
      this.mappedData = this.data.map((val) => val * 2);
      this.reducedData = this.data
        .filter((val) => val % 2 === 0)
        .reduce((acc, val) => acc + val * 2, 0);
    });
  }
}
