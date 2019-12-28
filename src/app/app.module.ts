import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Logger1Service } from './logger1.service';
import { Logger2Service } from './logger2.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    // can not use interface as provider since they are not
    // exist in js
    {provide: 'l1', useClass: Logger1Service},
    {provide: 'l2', useClass: Logger2Service}
  ]
})
export class AppModule { }
