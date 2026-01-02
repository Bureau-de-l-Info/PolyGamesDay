import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSmall } from './tile-small';

describe('TileSmall', () => {
  let component: TileSmall;
  let fixture: ComponentFixture<TileSmall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileSmall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileSmall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
