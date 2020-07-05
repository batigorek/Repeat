import { Injectable } from '@angular/core';
import { BaseHttp } from './basehttp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuserService extends BaseHttp {

  constructor(public http: HttpClient) { 
    super(http, 'musers');
  }
}
