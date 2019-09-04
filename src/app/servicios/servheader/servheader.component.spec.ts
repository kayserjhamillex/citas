import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServheaderComponent } from './servheader.component';

describe('ServheaderComponent', () => {
  let component: ServheaderComponent;
  let fixture: ComponentFixture<ServheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
