import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './interfaces/agent';
import { AgentService } from './services/agent/agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  agents$: Observable<Agent[]>;

  constructor(private agentService: AgentService) {}

  ngOnInit() {
    this.agents$ = this.agentService.getAgents();
  }
  
}
