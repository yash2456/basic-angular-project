import { TestBed } from '@angular/core/testing';

import { ServiemailService } from './serviemail.service';

describe('ServiemailService', () => {
  let service: ServiemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
