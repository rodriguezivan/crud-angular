import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActasComponent } from './delete-actas.component';

describe('DeleteActasComponent', () => {
  let component: DeleteActasComponent;
  let fixture: ComponentFixture<DeleteActasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
