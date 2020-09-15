import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Agent } from '../../interfaces/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAgents(): Observable<Agent[]> {
    return this.http.get(`${environment.api}/agents`) as Observable<Agent[]>;
  }
}
