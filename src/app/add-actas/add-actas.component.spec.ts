import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActasComponent } from './add-actas.component';

describe('AddActasComponent', () => {
  let component: AddActasComponent;
  let fixture: ComponentFixture<AddActasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
