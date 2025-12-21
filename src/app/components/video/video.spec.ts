import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video } from './video';

describe('Video', () => {
  let component: Video;
  let fixture: ComponentFixture<Video>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Video]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Video);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
