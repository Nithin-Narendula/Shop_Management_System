import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDesgComponent } from './show-desg.component';

describe('ShowDesgComponent', () => {
  let component: ShowDesgComponent;
  let fixture: ComponentFixture<ShowDesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
