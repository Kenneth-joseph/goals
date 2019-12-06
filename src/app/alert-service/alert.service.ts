import { Injectable } from '@angular/core';
import {Goal} from '../goal';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
 alertMessage(message: string ){
 alert(message);
 }
  constructor() { }
}

