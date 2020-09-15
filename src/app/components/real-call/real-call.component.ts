import { Component, Input, OnInit } from '@angular/core';
import { Transcript } from '../../interfaces/transcript';

@Component({
  selector: 'app-real-call',
  templateUrl: './real-call.component.html',
  styleUrls: ['./real-call.component.scss']
})
export class RealCallComponent implements OnInit {
  displayedColumns: string[] = ['Time', 'Speaker', 'Sentence'];
  @Input() transcript: Transcript;

  constructor() { }

  ngOnInit(): void {
  }

}
