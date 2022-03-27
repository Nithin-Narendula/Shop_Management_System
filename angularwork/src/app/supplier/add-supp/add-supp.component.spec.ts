import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuppComponent } from './add-supp.component';

describe('AddSuppComponent', () => {
  let component: AddSuppComponent;
  let fixture: ComponentFixture<AddSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
