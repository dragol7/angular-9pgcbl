import { Component, Inject } from '@angular/core';
import { Logger } from './logger';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(@Inject('l1') private log1: Logger, @Inject('l2') private log2: Logger) {
    this.log1.log('sta1');
    this.log2.log('sta2');
  }
}
