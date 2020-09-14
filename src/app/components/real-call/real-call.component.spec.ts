import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealCallComponent } from './real-call.component';

describe('RealCallComponent', () => {
  let component: RealCallComponent;
  let fixture: ComponentFixture<RealCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
