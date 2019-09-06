import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocbodyComponent } from './docbody.component';

describe('DocbodyComponent', () => {
  let component: DocbodyComponent;
  let fixture: ComponentFixture<DocbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
