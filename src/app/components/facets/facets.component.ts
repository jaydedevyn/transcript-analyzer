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
  facetForm: FormGroup = new FormGroup({
    agent: new FormControl(''),
    callType: new FormControl(''),
    call: new FormControl(''),
  });
  unsubscribeAll = new Subject()

  constructor() { }

  emitAgentSelected() {
    const { agent, callType } = this.facetForm.value;
    this.onAgentSelected.emit({ agent, callType } )
  }

  emitCallTypeSelected() {
    const { agent, callType } = this.facetForm.value;

    this.onCallTypeSelected.emit({ agent, callType } )
  }

  emitCallSelected() {
    const { call } = this.facetForm.value;

    this.onCallSelected.emit(call)
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }


}
