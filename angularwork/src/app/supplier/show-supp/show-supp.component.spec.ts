import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuppComponent } from './show-supp.component';

describe('ShowSuppComponent', () => {
  let component: ShowSuppComponent;
  let fixture: ComponentFixture<ShowSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
