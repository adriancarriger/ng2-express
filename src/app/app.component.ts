import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
const io = require('socket.io-client');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  private url = 'http://localhost:4300';
  private socket;

  constructor(private apiService: ApiService) { };

  ngOnInit() {
    this.apiService.getStuff()
      .subscribe(x => this.data = x);
    this.socket = io(this.url);
    this.socket.on('message', (data) => {
      console.log(data);
    });
  }
}
