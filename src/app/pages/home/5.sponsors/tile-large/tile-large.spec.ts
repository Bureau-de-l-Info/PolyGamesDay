import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLarge } from './tile-large';

describe('TileLarge', () => {
  let component: TileLarge;
  let fixture: ComponentFixture<TileLarge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileLarge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileLarge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
