import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reglement } from './reglement';

describe('Reglement', () => {
  let component: Reglement;
  let fixture: ComponentFixture<Reglement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reglement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reglement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
