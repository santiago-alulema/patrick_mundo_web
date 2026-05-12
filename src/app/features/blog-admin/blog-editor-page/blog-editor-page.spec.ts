import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditorPage } from './blog-editor-page';

describe('BlogEditorPage', () => {
  let component: BlogEditorPage;
  let fixture: ComponentFixture<BlogEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogEditorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogEditorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
