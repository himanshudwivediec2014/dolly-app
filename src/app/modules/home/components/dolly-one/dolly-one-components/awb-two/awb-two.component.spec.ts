import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbTwoComponent } from './awb-two.component';

describe('AwbTwoComponent', () => {
  let component: AwbTwoComponent;
  let fixture: ComponentFixture<AwbTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwbTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwbTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
