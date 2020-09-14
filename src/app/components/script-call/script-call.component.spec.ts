import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCallComponent } from './script-call.component';

describe('ScriptCallComponent', () => {
  let component: ScriptCallComponent;
  let fixture: ComponentFixture<ScriptCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
