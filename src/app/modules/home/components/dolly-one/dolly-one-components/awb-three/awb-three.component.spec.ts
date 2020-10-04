import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbThreeComponent } from './awb-three.component';

describe('AwbThreeComponent', () => {
  let component: AwbThreeComponent;
  let fixture: ComponentFixture<AwbThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwbThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwbThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
