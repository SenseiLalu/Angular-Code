import { TestBed } from '@angular/core/testing';

import { AssigneTaskService } from './assigne-task.service';

describe('AssigneTaskService', () => {
  let service: AssigneTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigneTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
