import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryEditorPage } from './gallery-editor-page';

describe('GalleryEditorPage', () => {
  let component: GalleryEditorPage;
  let fixture: ComponentFixture<GalleryEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryEditorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryEditorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
