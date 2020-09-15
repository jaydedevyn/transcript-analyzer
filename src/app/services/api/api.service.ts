import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Agent } from '../../interfaces/agent';
import { map } from "rxjs/operators";
import { CallType } from '../../interfaces/call-type';
import { Call } from '../../interfaces/call';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAgents(): Observable<Agent[]> {
    return this.http.get(`${environment.api}/agents`).pipe(map((agents: any) => 
      agents.map((agent: any) => ({ id: agent.agent_id, name: agent.full_name, email: agent.email }))
    )) as Observable<Agent[]>;
  }

  getCallTypes(): Observable<CallType[]> {
    return this.http.get(`${environment.api}/callTypes`).pipe(map((callTypes: any) => 
      callTypes.map((callType: any) => ({ id: callType.calltype_id, name: callType.name }))
    )) as Observable<CallType[]>;
  }

  getCall(agentId: string, callTypeId: string): Observable<Call[]> {
    console.log('in here')
    return this.http.get(`${environment.api}/calls?agent_id=${agentId}&calltype_id=${callTypeId}`).pipe(map((call: any) => 
      call
    )) as Observable<Call[]>;
  }
}
