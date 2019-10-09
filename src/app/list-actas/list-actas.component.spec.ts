import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActasComponent } from './list-actas.component';

describe('ListActasComponent', () => {
  let component: ListActasComponent;
  let fixture: ComponentFixture<ListActasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
