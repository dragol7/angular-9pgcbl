import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class Logger1Service implements Logger {

  log(msg: string): void {
    console.log(msg + ' ' + msg); 
  }

}