import { Component, Input, OnInit } from '@angular/core';
import { Agent } from '../../interfaces/agent';
import { CallType } from '../../interfaces/call-type';

@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.scss']
})
export class FacetsComponent implements OnInit {
  @Input() agents: Agent[];
  @Input() callTypes: CallType[];

  constructor() { }

  ngOnInit(): void {
  }

}
