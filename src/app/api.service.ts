import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getStuff() {
    return this.http.get('/api/test')
      .map(x => x.json());
  }

}
