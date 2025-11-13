import { TestBed } from '@angular/core/testing';

import { Datalocal } from './datalocal';

describe('Datalocal', () => {
  let service: Datalocal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datalocal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
