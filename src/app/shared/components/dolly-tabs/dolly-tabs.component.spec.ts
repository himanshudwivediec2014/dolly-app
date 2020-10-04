import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollyTabsComponent } from './dolly-tabs.component';

describe('DollyTabsComponent', () => {
  let component: DollyTabsComponent;
  let fixture: ComponentFixture<DollyTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollyTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
