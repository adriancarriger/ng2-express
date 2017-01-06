import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService) { };
  ngOnInit() {
    this.apiService.getStuff()
      .subscribe(x => this.data = x);
  }
}
