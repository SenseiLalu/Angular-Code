import { TestBed } from '@angular/core/testing';

import { AllProjectService } from './all-project.service';

describe('AllProjectService', () => {
  let service: AllProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
