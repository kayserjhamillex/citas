import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServbodyComponent } from './servbody.component';

describe('ServbodyComponent', () => {
  let component: ServbodyComponent;
  let fixture: ComponentFixture<ServbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
