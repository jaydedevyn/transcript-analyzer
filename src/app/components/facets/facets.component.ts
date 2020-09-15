import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Agent } from '../../interfaces/agent';
import { Call } from '../../interfaces/call';
import { CallType } from '../../interfaces/call-type';

@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.scss']
})
export class FacetsComponent implements OnDestroy {
  @Input() agents: Agent[];
  @Input() callTypes: CallType[];
  @Input() calls: Call[];
  @Output() onAgentSelected = new EventEmitter();
  @Output() onCallTypeSelected = new EventEmitter();
  @Output() onCallSelected = new EventEmitter();
  @Output() onSliderChange = new EventEmitter();
  
  facetForm: FormGroup = new FormGroup({
    agent: new FormControl(''),
    callType: new FormControl(''),
    call: new FormControl(''),
  });
  unsubscribeAll = new Subject()
  sliderValue: number = 38;

  constructor() { }

  emitAgentSelected() {
    const agentId = this.facetForm.value.agent;
    const agent = this.agents.find((a) => a.id === agentId)
    
    this.onAgentSelected.emit(agent)
  }

  emitCallTypeSelected() {
    const { agent, callType } = this.facetForm.value;

    this.onCallTypeSelected.emit({ agent, callType } )
  }

  emitCallSelected() {
    const { call } = this.facetForm.value;
    this.onCallSelected.emit(call)
    this.defaultSliderValue()
  }

  emitSliderChange(e: any) {
    this.onSliderChange.emit(e.value);
  }

  defaultSliderValue() {
    this.sliderValue = 38;
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }


}
