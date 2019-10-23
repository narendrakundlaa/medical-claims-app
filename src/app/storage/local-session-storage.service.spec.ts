import { TestBed } from '@angular/core/testing';

import { LocalSessionStorageService } from './local-session-storage.service';

describe('LocalSessionStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalSessionStorageService = TestBed.get(LocalSessionStorageService);
    expect(service).toBeTruthy();
  });
});
