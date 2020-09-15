import { Component, Input, OnInit } from '@angular/core';
import { Script } from '../../interfaces/script';

@Component({
  selector: 'app-script-call',
  templateUrl: './script-call.component.html',
  styleUrls: ['./script-call.component.scss']
})
export class ScriptCallComponent implements OnInit {
  displayedColumns: string[] = ['line', 'speaker', 'sentence'];
  @Input() script: Script;

  constructor() { }

  ngOnInit(): void {
  }

}
