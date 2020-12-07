import { TestBed } from '@angular/core/testing';

import { TutorialService } from './service.service';

describe('ServiceService', () => {
  let service: TutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
