import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Agent } from '../../interfaces/agent';
import { map } from "rxjs/operators";
import { CallType } from '../../interfaces/call-type';
import { Call, CallDetail } from '../../interfaces/call';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  agent: Agent;

  constructor(private http: HttpClient) { }

  setCurrentAgent(agent: Agent) {
    this.agent = agent;
  }

  getAgents(): Observable<Agent[]> {
    return this.http.get(`${environment.api}/agents`).pipe(map((agents: any) => 
      agents.map((agent: any) => ({ id: agent.agent_id, name: agent.full_name, email: agent.email }))
    )) as Observable<Agent[]>;
  }

  getAgentById(agentId: string): Observable<Agent> {
    return this.http.get(`${environment.api}/agents?agent_id=${agentId}`).pipe(map((agent: any) => 
      ({ id: agent.agent_id, name: agent.full_name, email: agent.email })
    )) as Observable<Agent>;
  }

  getCallTypes(): Observable<CallType[]> {
    return this.http.get(`${environment.api}/callTypes`).pipe(map((callTypes: any) => 
      callTypes.map((callType: any) => ({ id: callType.calltype_id, name: callType.name }))
    )) as Observable<CallType[]>;
  }

  getCalls(agentId: string, callTypeId: string): Observable<Call[]> {
    return this.http.get(`${environment.api}/calls?agent_id=${agentId}&calltype_id=${callTypeId}`).pipe(map((calls: any) => 
      calls.map((call: any) => ({
        id: call.call_id,
        callType: call.calltype_id,
        agent: call.agent.agent_id,
        customer: call.customer.full_name,
        startTime: call.call_datetime,
      }))
    )) as Observable<Call[]>;
    
  }

  getCallById(callId: string): Observable<CallDetail> {
    return this.http.get(`${environment.api}/calls?call_id=${callId}`).pipe(map((call: any) => ({
      id: call.call_id,
      callType: call.calltype_id,
      agent: call.agent.agent_id,
      customer: call.customer.full_name,
      startTime: call.call_start_time,
      duration: call.duration,
      script: call.script.map((s) => ({...s, matchingSentence: s.matching_sentence})),
      transcript: call.transcript.map((element) => ({
        time: element.timeFrom,
        speaker: element.channel === call.agent.channel_no ? call.agent : 
        (element.channel === call.customer.channel_no ? call.customer.full_name : 'Unknown'),
        sentence: element.sentence,
        matchingSentence: element.matching_sentence,
        similiarity: element.similiarity,
        order: element.order,
        
        
      }))
    }))) as Observable<CallDetail>;
  }
}
