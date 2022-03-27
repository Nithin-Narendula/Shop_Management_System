import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlComponent } from './edit-sl.component';

describe('EditSlComponent', () => {
  let component: EditSlComponent;
  let fixture: ComponentFixture<EditSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
