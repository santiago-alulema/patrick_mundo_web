import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoInfoModal } from './photo-info-modal';

describe('PhotoInfoModal', () => {
  let component: PhotoInfoModal;
  let fixture: ComponentFixture<PhotoInfoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoInfoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoInfoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
