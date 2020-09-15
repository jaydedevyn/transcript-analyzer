import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './interfaces/agent';
import { Call, CallDetail } from './interfaces/call';
import { CallType } from './interfaces/call-type';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  agents$: Observable<Agent[]> = this.apiService.getAgents();
  callTypes$: Observable<CallType[]> = this.apiService.getCallTypes();
  calls$: Observable<Call[]>;
  call$: Observable<CallDetail>;
  sensitivity: number = 38; //slider sensitivity

  constructor(private apiService: ApiService) { }

  setCurrentAgent(agent: Agent) {
    this.apiService.setCurrentAgent(agent);
  }

  getCalls(data: { agent: string, callType: string }) {
    const { agent, callType } = data;
    this.calls$ = this.apiService.getCalls(agent, callType);
  }

  updateSensitivity(sensitivity: number) {
    this.sensitivity = sensitivity;
  }

  getCall(callId: string) {
    this.call$ = this.apiService.getCallById(callId)
    this.call$.subscribe(console.log)
  }

}
