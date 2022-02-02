import { TestBed } from '@angular/core/testing';

import { CategoriesPagesService } from './categories-pages.service';

describe('CategoriesPagesService', () => {
  let service: CategoriesPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
