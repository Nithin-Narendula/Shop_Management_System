import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpComponent } from './show-sp.component';

describe('ShowSpComponent', () => {
  let component: ShowSpComponent;
  let fixture: ComponentFixture<ShowSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
