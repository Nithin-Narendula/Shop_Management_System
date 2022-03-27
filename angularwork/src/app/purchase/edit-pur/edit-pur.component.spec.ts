import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurComponent } from './edit-pur.component';

describe('EditPurComponent', () => {
  let component: EditPurComponent;
  let fixture: ComponentFixture<EditPurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
