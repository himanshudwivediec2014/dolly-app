import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbOneComponent } from './awb-one.component';

describe('AwbOneComponent', () => {
  let component: AwbOneComponent;
  let fixture: ComponentFixture<AwbOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwbOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwbOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
