import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './interfaces/agent';
import { Call } from './interfaces/call';
import { CallType } from './interfaces/call-type';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  agents$: Observable<Agent[]> = this.apiService.getAgents();
  callTypes$: Observable<CallType[]> = this.apiService.getCallTypes();
  call$: Observable<Call[]> = this.apiService.getCall('572a41e7a', 'f44785ceA');

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }

  getCall() {

  }
  
}
