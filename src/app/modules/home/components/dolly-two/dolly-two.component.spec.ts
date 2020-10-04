import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollyTwoComponent } from './dolly-two.component';

describe('DollyTwoComponent', () => {
  let component: DollyTwoComponent;
  let fixture: ComponentFixture<DollyTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollyTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
