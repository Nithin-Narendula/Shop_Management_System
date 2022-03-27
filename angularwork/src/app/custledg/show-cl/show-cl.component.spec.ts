import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClComponent } from './show-cl.component';

describe('ShowClComponent', () => {
  let component: ShowClComponent;
  let fixture: ComponentFixture<ShowClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowClComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
