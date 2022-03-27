import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesgComponent } from './edit-desg.component';

describe('EditDesgComponent', () => {
  let component: EditDesgComponent;
  let fixture: ComponentFixture<EditDesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
