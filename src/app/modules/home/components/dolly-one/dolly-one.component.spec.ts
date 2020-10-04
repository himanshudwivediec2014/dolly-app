import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollyOneComponent } from './dolly-one.component';

describe('DollyOneComponent', () => {
  let component: DollyOneComponent;
  let fixture: ComponentFixture<DollyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
