import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planning } from './planning';

describe('Planning', () => {
  let component: Planning;
  let fixture: ComponentFixture<Planning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Planning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Planning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
