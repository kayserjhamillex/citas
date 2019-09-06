import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidheaderComponent } from './validheader.component';

describe('ValidheaderComponent', () => {
  let component: ValidheaderComponent;
  let fixture: ComponentFixture<ValidheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
