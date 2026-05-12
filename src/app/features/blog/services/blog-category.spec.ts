import { TestBed } from '@angular/core/testing';

import { BlogCategory } from './blog-category';

describe('BlogCategory', () => {
  let service: BlogCategory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCategory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
