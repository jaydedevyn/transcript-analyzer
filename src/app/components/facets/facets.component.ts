import { Component, Input, OnInit } from '@angular/core';
import { Agent } from '../../interfaces/agent';

@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.scss']
})
export class FacetsComponent implements OnInit {
  @Input() agents: Agent[];

  constructor() { }

  ngOnInit(): void {
  }

}
