import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWatermarkPage } from './image-watermark-page';

describe('ImageWatermarkPage', () => {
  let component: ImageWatermarkPage;
  let fixture: ComponentFixture<ImageWatermarkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageWatermarkPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageWatermarkPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
