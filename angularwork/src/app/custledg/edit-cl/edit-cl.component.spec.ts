import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClComponent } from './edit-cl.component';

describe('EditClComponent', () => {
  let component: EditClComponent;
  let fixture: ComponentFixture<EditClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
